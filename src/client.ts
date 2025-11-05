import axios, { AxiosInstance } from 'axios';
import {
  LegifranceConfig,
  OAuthToken,
  SearchRequest,
  SearchResponse,
  ConsultCodeRequest,
  ConsultCodeResponse,
  JorfRequest,
  JorfResponse,
  ArticleByCidRequest,
  ArticleResponse,
  SuggestRequest,
  SuggestResponse,
  ChronoVersionRequest,
  ChronoVersionResponse,
  ListRequest,
} from './types';

/**
 * Client SDK pour l'API Legifrance
 */
export class LegifranceClient {
  private clientId: string;
  private clientSecret: string;
  private baseURL: string;
  private oauthURL: string;
  private axiosInstance: AxiosInstance;
  private token: OAuthToken | null = null;

  constructor(config: LegifranceConfig) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    
    const environment = config.environment || 'sandbox';
    
    if (config.baseURL) {
      this.baseURL = config.baseURL;
    } else {
      this.baseURL = environment === 'production'
        ? 'https://api.piste.gouv.fr/dila/legifrance/lf-engine-app'
        : 'https://sandbox-api.piste.gouv.fr/dila/legifrance/lf-engine-app';
    }
    
    if (config.oauthURL) {
      this.oauthURL = config.oauthURL;
    } else {
      this.oauthURL = environment === 'production' 
        ? 'https://oauth.piste.gouv.fr/api/oauth/token'
        : 'https://sandbox-oauth.piste.gouv.fr/api/oauth/token';
    }
    

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Intercepteur pour ajouter le token à chaque requête
    this.axiosInstance.interceptors.request.use(async (config) => {
      const token = await this.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token.access_token}`;
      }
      return config;
    });
    
    // Initialisation automatique si demandée
    if (config.autoInit) {
      this.initialize().catch(() => {
        // Ignore l'erreur ici, elle sera gérée lors de la première requête
      });
    }
  }

  /**
   * Initialise le client en récupérant le token OAuth2 immédiatement
   */
  async initialize(): Promise<void> {
    await this.getToken();
  }

  /**
   * Retourne le token actuel (ou null s'il n'est pas encore récupéré)
   */
  getTokenInfo(): OAuthToken | null {
    return this.token;
  }

  /**
   * Obtient un token OAuth2 valide (réutilise le token existant s'il n'est pas expiré)
   */
  private async getToken(): Promise<OAuthToken> {
    if (this.token && this.token.expiresAt > Date.now()) {
      return this.token as OAuthToken;
    }

    try {
      const credentials = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');
      
      const response = await axios.post(
        this.oauthURL,
        new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'openid',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${credentials}`,
          },
        }
      );

      this.token = {
        ...response.data,
        expiresAt: Date.now() + (response.data.expires_in - 60) * 1000, // -60s de marge
      };

      return this.token as OAuthToken;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Échec de l'authentification OAuth2: ${error.response?.data?.error_description || error.message}`
        );
      }
      throw error;
    }
  }

  /**
   * Recherche de textes juridiques
   */
  async search(request: SearchRequest): Promise<SearchResponse> {
    const response = await this.axiosInstance.post('/search', request);
    return response.data;
  }

  /**
   * Consulte un code
   */
  async consultCode(request: ConsultCodeRequest): Promise<ConsultCodeResponse> {
    const response = await this.axiosInstance.post('/consult/code', request);
    return response.data;
  }

  /**
   * Consulte un texte JORF
   */
  async consultJorf(request: JorfRequest): Promise<JorfResponse> {
    const response = await this.axiosInstance.post('/consult/jorf', request);
    return response.data;
  }

  /**
   * Récupère un article par son CID
   */
  async getArticleByCid(request: ArticleByCidRequest): Promise<ArticleResponse> {
    const response = await this.axiosInstance.post('/consult/getArticle', request);
    return response.data;
  }

  /**
   * Autosuggestion sur les textes
   */
  async suggest(request: SuggestRequest): Promise<SuggestResponse> {
    const response = await this.axiosInstance.post('/suggest/suggest', request);
    return response.data;
  }

  /**
   * Récupère les versions chronologiques d'un texte
   */
  async getChronoVersions(request: ChronoVersionRequest): Promise<ChronoVersionResponse> {
    const response = await this.axiosInstance.post('/consult/chronoVersion', request);
    return response.data;
  }

  /**
   * Liste des codes disponibles
   */
  async listCodes(request?: ListRequest): Promise<any> {
    const response = await this.axiosInstance.post('/list/code', request || {});
    return response.data;
  }

  /**
   * Liste des textes LODA
   */
  async listLoda(request?: { pageSize?: number; pageNumber?: number }): Promise<any> {
    const response = await this.axiosInstance.post('/list/loda', request || {});
    return response.data;
  }

  /**
   * Ping pour vérifier la connexion
   */
  async ping(): Promise<string> {
    const response = await this.axiosInstance.get('/consult/ping');
    return response.data;
  }

  /**
   * Recherche croisée
   */
  async crossSearch(request: SearchRequest): Promise<SearchResponse> {
    const response = await this.axiosInstance.post('/search/crossSearch', request);
    return response.data;
  }

  /**
   * Récupère la table des matières d'un texte
   */
  async getTableOfContents(request: { textId: string }): Promise<any> {
    const response = await this.axiosInstance.post('/consult/tableOfContents', request);
    return response.data;
  }

  /**
   * Liste des derniers JO
   */
  async getLastJo(request: { number: number }): Promise<any> {
    const response = await this.axiosInstance.post('/list/jo/last', request);
    return response.data;
  }
}

