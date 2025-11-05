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
   * Consult a LODA text by ID
   */
  async consultLoda(textId: string, options?: { date?: string; searchedString?: string }): Promise<any> {
    const request = {
      textId,
      date: options?.date || new Date().toISOString().split('T')[0],
      searchedString: options?.searchedString,
    };
    const response = await this.axiosInstance.post('/consult/loda', request);
    return response.data;
  }

  /**
   * Get specific version of LODA text by date
   */
  async consultLodaVersion(textId: string, date: string): Promise<any> {
    const dateObj = new Date(date);
    const request = {
      textId,
      year: dateObj.getFullYear(),
      month: dateObj.getMonth() + 1,
      dayOfMonth: dateObj.getDate(),
    };
    const response = await this.axiosInstance.post('/consult/loda/version', request);
    return response.data;
  }

  /**
   * List versions of a LODA text
   */
  async listLodaVersions(textId: string): Promise<any> {
    const response = await this.axiosInstance.post('/consult/loda/versions', { textId });
    return response.data;
  }

  /**
   * Search in LODA texts with ALL filters (complete Python implementation)
   */
  async searchLoda(
    query?: string, 
    options?: { 
      textId?: string;
      champ?: string;
      typeRecherche?: string;
      fond?: 'LODA_DATE' | 'LODA_ETAT';
      natures?: string[];
      dateSignature?: { start: string; end: string } | string;
      datePublication?: { start: string; end: string } | string;
      pageNumber?: number;
      pageSize?: number;
    }
  ): Promise<SearchResponse> {
    const champs: any[] = [];

    // Add text_id field if provided (search by NUM field)
    if (options?.textId) {
      champs.push({
        typeChamp: 'NUM',
        criteres: [{
          valeur: options.textId,
          typeRecherche: 'EXACTE',
          operateur: 'ET' as const,
          proximite: null,
          criteres: null,
        }],
        operateur: 'ET' as const,
      });
    }

    // Add search field if provided
    if (query) {
      // Search in ALL fields with TOUS_LES_MOTS_DANS_UN_CHAMP
      champs.push({
        typeChamp: options?.champ || 'ALL',
        criteres: [{
          valeur: query,
          typeRecherche: options?.typeRecherche || 'TOUS_LES_MOTS_DANS_UN_CHAMP',
          operateur: 'ET' as const,
          proximite: null,
          criteres: null,
        }],
        operateur: 'ET' as const,
      });

      // Also search in TEXTE field with UN_DES_MOTS
      champs.push({
        typeChamp: 'TEXTE',
        criteres: [{
          valeur: query,
          typeRecherche: 'UN_DES_MOTS',
          operateur: 'ET' as const,
          proximite: null,
          criteres: null,
        }],
        operateur: 'OU' as const,
      });

      // Also search in TITLE field with UN_DES_MOTS
      champs.push({
        typeChamp: 'TITLE',
        criteres: [{
          valeur: query,
          typeRecherche: 'UN_DES_MOTS',
          operateur: 'ET' as const,
          proximite: null,
          criteres: null,
        }],
        operateur: 'OU' as const,
      });
    }

    // If no fields, create a default field that will match all
    if (champs.length === 0) {
      champs.push({
        typeChamp: 'TITLE',
        criteres: [{
          valeur: ' ',
          typeRecherche: 'EXACTE',
          operateur: 'ET' as const,
          proximite: null,
          criteres: null,
        }],
        operateur: 'ET' as const,
      });
    }

    // Build filters (like Python)
    const filtres: any[] = [];

    // Always add date version filter
    filtres.push({
      facette: 'DATE_VERSION',
      singleDate: Date.now(),
      dates: null,
      valeurs: null,
      multiValeurs: null,
    });

    // Always add legal status filters
    filtres.push({
      facette: 'TEXT_LEGAL_STATUS',
      valeurs: ['VIGUEUR'],
      dates: null,
      singleDate: null,
      multiValeurs: null,
    });

    filtres.push({
      facette: 'ARTICLE_LEGAL_STATUS',
      valeurs: ['VIGUEUR'],
      dates: null,
      singleDate: null,
      multiValeurs: null,
    });

    // Add nature filter if specified
    if (options?.natures && options.natures.length > 0) {
      filtres.push({
        facette: 'NATURE',
        valeurs: options.natures,
        dates: null,
        singleDate: null,
        multiValeurs: null,
      });
    }

    // Add date signature filter if specified
    if (options?.dateSignature) {
      const dates = typeof options.dateSignature === 'string'
        ? { start: options.dateSignature, end: options.dateSignature }
        : options.dateSignature;
      
      filtres.push({
        facette: 'DATE_SIGNATURE',
        dates,
        valeurs: null,
        singleDate: null,
        multiValeurs: null,
      });
    }

    // Add date publication filter if specified
    if (options?.datePublication) {
      const dates = typeof options.datePublication === 'string'
        ? { start: options.datePublication, end: options.datePublication }
        : options.datePublication;
      
      filtres.push({
        facette: 'DATE_PUBLICATION',
        dates,
        valeurs: null,
        singleDate: null,
        multiValeurs: null,
      });
    }

    const fond = options?.fond || 'LODA_DATE';

    const searchRequest: SearchRequest = {
      fond,
      recherche: {
        champs,
        filtres,
        operateur: 'ET',
        pageNumber: options?.pageNumber || 1,
        pageSize: options?.pageSize || 10,
        sort: 'PUBLICATION_DATE_DESC',
        typePagination: 'DEFAUT',
      }
    };
    
    const response = await this.axiosInstance.post('/search', searchRequest);
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

