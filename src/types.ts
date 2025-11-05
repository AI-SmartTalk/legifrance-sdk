/**
 * Configuration pour le client Legifrance
 */
export interface LegifranceConfig {
  clientId: string;
  clientSecret: string;
  baseURL?: string;
  oauthURL?: string;
  environment?: 'sandbox' | 'production';
  autoInit?: boolean; // Si true, récupère le token immédiatement
}

/**
 * Token OAuth2
 */
export interface OAuthToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  expiresAt: number;
}

/**
 * Requête de recherche générale
 */
export interface SearchRequest {
  recherche: Recherche;
  fond?: string;
  champ?: string;
  pageNumber?: number;
  pageSize?: number;
  sort?: string;
  typePagination?: string;
}

export interface Recherche {
  champs: RechercheChamp[];
  operateur: 'ET' | 'OU';
  pageNumber: number;
  pageSize: number;
  sort: string;
  typePagination: 'DEFAUT' | 'ARTICLE';
  filtres?: Filtre[];
  fromAdvancedRecherche?: boolean;
  secondSort?: string;
}

export interface RechercheChamp {
  typeChamp: string;
  criteres: Critere[];
  operateur: 'ET' | 'OU';
}

export interface Critere {
  valeur: string;
  typeRecherche?: string;
  operateur?: 'ET' | 'OU' | 'SAUF' | 'PROX';
  proximite?: number;
  criteres?: Critere[];
}

export interface Filtre {
  facette: string;
  valeur: string;
}

/**
 * Réponse de recherche
 */
export interface SearchResponse {
  results: SearchResult[];
  totalResultNumber: number;
  pageNumber: number;
  pageSize: number;
}

export interface SearchResult {
  id: string;
  cid: string;
  nature: string;
  num: string;
  title: string;
  date: number;
  etat: string;
  texteHtml?: string;
}

/**
 * Requête de consultation de code
 */
export interface ConsultCodeRequest {
  textId: string;
  date?: number;
  sctId?: string;
}

/**
 * Réponse de consultation de code
 */
export interface ConsultCodeResponse {
  id: string;
  cid: string;
  title: string;
  date: number;
  sections?: Section[];
  articles?: Article[];
}

export interface Section {
  id: string;
  cid: string;
  title: string;
  etat: string;
  sections?: Section[];
  articles?: Article[];
}

export interface Article {
  id: string;
  cid: string;
  num: string;
  title: string;
  etat: string;
  dateDebut: number;
  dateFin: number;
  texte?: string;
  texteHtml?: string;
}

/**
 * Requête JORF
 */
export interface JorfRequest {
  textId: string;
  date?: number;
}

/**
 * Réponse JORF
 */
export interface JorfResponse {
  id: string;
  cid: string;
  title: string;
  nature: string;
  num: string;
  nor: string;
  date: number;
  texteHtml?: string;
  articles?: Article[];
}

/**
 * Requête de liste
 */
export interface ListRequest {
  fond?: string;
  date?: number;
  pageNumber?: number;
  pageSize?: number;
}

/**
 * Requête article par CID
 */
export interface ArticleByCidRequest {
  cid: string;
  date?: number;
}

/**
 * Réponse article
 */
export interface ArticleResponse {
  id: string;
  cid: string;
  num: string;
  title: string;
  etat: string;
  texte: string;
  texteHtml: string;
  dateDebut: number;
  dateFin: number;
}

/**
 * Requête de suggestion
 */
export interface SuggestRequest {
  recherche: string;
  champ?: string;
  fond?: string;
  pageSize?: number;
}

/**
 * Réponse de suggestion
 */
export interface SuggestResponse {
  suggestions: string[];
}

/**
 * Requête de versions chronologiques
 */
export interface ChronoVersionRequest {
  textCid: string;
  date?: number;
}

/**
 * Réponse de versions chronologiques
 */
export interface ChronoVersionResponse {
  versions: Version[];
}

export interface Version {
  date: number;
  etat: string;
}

