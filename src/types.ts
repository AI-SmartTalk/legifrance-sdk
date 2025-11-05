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
 * LODA Search request
 */
export interface LodaSearchRequest {
  recherche: Recherche;
  fond?: string;
  champ?: string;
  pageNumber?: number;
  pageSize?: number;
  sort?: string;
  typePagination?: string;
}

// Backward compatibility
export type SearchRequest = LodaSearchRequest;

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
 * LODA Search response
 */
export interface LodaSearchResponse {
  results: LodaSearchResult[];
  totalResultNumber: number;
  pageNumber: number;
  pageSize: number;
}

// Backward compatibility
export type SearchResponse = LodaSearchResponse;

export interface LodaSearchResultTitle {
  id: string;
  cid: string;
  title: string;
  legalStatus: string | null;
  startDate: string | null;
  endDate: string | null;
  nature: string | null;
}

export interface LodaSearchResultSection {
  id: string | null;
  title: string | null;
  dateVersion: string | null;
  legalStatus: string | null;
  extracts: any[];
}

export interface LodaSearchResult {
  id: string;
  cid: string;
  titles: LodaSearchResultTitle[];
  text: string | null;
  type: string;
  nature: string;
  origin: string;
  etat: string;
  date: string;
  sections: LodaSearchResultSection[];
  num: string | null;
  jorfText: string | null;
  numParution: string | null;
  datePublication: string;
  dossiersLegislatifs: any[];
  nor: string;
  motsCles: string[];
  appellations: string[];
  idAttachment: string | null;
  sizeAttachment: number | null;
  moreArticle: boolean;
  additionalResult: Record<string, any>;
  raisonSociale: string | null;
  idcc: string | null;
  descriptionFusionHtml: string | null;
  dateSignature: string | null;
  dateDiffusion: string | null;
  reference: string | null;
  themes: string[];
  conforme: boolean;
  resumePrincipal: any[];
  autreResume: any[];
  texteHtml?: string;
  title?: string;
}

// Backward compatibility aliases
export type SearchResult = LodaSearchResult;
export type SearchResultTitle = LodaSearchResultTitle;
export type SearchResultSection = LodaSearchResultSection;

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

// JURI (Jurisprudence) Types - Using generated types
export interface JuriSearchRequest {
  fond: 'JURI';
  recherche: {
    champs: any[];
    filtres: any[];
    operateur: string;
    pageNumber: number;
    pageSize: number;
    sort: string;
    typePagination: string;
    fromAdvancedRecherche?: boolean;
    secondSort?: string;
  };
}

// Re-export SearchResponseDTO as JuriSearchResponse for convenience
export type JuriSearchResponse = {
  totalResultNumber?: number;
  totalNbResult?: number;
  executionTime?: number;
  results?: JuriSearchResult[];
  facets?: any[];
  typePagination?: string;
}

// Extended SearchResult with JURI-specific fields
export interface JuriSearchResult {
  nor?: string;
  etat?: string;
  themes?: string[];
  nature?: string;
  type?: string;
  datePublication?: string;
  titles?: {
    id?: string;
    cid?: string;
    title?: string;
    legalStatus?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    nature?: string | null;
  }[];
  text?: string;
  origin?: string;
  date?: string;
  sections?: {
    id?: string | null;
    title?: string | null;
    dateVersion?: string | null;
    legalStatus?: string | null;
    extracts?: any[];
  }[];
  additionalResult?: Record<string, any>;
  [key: string]: any;
}

