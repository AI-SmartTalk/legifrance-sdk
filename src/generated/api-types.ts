/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * KaliTextConsultArticleRequest
 * Requête de consultation d'un texte d'une convention collective
 */
export interface KaliTextConsultArticleRequest {
  /**
   * Identifiant du texte ou d'un de ses éléments enfants (section/article)
   * @example "KALIARTI000005833238"
   */
  id: string;
}

/**
 * SuggestRequest
 * Requête de suggestion d'une recherche textuelle
 */
export interface SuggestRequest {
  /**
   * Texte à rechercher
   * @example "mariage"
   */
  searchText?: string;
}

/**
 * ModificateurDTO
 * Objet représentant un modificateur
 */
export interface ModificateurDTO {
  /**
   * Identifiant du texte du modificateur
   * @example "LEGITEXT000006072665"
   */
  idText?: string;
  /**
   * Nature
   * @example "CODE"
   */
  nature?: "LODA" | "JORF" | "CODE" | "KALI" | "JORFCONT";
  /** Identifiant de l'élément parent du modificateur (texte/section ...) */
  idParent?: string;
  /**
   * Identifiant
   * @example "LEGIARTI000006687518"
   */
  id?: string;
  /**
   * Titre du modificateur
   * @example "Code de la santé publique - art. L2211-1 (V)"
   */
  name?: string;
}

/**
 * GetArticleResponse
 * réponse de consultation d'un article
 */
export interface GetArticleResponse {
  /** Détail de l'article */
  article?: Article;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
}

/**
 * DossierResult
 * Objet représentant un dossier
 */
export interface DossierResult {
  /**
   * Titre du texte
   * @example "LOI n° 2018-1317 du 28 décembre 2018 de finances pour 2019"
   */
  libelleTexte?: string;
  /**
   * Identifiant du texte
   * @example "JORFTEXT000037882341"
   */
  idTexte?: string;
}

/**
 * Legislature
 * Objet représentant une législature
 */
export interface Legislature {
  /**
   * Date de début
   * @format date-time
   * @example "1340668800000"
   */
  dateDebut?: string;
  /**
   * Identifiant
   * @example "14"
   */
  id?: string;
  /**
   * libellé
   * @example "XIVème législature"
   */
  libelle?: string;
  /**
   * Date de fin
   * @format date-time
   * @example "1498435200000"
   */
  dateFin?: string;
}

/**
 * QuestionsEcritesParlementairesListResponse
 * Résultat d'une requête pour lister les questions écrites parlementaires.
 */
export interface QuestionsEcritesParlementairesListResponse {
  /**
   * Nombre total de résultats
   * @format int64
   * @example 20
   */
  totalResultNumber?: number;
  /** Facette listant les types de parlement (Assemblée ou Sénat) */
  typesParlement?: Facet;
  /** Liste des résultats de la page */
  results?: EsQuestionsEcritesParlementaires[];
  /**
   * Taille du fichier avec son unité
   * @example "45,24 Ko"
   */
  displaySize?: string;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
}

/**
 * LODAListResponse
 * Résultat d'une requête paginée pour lister les textes Lois, Décrets, Arrêtés
 */
export interface LODAListResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalResultNumber?: number;
  /** Liste des résultats de la page */
  results?: LODAListResult[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Facette listant les différentes natures de texte */
  natures?: Facet;
  /** Facette listant les différents états juridiques */
  legalStatus?: Facet;
}

/**
 * SearchResponseDTO
 * Page des résultats demandée lors d'une recherche paginée
 */
export interface SearchResponseDTO {
  /**
   * Nombre de résultats
   * @format int64
   * @example 1560
   */
  totalResultNumber?: number;
  /** Liste des facettes liées */
  facets?: Facet[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** @format int64 */
  totalArticleResultNumber?: number;
  /** Liste des résultats de la page */
  results?: SearchResult[];
  /** Description fusion */
  descriptionFusionHtml?: string;
  /**
   * Type de pagination. Spécifique pour les recherches dans les articles d'un texte spécifique, dans les autres cas la valeur sera toujours DEFAULT.
   * @example "DEFAULT"
   */
  typePagination?: "DEFAUT" | "ARTICLE";
}

/**
 * GetJorfContResponse
 * Réponse à une requête de N derniers JO
 */
export interface GetJorfContResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 5
   */
  totalNbResult?: number;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des N derniers conteneurs */
  containers?: Conteneur[];
}

/** DebatsParlementairesListRequest */
export interface DebatsParlementairesListRequest {
  /** @example "ID_DESC" */
  secondSortValue?: string;
  /** @example "01/01/2020 > 31/01/2020" */
  dateParution?: string;
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  /** @example "DEBAT_PARLEMENTAIRE_DESC" */
  sortValue?: string;
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /** @example "AN" */
  typesPublication?: string[];
}

/**
 * RelatedLinksArticleRequest
 * requête de récupération des liens de citation d'un article
 */
export interface RelatedLinksArticleRequest {
  /**
   * Identifiant de l'article
   * @example "LEGIARTI000032207188"
   */
  articleId: string;
}

/**
 * ConsultKaliTextResponse
 * Réponse à une requête de consultation d'un texte d'une convention collective
 */
export interface ConsultKaliTextResponse {
  /** Numéro de texte */
  textNumber?: string;
  /** Texte HTML des visas */
  visasHtml?: string;
  /**
   * Titre du texte
   * @example "Loi contenant organisation du notariat (loi 25 ventôse an XI)"
   */
  title?: string;
  /** Condition différée */
  conditionDiffere?: string;
  /** Résumé */
  resume?: string;
  /** Signataire */
  signataires?: SignataireKali;
  /** Nature */
  nature?: string;
  libelleExtension?: string;
  /** Visas */
  visas?: string;
  /** Date d'état juridique */
  jurisDate?: string;
  /**
   * Date de signature
   * @format date-time
   */
  dateTexte?: string;
  /** Liste des articles racine du texte. La liste est ordonnée */
  articles?: ConsultArticle[];
  /** Signataires */
  signers?: string;
  /** Notice */
  notice?: string;
  /** Alias */
  alias?: string;
  /** Observations */
  observations?: string;
  /**
   * Le numéro de la page de l'article dans le journal officiel
   * @example "14"
   */
  pagePdf?: string;
  /** Numéro de parution */
  numParution?: string;
  fileName?: string;
  versionLabel?: string;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** INAP */
  inap?: boolean;
  /** Origine de la publication */
  originePubli?: string;
  /** Date de fin de la version */
  dateFinVersion?: string;
  /** Liste des sections de premier niveau du texte. La liste est ordonnée */
  sections?: ConsultSection[];
  /** Liste des dossiers legislatifs */
  dossiersLegislatifs?: DossierLegislatif[];
  /** Etat juridique du texte */
  jurisState?: string;
  /**
   * Numéro NOR
   * @example "NCCX8900064L"
   */
  nor?: string;
  /**
   * Date de parution
   * @format date-time
   */
  dateParution?: string;
  /** Etat du texte */
  etat?: string;
  /**
   * Type de texte
   * @example "TEXTE_BASE"
   */
  typeTexte?: string;
  /** Date de modification */
  modifDate?: string;
  /** Identifiant du conteneur du texte lorsqu'il en existe un. */
  idConteneur?: string;
  libelleElargissement?: string;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /** Nota */
  nota?: string;
  /** Rectificatif */
  rectificatif?: string;
  /** Appellations */
  appellations?: string[];
  /**
   * Liste des mots clés
   * @example ["LIEN FAMILIAL","CENTRES SOCIAUX"]
   */
  motsCles?: string[];
  /**
   * Identifiant du texte
   * @example "LEGITEXT000006070994_01-08-2016"
   */
  id?: string;
  /** Liste des conteneurs du texte */
  conteneurs?: Conteneur[];
  /** Numéro Bulletin Officiel */
  numeroBo?: string;
  /** Date de début de la version */
  dateDebutVersion?: string;
  /**
   * identifiant européen de la ‎législation ou European Legislation Identifier
   * @example "/eli/arrete/2019/1/18/TREK1901124A/jo/texte"
   */
  eli?: string;
  /** Texte HTML des informations restructuration de branche */
  infosRestructurationBrancheHtml?: string;
  /**
   * Chronical ID du texte
   * @example "JORFTEXT000000882738"
   */
  cid?: string;
  /** Liens */
  liens?: TexteLien[];
  /** Liste des codes de nomenclature */
  codesNomenclature?: string[];
  /** Numero renvoi */
  renvoi?: string;
  fileSize?: string;
  /** Titre du texte correspondant */
  jorfText?: string;
  /** Travaux préparatoires */
  prepWork?: string;
  /** Visas */
  visa?: string;
  filePath?: string;
  /** Description fusion */
  descriptionFusionHtml?: string;
  /** Texte HTML des informations complémentaires */
  infosComplementairesHtml?: string;
  /** Indique si le texte est abrogé */
  textAbroge?: boolean;
}

/**
 * HasChronolegiResponse
 * Réponse indiquant s'il existe un chronolegi (plusieurs versions) pour le texte.
 */
export interface HasChronolegiResponse {
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * Indique si un versionning existe
   * @example true
   */
  chronolegiExists?: boolean;
}

/** EsQuestionsEcritesParlementaires */
export interface EsQuestionsEcritesParlementaires {
  url?: string;
  /** @format date-time */
  dateParution?: string;
  refInjection?: string;
  displaySize?: string;
  id?: string;
  origine?: string;
  numeroParution?: string;
  idTechInjection?: string;
  emetteur?: string;
  pdfName?: string;
  pathToFile?: string;
}

/**
 * TexteSimple
 * Objet représentant un texte simple
 */
export interface TexteSimple {
  /** Texte HTML des travaux préparatoires */
  travauxPreparatoiresHtml?: string;
  /** Visas */
  visas?: string;
  /**
   * Condition de différé
   * @example "Le présent avenant entrera en vigueur le premier jour du mois suivant la date de parution du Journal officiel de son arrêté d'extension."
   */
  conditionDiffere?: string;
  /** Informations complémentaires */
  infosComplementaires?: string;
  /** Titre de la loi déférée */
  titreLoiDef?: string;
  /** Lien vers le JO */
  lienJo?: string;
  /** Origine de la publication */
  originePubli?: string;
  /** Texte au format HTML */
  texteHtml?: string;
  /** Texte HTML des citations jurisprudentielles */
  citationJpHtml?: string;
  /** Texte HTML des informations complémentaires */
  notaSectionsAafficher?: string[];
  /** Observations d'une directive européenne */
  observations?: string;
  /** Numéro de pdf */
  pagePdf?: string;
  /**
   * Date de début
   * @format date-time
   */
  dateDebut?: string;
  /** Titre long du texte */
  titreLong?: string;
  /**
   * Date de publication si la date est valide, vide autrement (elle vaut null si la date du texte est null ou >= 2222-01-01)
   * @format date-time
   * @example "1546819200000"
   */
  datePubliComputed?: string;
  /**
   * Liste des numéros d'affaire
   * @example ["17/030701","17/030702"]
   */
  numeroAffaire?: string[];
  /**
   * Origine du texte
   * @example "JURI"
   */
  origine?: string;
  /** Rapporteur */
  rapporteur?: string;
  /**
   * Date de signature de la loi déférée
   * @format date-time
   */
  dateLoiDef?: string;
  /**
   * Date de fin
   * @format date-time
   */
  dateFin?: string;
  /** Décision attaquée */
  decisionAttaquee?: DecisionAttaquee;
  /** ECLI */
  ecli?: string;
  /** Version */
  version?: string;
  /** Avocats */
  avocats?: string;
  /** Ministere */
  ministere?: string;
  /** Type de décision */
  typeDecision?: string;
  /** Année de publication au bulletin */
  annePublicationBulletin?: string;
  /** Chemin vers la convention collective */
  urlCC?: string;
  /** Numéro NOR */
  nor?: string;
  /** Président */
  president?: string;
  /**
   * Date du texte
   * @format date-time
   * @example "1546819200000"
   */
  dateTexte?: string;
  /**
   * Numéro de la loi déférée
   * @example "2001-419"
   */
  numLoiDef?: string;
  /** Texte HTML des signataires */
  signatairesHtml?: string;
  /** Solution */
  solution?: string;
  /** Signataires */
  signataires?: string;
  /** Signataire convention collective */
  signataireKali?: SignataireKali;
  /** Informations restructuration de branche */
  infosRestructurationBranche?: string;
  /** Lien ELI */
  idEli?: string;
  /** Identifiant du JO */
  idTexteJo?: string;
  /** référence permettant le suivi d'injection du mode delta */
  refInjection?: string;
  /** Numéro de séquence */
  numsequence?: string;
  /** Contenu du texte */
  texte?: string;
  /**
   * formation
   * @example "JX"
   */
  formation?: string;
  /**
   * Identifiant du texte
   * @example "JURITEXT000037999394"
   */
  id?: string;
  /** Type de publication */
  typePublicationBulletin?: string;
  /**
   * Date de publication
   * @format date-time
   * @example "1546819200000"
   */
  datePubli?: string;
  /** Texte HTML des informations restructuration de branche */
  infosRestructurationBrancheHtml?: string;
  /**
   * Juridiction judiciaire
   * @example "Juridictions d'appel"
   */
  juridictionJudiciaire?: string;
  ancienId?: string;
  /**
   * Date du JO
   * @format date-time
   */
  dateJo?: string;
  /** Renvoi */
  renvoi?: string;
  /** Texte HTML des visas */
  visasHtml?: string;
  /** Texte HTML des notas */
  notaHtml?: string;
  /**
   * Type de texte
   * @example "TEXTE_BASE"
   */
  typeTexte?:
    | "TEXTE_ATTACHE"
    | "TEXTE_BASE"
    | "TEXTE_SALAIRE"
    | "TEXTE_EXTENSION";
  /** Texte HTML de la description de fusion */
  descriptionFusionHtml?: string;
  /** Numéro de publication au bulletin */
  numeroPublicationBulletin?: string;
  /** Numéro du texte JO */
  numTexteJo?: string;
  /** Texte HTML des résumés de directive européenne */
  resumeHtml?: string;
  /** Titre du texte */
  titre?: string;
  /** Description de fusion */
  descriptionFusion?: string;
  /**
   * Nature du texte
   * @example "ARRET"
   */
  nature?: string;
  /** Commissaire */
  commissaire?: string;
  /** Liste des éléments de titrage */
  titrages?: string[];
  /** Etat juridique */
  etat?: string;
  /** Autorité */
  autorite?: string;
  /**
   * Contient la date du texte si elle existe (!= null && != 2999-01-01) sinon contient la date de publication  pour les texte
   * @format date-time
   * @example "1546819200000"
   */
  relevantDate?: string;
  /** Liste des mots clés */
  motsCles?: string[];
  /** Citations jurisprudentielles */
  citationJp?: string;
  /** Emetteur */
  emetteur?: string;
  /** Liste des codes de nomenclature */
  codesNomenclatures?: string[];
  /** Alias ELI */
  idEliAlias?: string;
  /** Identifiant du conteneur */
  idConteneur?: string;
  /**
   * Type de contrôle
   * @example "Contrôle de constitutionnalité"
   */
  typeControleNormes?: string;
  /** Travaux préparatoires */
  travauxPreparatoires?: string;
  /**
   * Date de dernière modification
   * @format date-time
   * @example "1546819200000"
   */
  dateDerniereModif?: string;
  /** Identifiant technique permettant le suivi d'injection du mode delta */
  idTechInjection?: string;
  /**
   * Portée géographique
   * @example "NATIONAL"
   */
  appliGeo?: string;
  /** Demandeur du texte */
  demandeur?: string;
  /** INAP */
  inap?: boolean;
  /**
   * Juridiction
   * @example "Cour d'appel de Nancy"
   */
  juridiction?: string;
  /** Liste des dossiers législatifs */
  dossiersLegislatifs?: DossierLegislatif[];
  /**
   * Nature de la juridiction
   * @example "Cour d'appel"
   */
  natureJuridiction?: string;
  /**
   * provenance
   * @example "CAPP"
   */
  provenance?: string;
  /** Liste des éléments de sommaire */
  sommaire?: TexteSommaire[];
  /** Numéro de parution */
  numParution?: string;
  /**
   * Date du texte si la date est valide, vide autrement (elle vaut null si la date du texte est null ou >= 2222-01-01)
   * @format date-time
   * @example "1546819200000"
   */
  dateTexteComputed?: string;
  /**
   * Nature de la délibération
   * @example "AUTORISATION DE TRANSFERTS"
   */
  natureDelib?: string;
  /** Notas */
  nota?: string;
  /** Rectificatif d'une directive européenne */
  rectificatif?: string;
  /** Nature qualifiée */
  natureQualifiee?: string;
  /** Liste des appellations non officielles */
  appellations?: string[];
  /** Résumé d'une directive européenne */
  resume?: string;
  /** Numéro du JO */
  numJo?: string;
  /** Notice */
  notice?: string;
  /** Liste des conteneurs */
  conteneurs?: Conteneur[];
  /** Numéro du texte */
  num?: string;
  /**
   * Indique la publication au recueil Lebon
   * @example "C"
   */
  publicationRecueil?: string;
  /** Numéro BO */
  numeroBo?: string;
  natureNumero?: string;
  /** Chronical ID du texte */
  cid?: string;
  /** Liste de liens vers d'autres textes */
  liens?: TexteLien[];
  /** Texte HTML de la notice */
  noticeHtml?: string;
  /**
   * Siège d'appel
   * @example "NANCY"
   */
  siegeAppel?: string;
  /**
   * Date de versement
   * @format date-time
   */
  dateVersement?: string;
  /** Avocat général */
  avocatGl?: string;
  /** Titre du JO lié */
  titreJo?: string;
  /** Texte HTML des informations complémentaires */
  infosComplementairesHtml?: string;
  /** Liste des éléments de titrage */
  titragesKey?: Titrage[];
}

/**
 * Titrage
 * Objet représentant l'arbo d'un titrage
 */
export interface Titrage {
  /** Identifiant */
  id?: string;
}

/**
 * ArticleVersion
 * Objet représentant les métadonnées d'une version d'un article
 */
export interface ArticleVersion {
  /**
   * Date de début de la version
   * @format date-time
   */
  dateDebut?: string;
  /** Etat juridique */
  etat?: string;
  /** Identifiant de l'article */
  id?: string;
  /** Version */
  version?: string;
  /** Numéro de l'article */
  numero?: string;
  /**
   * Date de fin de la version
   * @format date-time
   */
  dateFin?: string;
  /**
   * Numéro d'ordre de l'article. Sert au tri des articles au sein de leur élément parent (section ou texte)
   * @format int32
   */
  ordre?: number;
}

/**
 * Lien
 * Objet représentant un lien dans l'arborescence d'un dossier législatif
 */
export interface Lien {
  /**
   * Libellé
   * @example "Dossier législatif du Sénat"
   */
  libelle?: string;
  /**
   * Identifiant du lien
   * @example "1415810924079"
   */
  id?: string;
  /** Texte associé */
  data?: string;
  /**
   * Lien vers le dossier législatif
   * @example "http://www.senat.fr/dossier-legislatif/pjl14-096.html"
   */
  lien?: string;
}

/**
 * ConsultDebatResponse
 * Réponse à une requête de consultation d'un débat parlementaire
 */
export interface ConsultDebatResponse {
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /** Débat parlementaire */
  debat?: Debat;
}

/**
 * DossierLegislatif
 * Objet représentant un dossier législatif
 */
export interface DossierLegislatif {
  /** Législature */
  legislature?: Legislature;
  /** chemin relatif vers le fichier xml */
  url?: string;
  /**
   * Identifiant du dossier
   * @example "JORFDOLE000028196681"
   */
  id?: string;
  /**
   * Titre du dossier legislatif
   * @example "LOI n° 2013-1279 du 29 décembre 2013 de finances rectificative pour 2013"
   */
  titre?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /** Texte html des motifs */
  exposeMotif?: string;
  /** nature */
  nature?: string;
  /**
   * Date de dernière modification
   * @format date-time
   * @example "1391990400000"
   */
  dateDerniereModification?: string;
  /**
   * type
   * @example "LOI_PUBLIEE"
   */
  type?: string;
  /** Liste des dossiers */
  dossiers?: Dossier[];
  /**
   * Date de dernière modification de l'échéancier
   * @format date-time
   * @example "1391990400000"
   */
  dateMajEcheancier?: string;
  /**
   * Ancien ID
   * @example "JORFDOLE000028196699"
   */
  ancienId?: string;
  /**
   * Origine
   * @example "JORF"
   */
  origine?: string;
  /**
   * Date de création
   * @format date-time
   * @example "1388361600000"
   */
  dateCreation?: string;
  /** Echéancier */
  echeancier?: string;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /** Arborescence */
  arborescence?: Arborescence;
}

/**
 * DossierLegislatifResult
 * Objet représentant le résultat d'un dossier législatif
 */
export interface DossierLegislatifResult {
  /**
   * Identifiant
   * @example "JORFDOLE000037460423"
   */
  id?: string;
  /**
   * Titre
   * @example "LOI n° 2019-30 du 20 janvier 2019 habilitant le Gouvernement à prendre par ordonnance les mesures de préparation au retrait du Royaume-Uni de l'Union européenne"
   */
  titre?: string;
  /**
   * Date de création
   * @example "2019-01-21"
   */
  dateCreation?: string;
  /**
   * Date de dernière modification
   * @example "2019-01-21"
   */
  dateDerniereModification?: string;
  /**
   * Type
   * @example "LOI_PUBLIEE"
   */
  type?: string;
  /** Liste des dossiers */
  dossiers?: DossierResult[];
}

/** BodmrTexts */
export interface BodmrTexts {
  /**
   * Date de publication du bodmr
   * @format date-time
   */
  dateBodmr?: string;
  pathToFile?: string;
  displaySize?: string;
  /** Nom du pdf */
  pdfName?: string;
  /** Numéro du bodmr */
  number?: string;
  /** Type du document */
  typeOfBodmr?: string;
}

/**
 * AdressePostale
 * Objet représentant une adresse postale
 */
export interface AdressePostale {
  /**
   * Ville
   * @example "PARIS"
   */
  ville?: string;
  /**
   * Code postal
   * @example "75005"
   */
  codePostal?: string;
}

/**
 * ConsultJorfResponse
 * Réponse à une requête de consultation d'un texte JORF
 */
export interface ConsultJorfResponse {
  /** Numéro de texte */
  textNumber?: string;
  /**
   * Identifiant du texte
   * @example "LEGITEXT000006070994_01-08-2016"
   */
  id?: string;
  /**
   * Titre du texte
   * @example "Loi contenant organisation du notariat (loi 25 ventôse an XI)"
   */
  title?: string;
  filePath?: string;
  /** Résumé */
  resume?: string;
  /** Nature */
  nature?: string;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /** Date d'état juridique */
  jurisDate?: string;
  /**
   * Date de signature
   * @format date-time
   */
  dateTexte?: string;
  /** Liste des articles racine du texte. La liste est ordonnée */
  articles?: ConsultArticle[];
  /** Indique si la requête a remonté un seul pdf */
  hasSinglePdf?: boolean;
  /** Notice */
  notice?: string;
  /** Alias */
  alias?: string;
  /** Liste des sections de premier niveau du texte. La liste est ordonnée */
  sections?: ConsultSection[];
  /**
   * Le numéro de la page de l'article dans le journal officiel
   * @example "14"
   */
  pagePdf?: string;
  /** Numéro de parution */
  numParution?: string;
  fileName?: string;
  /** INAP */
  inap?: boolean;
  /** Date de fin de la version */
  dateFinVersion?: string;
  /** Observations */
  observations?: string;
  /** Liste des dossiers legislatifs */
  dossiersLegislatifs?: DossierLegislatif[];
  /** Etat juridique du texte */
  jurisState?: string;
  /**
   * Numéro NOR
   * @example "NCCX8900064L"
   */
  nor?: string;
  /**
   * Date de parution
   * @format date-time
   */
  dateParution?: string;
  /** Etat du texte */
  etat?: string;
  /** Date de modification */
  modifDate?: string;
  /** Identifiant du conteneur du texte lorsqu'il en existe un. */
  idConteneur?: string;
  /** Liste des métadonnées des fichiers attachés au document */
  jorfFileMetadata?: FileMetadata[];
  /** Nota */
  nota?: string;
  /** Rectificatif */
  rectificatif?: string;
  /** Appellations */
  appellations?: string[];
  /** Mots-clés */
  motsCles?: string[];
  /** Signataires */
  signers?: string;
  /** Date de début de la version */
  dateDebutVersion?: string;
  /**
   * identifiant européen de la ‎législation ou European Legislation Identifier
   * @example "/eli/arrete/2019/1/18/TREK1901124A/jo/texte"
   */
  eli?: string;
  /** Indique si le texte a une version consolidée */
  hasLoda?: boolean;
  /**
   * Chronical ID du texte
   * @example "JORFTEXT000000882738"
   */
  cid?: string;
  /** Liens */
  liens?: TexteLien[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  fileSize?: string;
  /** Titre du texte correspondant */
  jorfText?: string;
  /** Travaux préparatoires */
  prepWork?: string;
  /** Visas */
  visa?: string;
  /** Indique si le texte est abrogé */
  textAbroge?: boolean;
}

/** BoccListRequest */
export interface BoccListRequest {
  /** @example 1880 */
  idccs?: string[];
  searchForGlobalBocc?: boolean;
  /** @example "BOCC_SORT_DESC" */
  sortValue?: string;
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  /** @example "CCO20190051" */
  idMainBocc?: string;
  /** @example "01/01/2020 > 31/01/2020" */
  intervalPublication?: string;
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /** @example "Ministère chargé du travail" */
  departments?: string[];
  titre?: string;
  searchForTextsBocc?: boolean;
}

/**
 * SignataireKali
 * Objet représentant un signataire KALI
 */
export interface SignataireKali {
  /** Fait A */
  faitA?: string;
  /** Dénonciation */
  denonciation?: string;
  /** Exécution */
  execution?: string;
  /** Syndicat */
  syndic?: string;
  /** Adhésion */
  adhesion?: string;
  /** Patronat */
  patron?: string;
  /** Signataire extérieur */
  signExt?: string;
}

/**
 * JuriConsultRequest
 * requête de consultation d'un texte de Jurisprudence judiciaire
 */
export interface JuriConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Identifiant du texte
   * @example "JURITEXT000037999394"
   */
  textId: string;
}

/**
 * LODAListResult
 * Objet représentant un résultat LODA
 */
export interface LODAListResult {
  /**
   * Date de début
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateDebut?: string;
  /**
   * Etat juridique
   * @example "VIGUEUR"
   */
  etat?: string;
  /**
   * Identifiant unique
   * @example "LEGITEXT000033280430"
   */
  id?: string;
  /**
   * Date de dernière mise à jour
   * @example "2021-04-15T16:49:47.707+0000"
   */
  lastUpdate?: string;
  /**
   * Titre
   * @example "Ordonnance n° 2016-1406 du 20 octobre 2016 portant adaptation et simplification de la législation relative à l'Etablissement français du sang et aux activités liées à la transfusion sanguine"
   */
  titre?: string;
  /** Liste des dossiers législatifs */
  dossiersLegislatifs?: DossierLegislatif[];
  /**
   * Chronical ID
   * @example "JORFTEXT000033279563"
   */
  cid?: string;
  /**
   * Date de fin
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateFin?: string;
}

/** EsGlobalBocc */
export interface EsGlobalBocc {
  /** @format date-time */
  dateParution?: string;
  fileName?: string;
  displaySize?: string;
  pathFile?: string;
  numParution?: string;
}

/** SearchAdditionalResult */
export interface SearchAdditionalResult {
  properties?: Record<string, string>;
  id?: string;
}

/**
 * ConventionsListRequest
 * Requête paginée pour lister les conventions collectives
 */
export interface ConventionsListRequest {
  textesBase?: "TEXTE_BASE"[];
  /**
   * Ordre de tri
   * @example "DATE_PUBLI_ASC"
   */
  sort?:
    | "DATE_UPDATE"
    | "DATE_PUBLI_ASC"
    | "DATE_PUBLI_DESC"
    | "SIGNATURE_DATE_ASC"
    | "SIGNATURE_DATE_DESC"
    | "ID_DESC"
    | "ID_ASC";
  /**
   * Liste des états juridique à filtrer
   * @example ["VIGUEUR","ABROGE","VIGUEUR_DIFF"]
   */
  legalStatus?: (
    | "VIGUEUR"
    | "ABROGE_DIFF"
    | "VIGUEUR_DIFF"
    | "VIGUEUR_ETEN"
    | "VIGUEUR_NON_ETEN"
    | "ABROGE"
    | "PERIME"
    | "ANNULE"
    | "MODIFIE"
    | "DISJOINT"
    | "SUBSTITUE"
    | "TRANSFERE"
    | "INITIALE"
    | "MODIFIE_MORT_NE"
    | "SANS_ETAT"
    | "DENONCE"
    | "REMPLACE"
  )[];
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  /**
   * Liste des mots clés à filtrer
   * @example ["ABATTOIRS","CHAUX HYDRAULIQUES"]
   */
  keyWords?: string[];
  /**
   * Ordre de tri
   * @example "ID_ASC"
   */
  secondSort?:
    | "DATE_UPDATE"
    | "DATE_PUBLI_ASC"
    | "DATE_PUBLI_DESC"
    | "SIGNATURE_DATE_ASC"
    | "SIGNATURE_DATE_DESC"
    | "ID_DESC"
    | "ID_ASC";
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /**
   * IDCC permettant de filtrer le résultat
   * @example "489"
   */
  idcc?: string;
  /**
   * Texte à rechercher dans les titres permettant de filtrer le résultat
   * @example "Industrie"
   */
  titre?: string;
}

/**
 * FullConteneur
 * Objet représentant un conteneur
 */
export interface FullConteneur {
  /** Structure du conteneur */
  structure?: StructureTxt;
  /** Etat juridique du conteneur */
  etat?: string;
  /**
   * Identifiant du conteneur
   * @example "JORFCONT000038052140"
   */
  id?: string;
  /**
   * Titre
   * @example "JORF n°0021 du 25 janvier 2019"
   */
  titre?: string;
  /**
   * Date de publication
   * @format date-time
   * @example "1548374400000"
   */
  datePubli?: string;
  /**
   * Origine
   * @example "JORF"
   */
  origine?: string;
  /**
   * Nature du conteneur
   * @example "JO"
   */
  nature?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /**
   * chemin vers le conteneur
   * @example "conteneur/JORF/CONT/00/00/38/05/21/JORFCONT000038052140.xml"
   */
  url?: string;
  /** Ancien Identifiant */
  ancienId?: string;
  /**
   * Identifiant ELI
   * @example "/eli/jo/2019/1/25/0021"
   */
  idEli?: string;
  numero?: string;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /**
   * Numéro de JO
   * @example "0021"
   */
  num?: string;
  /** @format date-time */
  relevantDate?: string;
}

/**
 * SuggestSupplyRequest
 * Requête de suggestion d'une recherche textuelle dans un ou plusieurs fonds
 */
export interface SuggestSupplyRequest {
  documentsDits?: boolean;
  /**
   * Texte à rechercher
   * @example "mariage"
   */
  searchText?: string;
  /**
   * Liste des fonds dans lesquels exécuter la recherche pour la suggestion
   * @example ["JORF","JURI"]
   */
  supplies?: (
    | "ALL"
    | "ALL_SUGGEST"
    | "LODA_LIST"
    | "CODE_LIST"
    | "CODE_RELEASE_DATE"
    | "CODE_RELEASE_DATE_SUGGEST"
    | "CODE_LEGAL_STATUS"
    | "LODA_RELEASE_DATE"
    | "LODA_RELEASE_DATE_SUGGEST"
    | "LODA_LEGAL_STATUS"
    | "KALI"
    | "KALI_TEXT"
    | "CONSTIT"
    | "CETAT"
    | "JUFI"
    | "JURI"
    | "JORF"
    | "JORF_SUGGEST"
    | "CNIL"
    | "ARTICLE"
    | "CIRC"
    | "ACCO"
    | "PDF"
  )[];
}

/**
 * SearchNearestVersionRequest
 * Requête de récupération de la version d'un texte (et d'une section) la plus proche d'une date demandée
 */
export interface SearchNearestVersionRequest {
  /**
   * Chronical ID de la section
   * @example "LEGISCTA000006117894"
   */
  cidSection?: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  cidText: string;
  /**
   * Date de référence pour la recherche
   * @example "2021-04-15"
   */
  date: string;
}

/**
 * Circulaire
 * Objet représentant une circulaire
 */
export interface Circulaire {
  /**
   * Numéro NOR
   * @example "MENV1829930J"
   */
  nor?: string;
  /** Liste des ministères déposants */
  ministeresDeposants?: string[];
  /**
   * Code du ministère déposant
   * @format int64
   * @example 7
   */
  utilisateurDeposantMinistereCode?: number;
  /**
   * Etat
   * @example "V"
   */
  etat?: string;
  /** @format date-time */
  relevantDate?: string;
  /** Numéro CERFA */
  numeroCerfa?: string;
  /** Résumé */
  resume?: string;
  /**
   * Taille du fichier PDF en octets
   * @format int64
   * @example 644810
   */
  tailleFichierPdf?: number;
  /**
   * Date de déclaration d'opposabilité
   * @format date-time
   * @example "1543190400000"
   */
  dateOpposabilite?: string;
  /**
   * Date d'export
   * @format date-time
   * @example "1543536000000"
   */
  dateExport?: string;
  /** @example "oui" */
  typeService?: string;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /**
   * Taille du fichier PDF avec son unité
   * @example "629,7 Ko"
   */
  sizeToDisplay?: string;
  /** Email déposant */
  emailDeposant?: string;
  /**
   * Liste des mots clés
   * @example ["Enseignement, Education  et Sciences et techniques"]
   */
  motsCles?: string[];
  /** Objet représentant un fichier joint à un texte */
  attachment?: Attachment;
  /**
   * Indique si la circulaire est opposable
   * @example "O"
   */
  opposable?: string;
  /**
   * Liste des mots clés libres
   * @example "périscolaire ; accueils collectifs de mineurs ; Plan mercredi"
   */
  motsClesLibres?: string;
  /** Nota */
  nota?: string;
  /** @example "À compter du 15 décembre 2017 : Instruction n° 225/DEF/TM/T du 29 mars 1995 (BOC, p. 1661 ; BOEM 404.3.3)." */
  remplace?: string;
  /**
   * Annexes
   * @example "4"
   */
  annexes?: string;
  /**
   * Nom du fichier PDF lié
   * @example "cir_44128.pdf"
   */
  attachmentName?: string;
  /**
   * Identifiant
   * @example "44128"
   */
  id?: string;
  /**
   * Titre de la circulaire
   * @example "Instruction relative à la mise en oeuvre du Plan mercredi"
   */
  titre?: string;
  /**
   * Numéro interne
   * @example "2018-139"
   */
  numeroInterne?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /**
   * Origine
   * @example "CIRC"
   */
  origine?: string;
  /** Chemin vers le fichier PDF */
  attachmentUrl?: string;
  /**
   * Date de signature
   * @format date-time
   * @example "1543190400000"
   */
  dateSignature?: string;
  /** Liste des textes de référence */
  textesReferences?: TexteReference[];
  /**
   * Signataire
   * @example "A LAURENT, SG-MCAS, JP VINQUANT, DGCS et A BURSTIN, Directrice de la CNSA"
   */
  signataire?: string;
  /**
   * Date de mise en application
   * @format date-time
   */
  dateMiseApplication?: string;
  /**
   * Auteur
   * @example "Le ministre de l'éducation nationale et de la jeunesse"
   */
  auteur?: string;
  /**
   * Référence de publication
   * @example "7293"
   */
  referencePublicationJoBo?: string;
  /** Liste des catégories */
  categories?: string[];
  /** @example "oui" */
  typeGouv?: string;
  /**
   * Date de dépôt
   * @format date-time
   * @example "1543449600000"
   */
  dateDepot?: string;
  /** Destinataire */
  destinataire?: string;
  /**
   * Liste des domaines
   * @example ["Jeunesse, sports, vie associative"]
   */
  domaines?: string[];
  /** Contenu du fichier en base64 */
  data?: string;
  /**
   * Nom du ministère déposant
   * @example "MEN - Education nationale"
   */
  utilisateurDeposantMinistere?: string;
  /** Texte HTML des notas */
  notaHtml?: string;
}

/**
 * ElasticData
 * Objet représentant les informations d'un index
 */
export interface ElasticData {
  /**
   * Nom de l'index
   * @example "data_next_juri"
   */
  indexName?: string;
  /**
   * Description de l'usage de l'index
   * @example ""
   */
  usage?: string;
  /**
   * Nombre de documents
   * @format int64
   * @example 992978
   */
  nbDoc?: number;
  /**
   * Date du dernier document indexé
   * @example "2021-04-15"
   */
  lastIndex?: string;
}

/**
 * BodmrListResponse
 * Résultat d'une requête pour lister les bulletins officiels des décorations, médailles et récompenses
 */
export interface BodmrListResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalResultNumber?: number;
  /** Facette listant les années disponibles */
  years?: Facet;
  /**
   * Taille du fichier avec son unité
   * @example "45,24 Ko"
   */
  displaySize?: string;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des metadata concernant les pdfs */
  pdfMetadatas?: PdfMetadata[];
  /** Liste des résultats de la page */
  results?: Bodmr[];
}

/** Debat */
export interface Debat {
  /** @format date-time */
  dateParution?: string;
  displaySize?: string;
  id?: string;
  /** @format int32 */
  numeroParution?: number;
  idTechInjection?: string;
  origine?: string;
  attachmentUrl?: string;
  /** @format int32 */
  anneeParution?: number;
  typeAssemblee?: string;
  /** @format int32 */
  legislature?: number;
  idEli?: string;
  /** @format date-time */
  dateSeance?: string;
  /** Objet représentant un fichier joint à un texte */
  attachment?: Attachment;
  session?: string;
  refInjection?: string;
  data?: string;
  pathToFile?: string;
  nomSession?: string;
}

/**
 * CodeConsultRequest
 * requête de consultation d'un texte du fonds CODE.
 */
export interface CodeConsultRequest {
  abrogated?: boolean;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006075116"
   */
  textId: string;
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Date de consultation
   * @example "2021-04-15"
   */
  date: string;
  fromSuggest?: boolean;
  /**
   * Chronical ID de la section a consulter (Non requis pour la consultation de la table des matières sinon obligatoire)
   * @example "LEGISCTA000006112861"
   */
  sctCid?: string;
}

/** BoccAndTextListRequest */
export interface BoccAndTextListRequest {
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  sortValue?: string;
  intervalPublication?: string;
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  idcc?: string;
  titre?: string;
}

/**
 * SuggestValue
 * Objet représentant une suggestion
 */
export interface SuggestValue {
  /**
   * Appellations
   * @example "Loi Macron"
   */
  appellations?: string[];
  /**
   * Identifiant du texte/section/article
   * @example "JORFTEXT000000320201"
   */
  id?: string;
  /**
   * Titre à afficher
   * @example "Ordonnance du 18 juillet 1944 FORCES BRITANNIQUES : MARIAGE SUR LE TERRITOIRE FRANCAIS"
   */
  label?: string;
  /**
   * Date de la version retournée par la suggestion
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateVersion?: string;
  /**
   * Origine
   * @example "JORF"
   */
  origin?: string;
  /**
   * Nature de l'élément lié
   * @example "ordonnance"
   */
  nature?: string;
  /**
   * idTexte
   * @example "LEGITEXT000006075116"
   */
  idTexte?: string;
  /**
   * Section
   * @example "LEGISCTA000006138259"
   */
  section?: string;
}

/**
 * ArticleRequest
 * Requête pour récupérer un article par son identifiant
 */
export interface ArticleRequest {
  /**
   * Identifiant de l'article
   * @example "LEGIARTI000006307920"
   */
  id: string;
}

/**
 * ChronoLegiTextRequest
 * requête de consultation d'un chronolegi. Le Chronolegi complet du texte est retourné cependant, seulement la période startYear<=>endYear aura le détail des versions chargé.
 */
export interface ChronoLegiTextRequest {
  /**
   * Année de fin de chargement des détails
   * @format int32
   * @example 2018
   */
  endYear: number;
  /**
   * Date de référence
   * @example "2021-04-15"
   */
  dateConsult: string;
  /**
   * Année de début de chargement des détails
   * @format int32
   * @example 2015
   */
  startYear: number;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  textCid: string;
}

/** ConsultBoccResponse */
export interface ConsultBoccResponse {
  /**
   * Date de parution
   * @example "2021-04-15"
   */
  dateParution?: string;
  fileName?: string;
  displaySize?: string;
  title?: string;
  numParution?: string;
  bocc?: EsParutionBocc;
  forGlobalBocc?: boolean;
  pathToFile?: string;
}

/**
 * ConventionsListResponse
 * Résultat d'une requête paginée pour lister les textes des conventions collectives
 */
export interface ConventionsListResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalResultNumber?: number;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Facette listant les différents états juridiques */
  legalStatus?: Facet;
  /** Liste des résultats de la page */
  results?: ConventionsListResult[];
  /** Facette listant les différents type de Texte */
  typeTexte?: Facet;
  /** Facette listant les mots clés */
  moteCles?: Facet;
}

/**
 * LegiSommaireConsultRequest
 * Requête de consultation du sommaire d'un texte du fond Legi.
 */
export interface LegiSommaireConsultRequest {
  /**
   * Date de consultation
   * @example "2021-04-15"
   */
  date: string;
  /**
   * Nature du texte recherché : CODE, DECRET, ARRETE, LOI, ORDONNANCE...
   * @example "CODE"
   */
  nature?: string;
  /**
   * id OU cid du texte
   * @example "LEGITEXT000006071366"
   */
  textId: string;
}

/**
 * JorfConsultWithIdEliAliasRequest
 * Requête de consultation d'un JORF à partir de son URL de type ELI ou Alias.
 */
export interface JorfConsultWithIdEliAliasRequest {
  /**
   * ID Eli ou Alias du JORF cible.
   * @example "/eli/decret/2018/2/13/JUSC1732516D/jo/texte"
   */
  idEliOrAlias: string;
}

/**
 * Article
 * Objet représentant le détail d'un article
 */
export interface Article {
  /** Condition différée => Spécifique conventions collectives */
  conditionDiffere?: string;
  /** Informations complémentaires */
  infosComplementaires?: string;
  /** Surtitre => Spécifique conventions collectives */
  surtitre?: string;
  /**
   * Nature
   * @example "Article"
   */
  nature?: string;
  /** Contenu HTML de l'article */
  texteHtml?: string;
  /**
   * Type
   * @example "AUTONOME"
   */
  type?: string;
  /** Liste des versions de l'article */
  articleVersions?: ArticleVersion[];
  /** Liste des activités */
  activitePro?: string[];
  /** Autres liens de l'article */
  lienAutres?: Lien[];
  /** Liste des numéros de l'article */
  computedNums?: string[];
  /**
   * Date de fin si extension
   * @format date-time
   * @example "32472144000000"
   */
  dateFinExtension?: string;
  /** Version précédente */
  versionPrecedente?: string;
  /**
   * Date de début
   * @format date-time
   * @example "1104537600000"
   */
  dateDebut?: string;
  /** Liste des numéros de brochure */
  numeroBrochure?: string[];
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /** Liste des liens de modification de l'article */
  lienModifications?: LienModification[];
  /** Identifiant du texte */
  idTexte?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /** Liste des calipsos */
  calipsos?: string[];
  /**
   * Origine
   * @example "LEGI"
   */
  origine?: string;
  /** Liste d'id de conteneurs */
  conteneurs?: Conteneur[];
  /**
   * Date de début si extension
   * @format date-time
   * @example "32472144000000"
   */
  dateDebutExtension?: string;
  /**
   * Date de fin
   * @format date-time
   * @example "1104451200000"
   */
  dateFin?: string;
  /** Alias ELI */
  idEliAlias?: string;
  /** Chronical ID du texte */
  cidTexte?: string;
  /**
   * Identifiant technique de la section parente
   * @example "LEGISCTA000006191588"
   */
  sectionParentId?: string;
  /** Liste des versions du texte contenant l'article */
  textTitles?: TextTitle[];
  multipleVersions?: boolean;
  /**
   * Etat juridique
   * @example "MODIFIE_MORT_NE"
   */
  etat?: string;
  /**
   * Version
   * @example "28.0"
   */
  versionArticle?: string;
  /** Determine si l'article possède des liens Service Public à afficher */
  comporteLiensSP?: boolean;
  /**
   * Titre de la section parente
   * @example "I : Revenu imposable"
   */
  sectionParentTitre?: string;
  /**
   * Numéro d'ordre permettant le tri des articles dans leur élément parent.
   * @format int64
   * @example 644235
   */
  ordre?: number;
  /** Informations restructuration de branche */
  infosRestructurationBranche?: string;
  /** Identifiant ELI */
  idEli?: string;
  /**
   * Chronical ID de la section parente
   * @example "LEGISCTA000006191588"
   */
  sectionParentCid?: string;
  /** Contenu nota */
  nota?: string;
  /**
   * Numéro de l'article
   * @example "156"
   */
  num?: string;
  /** Numéro du bulletin officiel */
  numeroBo?: string;
  /** Contenu textuel de l'article */
  texte?: string;
  /**
   * Identifiant de l'article
   * @example "LEGIARTI000006307920"
   */
  id?: string;
  /** Liste des liens de citation de l'article */
  lienCitations?: LienCitation[];
  /** Texte HTML des informations restructuration de branche */
  infosRestructurationBrancheHtml?: string;
  /** Historique => Spécifique conventions collectives */
  historique?: string;
  /**
   * Chronical ID
   * @example "LEGIARTI000006307893"
   */
  cid?: string;
  /** Liste des liens de concordance de l'article */
  lienConcordes?: LienConcorde[];
  /** Texte HTML des informations complémentaires */
  infosComplementairesHtml?: string;
  /** Renvoi sur contenu d'article (Exemple : (1)) */
  renvoi?: string;
  /** Concaténation de l'ensemble des titres de la chaine parente */
  fullSectionsTitre?: string;
  /** Contexte de l'article */
  context?: Context;
  /** Contenu nota au format HTML */
  notaHtml?: string;
  /** INAP */
  inap?: string;
}

/**
 * SuggestAccoResponse
 * Réponse à une requête de suggestion pour les accords d'entreprises
 */
export interface SuggestAccoResponse {
  /** @format int64 */
  totalResultNumber?: number;
  /** Liste des suggestions */
  results?: Record<string, Record<string, SuggestAccoValue>>;
  /** @format int64 */
  executionTime?: number;
}

/**
 * Conteneur
 * Objet représentant un conteneur
 */
export interface Conteneur {
  /**
   * Etat juridique
   * @example "VIGUEUR_ETEN"
   */
  etat?: string;
  /**
   * Identifiant du conteneur
   * @example "JORFCONT000038052140"
   */
  id?: string;
  /** Titre du conteneur */
  titre?: string;
  /**
   * Date de publication
   * @format date-time
   * @example "423532800000"
   */
  datePubli?: string;
  /**
   * Origine
   * @example "JORF"
   */
  origine?: string;
  /**
   * Nature du conteneur
   * @example "IDCC"
   */
  nature?: string;
  /**
   * Chronical ID
   * @example "KALICONT000005635384"
   */
  cid?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /**
   * chemin vers le conteneur
   * @example "conteneur/JORF/CONT/00/00/38/05/21/JORFCONT000038052140.xml"
   */
  url?: string;
  /** Ancien Identifiant */
  ancienId?: string;
  /**
   * Identifiant ELI
   * @example "/eli/jo/2019/1/25/0021"
   */
  idEli?: string;
  /**
   * Numéro conteneur
   * @example "1261"
   */
  numero?: string;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /**
   * Numéro
   * @example "0000000000001261"
   */
  num?: string;
  /** @format date-time */
  relevantDate?: string;
}

/**
 * DossiersLegislatifsRequest
 * Requête pour lister les dossiers législatifs d'une législature
 */
export interface DossiersLegislatifsRequest {
  /**
   * Type de dossier législatif
   * @example "LOI_PUBLIEE"
   */
  type: "LOI_PUBLIEE" | "ORDONNANCE_PUBLIEE" | "PROJET_LOI" | "PROPOSITION_LOI";
  /**
   * Identifiant de la législature
   * @format int32
   * @example 15
   */
  legislatureId: number;
}

/**
 * TableRequest
 * Requête de récupération des tables annuelles
 */
export interface TableRequest {
  /**
   * Année de fin
   * @format int32
   * @example 2017
   */
  endYear: number;
  /**
   * Année de début
   * @format int32
   * @example 2012
   */
  startYear?: number;
}

/**
 * YearsWithNoTableResponse
 * Résultat d'une requête pour lister les années sans table annuelle
 */
export interface YearsWithNoTableResponse {
  /**
   * Liste des années
   * @example [2015,2016]
   */
  lstYearDisabled?: number[];
}

/**
 * DocumentAdministratif
 * Objet représentant un document administratif
 */
export interface DocumentAdministratif {
  /**
   * Numéro NOR
   * @example "CCCJ1718194V"
   */
  nor?: string;
  /**
   * Date du document
   * @format date-time
   * @example "1498780800000"
   */
  dateDocument?: string;
  /**
   * Taille du fichier avec son unité
   * @example "918,4 Ko"
   */
  displaySize?: string;
  /**
   * Identifiant unique
   * @example "DOCATEXT000037511083"
   */
  id?: string;
  /**
   * Titre
   * @example "Publication simplifiée des comptes de campagne"
   */
  titre?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /** Chemin vers le fichier attaché */
  attachmentUrl?: string;
  /** Nature */
  nature?: string;
  /**
   * Numéro
   * @example "0003"
   */
  numero?: string;
  /** Chemin vers le fichier xml */
  url?: string;
  /** Ancien ID */
  ancienId?: string;
  /**
   * Nom du fichier
   * @example "dae_20170630_0003_0001.pdf.sig"
   */
  attachmentName?: string;
  /**
   * Sous-titre
   * @example "Élections partielles de l’année 2016"
   */
  sousTitre?: string;
  /**
   * Origine
   * @example "DOCA"
   */
  origine?: string;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /**
   * Date du JO
   * @format date-time
   * @example "1498780800000"
   */
  dateJO?: string;
}

/**
 * ConsultCirculaireResponse
 * Réponse à une requête de consultation d'une circulaire
 */
export interface ConsultCirculaireResponse {
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Circulaire */
  circulaire?: Circulaire;
}

/** PdfMetadata */
export interface PdfMetadata {
  pathToFile?: string;
  fileName?: string;
  displaySize?: string;
  id?: string;
  complementNumber?: string;
  /** @format date-time */
  datePubli?: string;
  origine?: string;
  /** @format int64 */
  size?: number;
  type?: string;
  num?: string;
}

/**
 * ConventionsListResult
 * Objet représentant un résultat de texte de convention collective
 */
export interface ConventionsListResult {
  /**
   * Etat juridique du texte
   * @example "ABROGE"
   */
  etat?: string;
  /**
   * Identifiant unique
   * @example "KALITEXT000005651341"
   */
  id?: string;
  /**
   * Titre
   * @example "Convention collective nationale pour le personnel d'encadrement de l'industrie de la fabrication de la chaux du 27 avril 1981, mise à jour au 1er mars 1982.  Etendue par arrêté du 5 novembre 1982 JONC 21 décembre 1982."
   */
  titre?: string;
  pdfFileSize?: string;
  pdfFilePath?: string;
  /** Description de fusion */
  descriptionFusion?: string;
  /**
   * Chronical ID du conteneur
   * @example "KALICONT000005635668"
   */
  cidConteneur?: string;
  /**
   * Chronical ID
   * @example "KALITEXT000005651341"
   */
  cid?: string;
  /** Texte HTML de la description de fusion */
  descriptionFusionHtml?: string;
  /**
   * IDCC
   * @example "1119"
   */
  idcc?: string;
  pdfFileName?: string;
}

/**
 * ConcordanceLinksRequest
 * requête de récupération des liens de concordance d'un article
 */
export interface ConcordanceLinksRequest {
  /**
   * Identifiant de l'article
   * @example "LEGIARTI000006419320"
   */
  articleId: string;
}

/**
 * KaliTextConsultSectionRequest
 * Requête de consultation d'un texte d'une convention collective
 */
export interface KaliTextConsultSectionRequest {
  /**
   * Identifiant du texte ou d'un de ses éléments enfants (section/article)
   * @example "KALISCTA000005716465"
   */
  id: string;
}

/**
 * SearchRequestDTO
 * Requête paginée de recherche
 */
export interface SearchRequestDTO {
  /** Objet définissant la recherche */
  recherche: RechercheSpecifiqueDTO;
  /**
   * Fonds sur lequel appliquer la recherche. Pour rechercher dans tous les fonds, il faut définir la valeur ALL. Pour les fonds LODA et CODE il existe deux types de recherche : la recherche par date (_DATE) de version ou la recherche par état juridique (_ETAT)
   * @example "LODA_DATE"
   */
  fond:
    | "JORF"
    | "CNIL"
    | "CETAT"
    | "JURI"
    | "JUFI"
    | "CONSTIT"
    | "KALI"
    | "CODE_DATE"
    | "CODE_ETAT"
    | "LODA_DATE"
    | "LODA_ETAT"
    | "ALL"
    | "CIRC"
    | "ACCO";
}

/** EsParutionBocc */
export interface EsParutionBocc {
  texts?: EsTextBocc[];
  refInjection?: string;
  globalBocc?: EsGlobalBocc;
  id?: string;
  idTechInjection?: string;
}

/** QuestionsEcritesParlementairesListRequest */
export interface QuestionsEcritesParlementairesListRequest {
  /** @example "ID_DESC" */
  secondSortValue?: string;
  /** @example "01/01/2020 > 31/01/2020" */
  periodePublication?: string;
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  /** @example "QUESTION_ECRITE_PARLEMENTAIRE_DESC" */
  sortValue?: string;
  /** @example "AN" */
  parlementTypes?: string[];
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
}

/**
 * GetJorfContResponseItem
 * Élément de réponse à une recheche de JO
 */
export interface GetJorfContResponseItem {
  /** Métadonnées du JOINAP s'il en existe un */
  joInap?: FileMetadata;
  /** Conteneur du JO */
  joCont?: FullConteneur;
  /** Métadonnées du JOEA s'il en existe un */
  joEA?: FileMetadata;
  /** Liste des métadonnées des JO patrimoniaux */
  josPat?: FileMetadata[];
}

/**
 * SectionCidRequest
 * Requête pour récupérer une section par son Chronical CID
 */
export interface SectionCidRequest {
  /**
   * Chronical CID de la section
   * @example "LEGISCTA000006163288"
   */
  cid: string;
}

/**
 * Context
 * Objet représentant le contexte d'un élément
 */
export interface Context {
  /**
   * Nombre de versions existantes pour le parent
   * @format int32
   * @example 1
   */
  nombreVersionParent?: number;
  /**
   * Longueur du chemin
   * @format int32
   * @example 53
   */
  longeurChemin?: number;
  /** Liste des versions de titres pour le texte parent */
  titreTxt?: DetailContext[];
  /** Liste des sections parentes de l'élément */
  titresTM?: DetailContext[];
}

/** LienConcorde */
export interface LienConcorde {
  /**
   * Nature du texte lié
   * @example "LOI"
   */
  natureText?: string;
  /**
   * Type de lien
   * @example "MODIFIE"
   */
  linkType?: string;
  /**
   * Numéro de l'article lié
   * @example "53"
   */
  articleNum?: string;
  /**
   * Sens de la modification
   * @example "cible"
   */
  linkOrientation?: string;
  /**
   * Titre du texte lié
   * @example "LOI n°2015-990 du 6 août 2015 - art. 53 (V)"
   */
  textTitle?: string;
  /**
   * Identifiant de l'article lié
   * @example "LEGIARTI000032930490"
   */
  articleId?: string;
  /**
   * Chronical ID du texte lié
   * @example "JORFTEXT000030978561"
   */
  textCid?: string;
}

/**
 * TexteLien
 * Objet représentant un lien vers un texte
 */
export interface TexteLien {
  /** Titre */
  title?: string;
  /** Date de publication */
  datePubliTexte?: string;
  /** Identifiant */
  id?: string;
  /** Type de lien */
  typeLien?: string;
  /** Chronical ID du texte */
  cidTexte?: string;
  /** Nature du texte */
  natureTexte?: string;
  /** Sens du type de lien */
  sens?: string;
  /** Numéro du texte */
  numTexte?: string;
  /** Date de signature */
  dateSignaTexte?: string;
  /** Numéro */
  num?: string;
  /** NOR */
  norTexte?: string;
}

/**
 * ConsultTextResponse
 * Réponse à une requête de consultation d'un texte
 */
export interface ConsultTextResponse {
  /** Mots-clés */
  motsCles?: string[];
  /**
   * Date de parution
   * @format date-time
   */
  dateParution?: string;
  /**
   * Titre du texte
   * @example "Loi contenant organisation du notariat (loi 25 ventôse an XI)"
   */
  title?: string;
  /** Etat du texte */
  etat?: string;
  /**
   * identifiant européen de la ‎législation ou European Legislation Identifier
   * @example "/eli/arrete/2019/1/18/TREK1901124A/jo/texte"
   */
  eli?: string;
  /** Date de modification */
  modifDate?: string;
  /** Numéro de parution */
  numParution?: string;
  /** Résumé */
  resume?: string;
  /** Nature */
  nature?: string;
  /** Liste des dossiers legislatifs */
  dossiersLegislatifs?: DossierLegislatif[];
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /** Date d'état juridique */
  jurisDate?: string;
  /** Travaux préparatoires */
  prepWork?: string;
  /** Appellations */
  appellations?: string[];
  /** Liste des articles racine du texte. La liste est ordonnée */
  articles?: ConsultArticle[];
  /** Signataires */
  signers?: string;
  /**
   * Numéro NOR
   * @example "NCCX8900064L"
   */
  nor?: string;
  /**
   * Identifiant du texte
   * @example "LEGITEXT000006070994_01-08-2016"
   */
  id?: string;
  /** Nota */
  nota?: string;
  /** Notice */
  notice?: string;
  /** Observations */
  observations?: string;
  /**
   * Le numéro de la page de l'article dans le journal officiel
   * @example "14"
   */
  pagePdf?: string;
  /** Numéro de texte */
  textNumber?: string;
  /** Identifiant du conteneur du texte lorsqu'il en existe un. */
  idConteneur?: string;
  fileName?: string;
  /** Date de début de la version */
  dateDebutVersion?: string;
  /** Alias */
  alias?: string;
  /** Rectificatif */
  rectificatif?: string;
  /** INAP */
  inap?: boolean;
  /**
   * Chronical ID du texte
   * @example "JORFTEXT000000882738"
   */
  cid?: string;
  /** Liste des sections de premier niveau du texte. La liste est ordonnée */
  sections?: ConsultSection[];
  /** Liens */
  liens?: TexteLien[];
  /** Date de fin de la version */
  dateFinVersion?: string;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  fileSize?: string;
  /** Visas */
  visa?: string;
  /** Titre du texte correspondant */
  jorfText?: string;
  /** Etat juridique du texte */
  jurisState?: string;
  /**
   * Date de signature
   * @format date-time
   */
  dateTexte?: string;
  filePath?: string;
  /** Indique si le texte est abrogé */
  textAbroge?: boolean;
}

/**
 * ConsultJuriTextResponse
 * réponse de consultation d'un texte de Jurisprudence judiciaire
 */
export interface ConsultJuriTextResponse {
  /** Texte */
  text?: TexteSimple;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
}

/**
 * DocsAdminsListResponse
 * Résultat d'une requête pour lister les documents administratifs
 */
export interface DocsAdminsListResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalResultNumber?: number;
  /** Liste des résultats de la page */
  results?: DocumentAdministratif[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Facette listant les années disponibles */
  years?: Facet;
}

/**
 * Niveau
 * Objet représentant un niveau dans l'arborescence d'un dossier législatif
 */
export interface Niveau {
  /**
   * Libellé
   * @example "Sénat"
   */
  libelle?: string;
  /**
   * Identifiant du niveau
   * @example "1415810580974"
   */
  id?: string;
  /** Liste des liens du niveau */
  liens?: Lien[];
  /** liste des niveaux enfants */
  niveaux?: Niveau[];
}

/**
 * RegroupementDTO
 * Objet définissant le regroupement de plusieurs versions
 */
export interface RegroupementDTO {
  /** Map listant les versions dans l'ordre antéchronologique.  La clé correspond à la date de la version */
  versions?: Record<string, VersionDTO>;
  /**
   * Titre du regroupement
   * @example "2015"
   */
  title?: string;
  detailLoaded?: boolean;
}

/**
 * ElasticDataResponse
 * Résultat d'une requête pour récupérer les informations sur les index ElasticSearch
 */
export interface ElasticDataResponse {
  /** Liste des informations par index */
  lstData?: ElasticData[];
}

/**
 * SearchResult
 * Objet représentant un résultat de recherche
 */
export interface SearchResult {
  nor?: string;
  etat?: string;
  themes?: string[];
  nature?: string;
  dossiersLegislatifs?: DossierLegislatif[];
  type?: string;
  /**
   * Date de publication
   * @example "2021-04-15T16:49:47.707+0000"
   */
  datePublication?: string;
  idAttachment?: string;
  appellations?: string[];
  reference?: string;
  motsCles?: string[];
  moreArticle?: boolean;
  additionalResult?: Record<string, SearchAdditionalResult>;
  num?: string;
  sections?: SearchSection[];
  autreResume?: string[];
  numParution?: string;
  resumePrincipal?: string[];
  raisonSociale?: string;
  /**
   * Date de signature
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateSignature?: string;
  titles?: SearchTitle[];
  conforme?: boolean;
  text?: string;
  origin?: string;
  jorfText?: string;
  /**
   * Date diffusion
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateDiffusion?: string;
  sizeAttachment?: string;
  descriptionFusionHtml?: string;
  idcc?: string;
  /**
   * Date utile
   * @example "2021-04-15T16:49:47.707+0000"
   */
  date?: string;
}

/**
 * DecisionAttaquee
 * Objet représentant une décision attaquée
 */
export interface DecisionAttaquee {
  /**
   * Date de la décision
   * @format date-time
   * @example "32472144000000"
   */
  date?: string;
  /** formation */
  formation?: string;
}

/**
 * CodeListResponse
 * Résultat d'une requête paginée pour lister les codes
 */
export interface CodeListResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalResultNumber?: number;
  /** Facette listant les différents états juridiques */
  states?: Facet;
  /** Liste des résultats de la page */
  results?: CodeListResult[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Facette listant les titres des codes disponibles */
  codeNames?: Facet;
}

/**
 * Accord
 * Objet représentant un accord d'entreprise
 */
export interface Accord {
  /**
   * Date d'effet de l'accord
   * @format date-time
   * @example "1539820800000"
   */
  dateEffet?: string;
  /** Liste des thèmes */
  themes?: Theme[];
  /**
   * Indique si l'accord consulté est conforme à la version intégrale
   * @example true
   */
  conformeVersionIntegrale?: boolean;
  /**
   * Date de mise à jour
   * @format date-time
   * @example "1542672000000"
   */
  dateMaj?: string;
  /**
   * Nature
   * @example "ACCORD"
   */
  nature?: string;
  /**
   * Liste des signataires
   * @example ["01"]
   */
  signataires?: string[];
  /**
   * Date de diffusion
   * @format date-time
   * @example "1543968000000"
   */
  dateDiffusion?: string;
  /**
   * Date du texte
   * @format date-time
   * @example "1539820800000"
   */
  dateTexte?: string;
  /** @format date-time */
  relevantDate?: string;
  /** Détail du fichier attaché */
  attachment?: Attachment;
  /**
   * Titre du texte
   * @example "Un Protocole d'Accord relatif à l'Organisation de la Négociation Annuelle Obligatoire"
   */
  titreTexte?: string;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /** Chemin vers le fichier xml */
  url?: string;
  /**
   * Secteur d'activité
   * @example "Construction de véhicules automobiles"
   */
  secteur?: string;
  /**
   * Identifiant
   * @example "ACCOTEXT000037731479"
   */
  id?: string;
  /** IDCC */
  codeIdcc?: string;
  /**
   * Raison sociale
   * @example "SAS G.P - GROUPE PILOTE"
   */
  raisonSociale?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /**
   * Origine
   * @example "ACCO"
   */
  origine?: string;
  /**
   * Numéro de l'accord
   * @example "T04418002188"
   */
  numero?: string;
  /**
   * Date de fin
   * @format date-time
   * @example "1543276800000"
   */
  dateFin?: string;
  /** Liste des syndicats */
  syndicats?: Syndicat[];
  /** Chemin vers le fichier attaché */
  attachementUrl?: string;
  /**
   * Code APE
   * @example "2910Z"
   */
  codeApe?: string;
  /** Liste des addresses postales */
  adressesPostales?: AdressePostale[];
  /**
   * Taille du fichier attaché avec son unité
   * @example "17,5 Ko"
   */
  fileSize?: string;
  /**
   * Date de dépôt
   * @format date-time
   * @example "1542326400000"
   */
  dateDepot?: string;
  /**
   * Code du signataire
   * @example "05"
   */
  codeUniteSignataire?: string;
  /** Contenu du fichier attaché en base64 */
  data?: string;
  /**
   * SIRET
   * @example "87280278000025"
   */
  siret?: string;
}

/** BodmrListRequest */
export interface BodmrListRequest {
  /**
   * Ordre de tri
   * @example "PUBLICATION_DATE_ASC"
   */
  sort?: string;
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  /**
   * Liste des années à filtrer
   * @example [2016,2017]
   */
  years?: string[];
}

/** Section */
export interface Section {
  /** @format date-time */
  dateDebut?: string;
  id?: string;
  titre?: string;
  liensSection?: StructureLienSection[];
  liensArticle?: StructureLienArticle[];
  commentaire?: string;
  cid?: string;
  /** @format date-time */
  dateFin?: string;
  idTechInjection?: string;
  nota?: string;
  liensModification?: Lien[];
  /** Objet représentant le contexte d'un élément */
  context?: Context;
  notaHtml?: string;
  refInjection?: string;
}

/**
 * RechercheSpecifiqueDTO
 * Objet permettant de créer une recherche
 */
export interface RechercheSpecifiqueDTO {
  /**
   * Liste des filtres à appliquer. La requête est effectuée automatiquement avec un opérateur ET entre les filtres listés.
   * @example [{"valeurs":["LOI","ORDONNANCE","ARRETE"],"facette":"NATURE"},{"dates":{"start":"2015-01-01","end":"2018-01-31"},"facette":"DATE_SIGNATURE"}]
   */
  filtres?: FiltreDTO[];
  /**
   * Tri des éléments trouvés (Les tris possibles dépendent du fonds recherché)
   * @example "SIGNATURE_DATE_DESC"
   */
  sort: string;
  /**
   * Déterminer s'il s'agit d'une recherche avancée
   * @example false
   */
  fromAdvancedRecherche?: boolean;
  /**
   * Tri des éléments trouvés (Les tris possibles dépendent du fonds recherché)
   * @example "ID"
   */
  secondSort?: string;
  /**
   * Liste des champs dans lesquels appliquer la recherche
   * @example [{"criteres":[{"proximite":2,"valeur":"dispositions","criteres":[{"valeur":"soins","operateur":"ET","typeRecherche":"UN_DES_MOTS"},{"proximite":"3","valeur":"fonction publique","operateur":"ET","typeRecherche":"TOUS_LES_MOTS_DANS_UN_CHAMP"}],"operateur":"ET","typeRecherche":"UN_DES_MOTS"}],"operateur":"ET","typeChamp":"TITLE"}]
   */
  champs: ChampDTO[];
  /**
   * Nombre d'éléments par page (max=100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /**
   * Opérateur entre les champs de recherche
   * @example "ET"
   */
  operateur: "ET" | "OU";
  /**
   * Type de pagination. Spécifique pour les recherches dans les articles d'un texte, dans les autres cas la valeur sera toujours DEFAULT. Lors de la navigation dans plusieurs pages, il est nécessaire de passer la valeur reçue dans la réponse précédente.
   * @example "DEFAUT"
   */
  typePagination: "DEFAUT" | "ARTICLE";
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
}

/**
 * ChampDTO
 * Objet décrivant une recherche dans un champ spécifique
 */
export interface ChampDTO {
  /** Liste des critères/groupes de critères de recherche pour ce champ */
  criteres?: CritereDTO[];
  /**
   * Opérateur entre les critères de recherche
   * @example "ET"
   */
  operateur?: "ET" | "OU";
  /**
   * Type de champ. Il est possible d'utiliser la valeur ALL pour rechercher dans tous les champs.
   * @example "TITLE"
   */
  typeChamp?:
    | "ALL"
    | "TITLE"
    | "TABLE"
    | "NOR"
    | "NUM"
    | "ADVANCED_TEXTE_ID"
    | "NUM_DELIB"
    | "NUM_DEC"
    | "NUM_ARTICLE"
    | "ARTICLE"
    | "MINISTERE"
    | "VISA"
    | "NOTICE"
    | "VISA_NOTICE"
    | "TRAVAUX_PREP"
    | "SIGNATURE"
    | "NOTA"
    | "NUM_AFFAIRE"
    | "ABSTRATS"
    | "RESUMES"
    | "TEXTE"
    | "ECLI"
    | "NUM_LOI_DEF"
    | "TYPE_DECISION"
    | "NUMERO_INTERNE"
    | "REF_PUBLI"
    | "RESUME_CIRC"
    | "TEXTE_REF"
    | "TITRE_LOI_DEF"
    | "RAISON_SOCIALE"
    | "MOTS_CLES"
    | "IDCC";
}

/**
 * CibleChronoDTO
 * Objet définissant la cible d'une modification
 */
export interface CibleChronoDTO {
  /**
   * Date de début de l'élément
   * @format date-time
   * @example "1538352000000"
   */
  dateDebut?: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  cidText?: string;
  /**
   * Identifiant unique du parent de l'élément
   * @example "LEGISCTA000032008380"
   */
  idParent?: string;
  /**
   * Identifiant unique de l'élément
   * @example "LEGIARTI000036829833"
   */
  id?: string;
  /**
   * Chronical ID du parent de l'élément
   * @example "LEGISCTA000032008380"
   */
  cidParent?: string;
  /**
   * Chemin représentant l'arborescence de l'élément dans le texte
   * @example "LEGITEXT000006070721/LEGISCTA000006090271/LEGISCTA000006118032/LEGISCTA000032006712/LEGISCTA000006136341/LEGISCTA000006150237/LEGISCTA000032008378/LEGISCTA000032008380/LEGIARTI000006436355"
   */
  path?: string;
  /**
   * Nature/type du texte
   * @example "CODE"
   */
  nature?: "LODA" | "JORF" | "CODE" | "KALI" | "JORFCONT";
  /**
   * Chronical ID de l'élément
   * @example "LEGIARTI000036829833"
   */
  cid?: string;
  /**
   * Date de fin de l'élément
   * @format date-time
   * @example "1538352000000"
   */
  dateFin?: string;
  /**
   * Sens du Lien
   * @example "cible"
   */
  sens?: string;
  /**
   * Nom/titre/numéro de l'élément
   * @example "1145"
   */
  name?: string;
}

/**
 * GetTableResponse
 * réponse de récupération des tables annuelles
 */
export interface GetTableResponse {
  /** @format int64 */
  totalNbResult?: number;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des tables trouvées */
  tables?: FileMetadata[];
}

/**
 * ConsultSection
 * Objet représentant une section lors d'une consultation
 */
export interface ConsultSection {
  /** Date de début de la version de la section */
  dateDebut?: string;
  /**
   * Titre de la section
   * @example "Titre II : Régime du notariat"
   */
  title?: string;
  /**
   * Etat juridique
   * @example "VIGUEUR"
   */
  etat?: string;
  /**
   * Identifiant
   * @example "LEGISCTA000006092887"
   */
  id?: string;
  /** @example "Le présent chapitre ne comporte pas de dispositions réglementaires" */
  commentaire?: string;
  /** Date de fin de la version de la section */
  dateFin?: string;
  /**
   * Chronical ID
   * @example "LEGISCTA000006092887"
   */
  cid?: string;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /**
   * Numéro indiquant l'ordre d'affichage
   * @format int64
   * @example 3
   */
  intOrdre?: number;
  /**
   * Indique si la section est celle demandée en consultation
   * @example true
   */
  sectionConsultee?: boolean;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** @example "Le présent chapitre contient un renvoi" */
  renvoi?: string;
  /** Liste des articles enfants de la section. La liste est ordonnée */
  articles?: ConsultArticle[];
  /** Date de dernière modification */
  dateModif?: string;
  /** @example "Le présent chapitre contient un renvoi numerote" */
  renvoiNum?: string;
  /** @example "Nota html de la section" */
  notaHtml?: string;
  /** @example "Nota html de section pouvant être affichés" */
  notaSectionsAafficher?: string[];
  /** Liste des sections enfants de la section (peut être un texte dans le cas des conventions collectives). La liste est ordonnée */
  sections?: ConsultSection[];
}

/**
 * SearchNearestVersionResponse
 * Résultat d'une requête de récupération de la version la plus proche d'un texte en fonction d'une date
 */
export interface SearchNearestVersionResponse {
  /** Données sur la version d'un texte */
  title?: SearchTitle;
  /**
   * Titre de la version de la section trouvée si une section est recherchée
   * @example "Titre Ier : De la distinction des biens"
   */
  sectionTitle?: string;
}

/**
 * RelatedLinksArticleResponse
 * Réponse d'une requête de récupération des liens de citation d'un article
 */
export interface RelatedLinksArticleResponse {
  /** Liste des liens vers les éléments qui citent notre article */
  liensCitePar?: LiensRelatifsDTO[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des liens vers les éléments que notre article cite */
  liensCite?: LiensRelatifsDTO[];
}

/**
 * DocsAdminsListRequest
 * Requête pour lister les documents administratifs
 */
export interface DocsAdminsListRequest {
  /**
   * Liste des années à filtrer
   * @example [2016,2017]
   */
  years?: string[];
}

/**
 * Theme
 * Objet représentant un thème
 */
export interface Theme {
  /**
   * Libellé
   * @example "Calendrier des négociations"
   */
  libelle?: string;
  /**
   * Code
   * @example "123"
   */
  code?: string;
  /**
   * Groupe
   * @example "10"
   */
  groupe?: string;
}

/**
 * CodeConsultWithAncienId
 * requête de consultation d'un texte du fonds CODE avec ancien ID
 */
export interface CodeConsultWithAncienId {
  /**
   * Ancien Id afin de consulter un code
   * @example "CASSURAL"
   */
  ancienId?: string;
}

/**
 * BoccTextsListResponse
 * Résultat d'une requête pour lister les textes unitaires des bulletins officiels des conventions collectives
 */
export interface BoccTextsListResponse {
  /** Facette listant les IDCCs relatifs aux textes BOCC */
  idccs?: Facet;
  /**
   * Nombre total de résultats
   * @format int64
   */
  totalResultNumber?: number;
  /** Liste des texts unitaires de la page */
  texts?: EsTextBocc[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Facette listant les émetteurs des BOCC (AGR ou TRA) */
  departments?: Facet;
}

/**
 * FiltreDTO
 * Objet décrivant un filtre de recherche
 */
export interface FiltreDTO {
  /** Période de dates dans le cas d'un filtre par période */
  dates?: DatePeriod;
  /**
   * Liste des valeurs du filtre dans le cas d'un filtre textuel ou d'un filtre via option textuelle
   * @example ["TRIBUNAL_ADMINISTATIF","COURS_APPEL"]
   */
  valeurs?: string[];
  /**
   * Date unique dans le cas d'un filtre par date
   * @format date-time
   * @example "2016-01-01"
   */
  singleDate?: string;
  /**
   * Nom de la facette => nom du filtre
   * @example "JURIDICTION_NATURE"
   */
  facette?: string;
  /**
   * Map des sous-valeur d'une valeur de filtre dans le cas d'un filtre par option texte. La clé doit être la valeur correspondante au parent dans la liste 'valeurs'
   * @example {"TRIBUNAL_ADMINISTATIF":["Bordeaux","Lille"]}
   */
  multiValeurs?: Record<string, string[]>;
}

/** SearchSection */
export interface SearchSection {
  title?: string;
  /**
   * Date de version
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateVersion?: string;
  id?: string;
  legalStatus?:
    | "VIGUEUR"
    | "ABROGE_DIFF"
    | "VIGUEUR_DIFF"
    | "VIGUEUR_ETEN"
    | "VIGUEUR_NON_ETEN"
    | "ABROGE"
    | "PERIME"
    | "ANNULE"
    | "MODIFIE"
    | "DISJOINT"
    | "SUBSTITUE"
    | "TRANSFERE"
    | "INITIALE"
    | "MODIFIE_MORT_NE"
    | "SANS_ETAT"
    | "DENONCE"
    | "REMPLACE";
  extracts?: SearchExtract[];
}

/**
 * ConsultArticle
 * Objet représentant un article lors d'une consultation
 */
export interface ConsultArticle {
  /**
   * Titre de l'élément modificateur de l'article
   * @example "LOI n°2015-990 du 6 août 2015 - art. 53 (V)"
   */
  modificatorTitle?: string;
  /** Condition differée */
  conditionDiffere?: string;
  /** Informations complémentaires */
  infosComplementaires?: string;
  multipleVersions?: boolean;
  /**
   * Indique si l'article contient des liens du service-publique. Utiliser l'API servicePublicLinksArticle pour récupérer la liste des liens.
   * @example true
   */
  comporteLiensSP?: boolean;
  /**
   * Etat juridique
   * @example "VIGUEUR"
   */
  etat?: string;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /**
   * Numéro indiquant l'ordre d'affichage
   * @format int64
   * @example 3
   */
  intOrdre?: number;
  /** Nota */
  nota?: string;
  versionLabel?: string;
  /** Informations restructuration de branche */
  infosRestructurationBranche?: string;
  /**
   * Chemin de l'article
   * @example "/LEGISCTA000006107964/LEGIARTI000006791830"
   */
  path?: string;
  /** Surtitre */
  surtitre?: string;
  /** Liste de nota section à afficher */
  notaSectionsAafficher?: string[];
  /**
   * Numéro de l'article
   * @example "52"
   */
  num?: string;
  /**
   * Type
   * @example "AUTONOME"
   */
  type?: string;
  /** Contenu HTML de l'article */
  content?: string;
  /**
   * Date de début de l'article
   * @format date-time
   */
  dateDebut?: string;
  /** Liste des liens de citation. Toujours vide (voir propriété comporteLiens) */
  lstLienCitation?: LienCitation[];
  /**
   * Date de modification par l'élément modificateur
   * @example "2016-07-25"
   */
  modificatorDate?: string;
  /**
   * Identifiant
   * @example "LEGISCTA000006092887"
   */
  id?: string;
  /**
   * Version de l'article
   * @example "2.0"
   */
  articleVersion?: string;
  /** Texte HTML des informations restructuration de branche */
  infosRestructurationBrancheHtml?: string;
  /** Historique */
  historique?: string;
  /**
   * Indique si l'article contient des liens de citation. Utiliser l'API relatedLinksArticle pour récupérer la liste des liens.
   * @example true
   */
  comporteLiens?: boolean;
  /**
   * Date de fin de l'article
   * @format date-time
   */
  dateFin?: string;
  /**
   * Chronical ID de l'élément modificateur de l'article
   * @example "JORFTEXT000030978561"
   */
  modificatorCid?: string;
  /**
   * Chronical ID
   * @example "LEGISCTA000006092887"
   */
  cid?: string;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  renvoi?: string;
  /**
   * Titre des sections du chemin de l'article
   * @example ["Partie législative","Livre Ier : Le contrat"]
   */
  pathTitle?: string[];
  /** Liste des liens de modification */
  lstLienModification?: LienModification[];
  /** Texte HTML des informations complémentaires */
  infosComplementairesHtml?: string;
}

/**
 * CirculaireConsultRequest
 * Requête de consultation d'une circulaire
 */
export interface CirculaireConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Identifiant de la circulaire
   * @example "44128"
   */
  id: string;
}

/**
 * ArticleCidRequest
 * Requête pour récupérer un article par son Chronical ID
 */
export interface ArticleCidRequest {
  /**
   * Chronical ID de l'article
   * @example "LEGIARTI000006307920"
   */
  cid: string;
}

/**
 * LODAListRequest
 * Requête paginée pour lister les textes Lois, Décrets, Arrêtés
 */
export interface LODAListRequest {
  /**
   * Ordre de tri
   * @example "PUBLICATION_DATE_ASC"
   */
  sort?:
    | "PUBLICATION_DATE_ASC"
    | "PUBLICATION_DATE_DESC"
    | "SIGNATURE_DATE_DESC"
    | "SIGNATURE_DATE_ASC"
    | "ID_ASC"
    | "ID_DESC";
  /**
   * Liste des états juridiques à filtrer
   * @example ["VIGUEUR","ABROGE","VIGUEUR_DIFF"]
   */
  legalStatus?: (
    | "VIGUEUR"
    | "ABROGE_DIFF"
    | "VIGUEUR_DIFF"
    | "VIGUEUR_ETEN"
    | "VIGUEUR_NON_ETEN"
    | "ABROGE"
    | "PERIME"
    | "ANNULE"
    | "MODIFIE"
    | "DISJOINT"
    | "SUBSTITUE"
    | "TRANSFERE"
    | "INITIALE"
    | "MODIFIE_MORT_NE"
    | "SANS_ETAT"
    | "DENONCE"
    | "REMPLACE"
  )[];
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  /**
   * Liste des natures à filtrer
   * @example ["LOI","ORDONNANCE","DECRET"]
   */
  natures?: (
    | "LOI"
    | "ORDONNANCE"
    | "DECRET"
    | "DECRET_LOI"
    | "ARRETE"
    | "CONSTITUTION"
    | "DECISION"
    | "CONVENTION"
    | "DECLARATION"
    | "ACCORD_FONCTION_PUBLIQUE"
  )[];
  /**
   * Ordre de tri
   * @example "PUBLICATION_DATE_ASC"
   */
  secondSort?:
    | "PUBLICATION_DATE_ASC"
    | "PUBLICATION_DATE_DESC"
    | "SIGNATURE_DATE_DESC"
    | "SIGNATURE_DATE_ASC"
    | "ID_ASC"
    | "ID_DESC";
  /** Date ou période de signature */
  signatureDate?: DatePeriod;
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /** Date ou période de publication */
  publicationDate?: DatePeriod;
}

/**
 * ChronolegiResponse
 * Réponse de consultation d'un chronolegi
 */
export interface ChronolegiResponse {
  /**
   * Date de publication
   * @example "2021-04-15T16:49:47.707+0000"
   */
  datePublication?: string;
  /** Liste des regroupements d'années */
  regroupements?: RegroupementDTO[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
}

/** BoccConsultRequest */
export interface BoccConsultRequest {
  forGlobalBocc?: boolean;
  /** @example "boc_20200028_0001_p000.pdf" */
  id?: string;
}

/**
 * ActionChronoDTO
 * Objet définissant une action effectuée par un article sur un texte
 */
export interface ActionChronoDTO {
  /**
   * Action effectuée
   * @example "MODIFICATION"
   */
  action?:
    | "CREATION"
    | "CODIFICATION"
    | "MODIFICATION"
    | "TRANSFERT"
    | "ABROGATION"
    | "ANNULATION"
    | "PEREMPTION"
    | "DISJONCTION"
    | "RECTIFICATION"
    | "SUBSTITUTION"
    | "DEPLACE"
    | "VERSEMENT"
    | "DENONCIATION"
    | "REMPLACEMENT"
    | "EXTENSION"
    | "ELARGISSEMENT";
  /** Map listant les noeuds parents sur lesquels les actions sont faites (texte, section..). La clé correspond à l'ID du parent. */
  parents?: Record<string, ParentChronoDTO>;
}

/** StreamingResponseBody */
export type StreamingResponseBody = object;

/**
 * ArticleModificateurDTO
 * Objet définissant un article ayant modifié un texte
 */
export interface ArticleModificateurDTO {
  /** Map listant les actions effectuées par cet article sur le texte. La clé correspond au type d'action. */
  actions?: Record<string, ActionChronoDTO>;
  /**
   * Nature/type de l'article
   * @example "CODE"
   */
  nature?: "LODA" | "JORF" | "CODE" | "KALI" | "JORFCONT";
  /**
   * ID de l'article
   * @example "LEGIARTI000036828112"
   */
  id?: string;
  /**
   * Titre de l'article modificateur (titre du texte + numéro article)
   * @example "LOI n°2018-287 du 20 avril 2018 - art. 6"
   */
  title?: string;
  /**
   * Date de début de l'article
   * @format date-time
   * @example "1538352000000"
   */
  dateDebutCible?: string;
}

/**
 * KaliTextConsultRequest
 * Requête de consultation d'un texte d'une convention collective
 */
export interface KaliTextConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Identifiant du texte ou d'un de ses éléments enfants (section/article)
   * @example "KALITEXT000005677408"
   */
  id: string;
}

/**
 * ArticleIdEliOrAliasRequest
 * Requête pour récupérer un article par son Eli ou son alias.
 */
export interface ArticleIdEliOrAliasRequest {
  /**
   * ID Eli ou alias de l'article
   * @example "/eli/decret/2021/7/13/PRMD2117108D/jo/article_1"
   */
  idEliOrAlias: string;
}

/**
 * FileMetadata
 * Objet représentant les métadonnées d'un fichier
 */
export interface FileMetadata {
  /**
   * Chemin relatif vers le fichier
   * @example "/JOEA/2016/1230/joe_20161230_0303_c000.pdf.sig"
   */
  pathToFile?: string;
  /**
   * Nom du fichier
   * @example "joe_20161230_0303_c000.pdf.sig"
   */
  fileName?: string;
  /**
   * Taille du fichier avec son unité
   * @example "586 Ko"
   */
  displaySize?: string;
  /**
   * Identifiant du fichier dans la base de données
   * @example "joe_20161230_0303_c000.pdf.sig"
   */
  id?: string;
  /** Numéro complémentaire pour le fonds JORF */
  complementNumber?: string;
  /**
   * Date de publication
   * @format date-time
   * @example "1483056000000"
   */
  datePubli?: string;
  /**
   * Origine du fichier
   * @example "JOE_INAP"
   */
  origine?: string;
  /**
   * Taille du fichier en octets
   * @format int64
   * @example 600055
   */
  size?: number;
  /**
   * Type de fichier
   * @example "joe"
   */
  type?: string;
  /**
   * Numéro du JO pour le fonds JORF
   * @example "0303"
   */
  num?: string;
}

/**
 * ModificationDTO
 * Objet représentant une modification
 */
export interface ModificationDTO {
  /** Elément ayant apporté la modification */
  modificateur?: ModificateurDTO;
  /**
   * Type de modification
   * @example "TRANSFERT"
   */
  type?:
    | "CREATION"
    | "CODIFICATION"
    | "MODIFICATION"
    | "TRANSFERT"
    | "ABROGATION"
    | "ANNULATION"
    | "PEREMPTION"
    | "DISJONCTION"
    | "RECTIFICATION"
    | "SUBSTITUTION"
    | "DEPLACE"
    | "VERSEMENT"
    | "DENONCIATION"
    | "REMPLACEMENT"
    | "EXTENSION"
    | "ELARGISSEMENT";
}

/**
 * GetListArticleResponse
 * réponse de consultation d'un article par son Chronical ID
 */
export interface GetListArticleResponse {
  /** Liste des versions de l'article */
  listArticle?: Article[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
}

/**
 * SearchCanonicalArticleVersionResponse
 * Résultat d'une requête de récupération des versions d'un article
 */
export interface SearchCanonicalArticleVersionResponse {
  /** Liste des versions d'articles */
  articleVersions?: ArticleVersion[];
}

/**
 * Attachment
 * Objet représentant un fichier joint à un texte
 */
export interface Attachment {
  /** Titre */
  title?: string;
  /** Nom */
  name?: string;
  /**
   * Langue
   * @example "fr"
   */
  language?: string;
  /** Auteur */
  author?: string;
  /** Mots clés */
  keywords?: string;
  /**
   * Date
   * @format date-time
   * @example "1540986060000"
   */
  date?: string;
  /** Contenu du fichier textuel */
  content?: string;
  /**
   * Taille du contenu
   * @format int64
   * @example 5503
   */
  content_length?: number;
  /**
   * Type de fichier
   * @example "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
   */
  content_type?: string;
}

/**
 * SameNumArticleRequest
 * Requête de récupération des articles, ayant un Chronical ID différent et portant le même numéro dans toutes les versions du texte
 */
export interface SameNumArticleRequest {
  /**
   * Date de référence
   * @example "2021-04-15"
   */
  date: string;
  /**
   * Chronical ID de l'article
   * @example "LEGIARTI000006419319"
   */
  articleCid: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  textCid: string;
  /**
   * Numéro de l'article
   * @example "16"
   */
  articleNum: string;
}

/**
 * ServicePublicLinksArticleRequest
 * requête de récupération des liens service public associés à un article
 */
export interface ServicePublicLinksArticleRequest {
  /**
   * Identifiant chanonical de l'article
   * @example "LEGIARTI000006580563"
   */
  articleCid?: string;
  /**
   * Fond de consultation
   * @example "JORF"
   */
  fond?: string;
}

/**
 * LiensRelatifsDTO
 * Objet représentant un lien vers un autre élément
 */
export interface LiensRelatifsDTO {
  /**
   * Chronical ID du texte de l'élément lié
   * @example "JORFTEXT000000869867"
   */
  cidText?: string;
  /**
   * Identifiant de l'élément lié
   * @example "LEGIARTI000033012294"
   */
  id?: string;
  /** Chronical ID du parent de l'élément lié. (Renseigné si besoin pour créer le lien vers l'élément) */
  cidParent?: string;
  /**
   * Date pour création du lien
   * @format date-time
   * @example "1470787200000"
   */
  dateVigeur?: string;
  /**
   * Nature de texte de l'élément lié
   * @example "CODE"
   */
  nature?: "LODA" | "JORF" | "CODE" | "KALI" | "JORFCONT";
  /**
   * Nom de l'élément lié
   * @example "Code du travail - art. L5143-1 (V)"
   */
  name?: string;
}

/**
 * KaliContConsultRequest
 * Requête de consultation d'une convention collective
 */
export interface KaliContConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Identifiant de la convention collective ou son numéro IDCC
   * @example "KALICONT000005635384"
   */
  id: string;
}

/**
 * SuggestAccoValue
 * Objet représentant une suggestion constituée d'un SIRET + raison sociale d'une entreprise pour les accords d'entreprises
 */
export interface SuggestAccoValue {
  /** SIRET */
  siret?: string;
  /** Raison sociale */
  raisonSociale?: string;
}

/**
 * ArticleDTO
 * Objet représentant un lien vers un article
 */
export interface ArticleDTO {
  /**
   * Date de début de la version de l'article
   * @format date-time
   * @example "961632000000"
   */
  dateDebut?: string;
  /**
   * Identifiant du texte de l'article
   * @example "LEGITEXT000006072665"
   */
  idText?: string;
  /**
   * Nom de l'article (concaténation titre texte + num article)
   * @example "Code de la santé publique - art. L2211-1 (V)"
   */
  name?: string;
  /**
   * Identifiant de l'article
   * @example "LEGIARTI000006687518"
   */
  id?: string;
  /** Liste des modifications sur le texte (Utilisée pour les anciens textes) */
  modifications?: ModificationDTO[];
  /**
   * Nature du texte de l'article
   * @example "CODE"
   */
  nature?: "LODA" | "JORF" | "CODE" | "KALI" | "JORFCONT";
  /** Chronical ID de l'article (Non utilisé) */
  cid?: string;
  /**
   * Date de fin de la version de l'article
   * @format date-time
   * @example "32472144000000"
   */
  dateFin?: string;
}

/**
 * SuggestPdcRequest
 * Requête de suggestion d'une recherche textuelle dans un fond
 */
export interface SuggestPdcRequest {
  /**
   * Texte à rechercher
   * @example "mariage"
   */
  searchText?: string;
  origin?: string;
  fond?: string;
}

/**
 * LegislaturesListResponse
 * Résultat d'une requête pour lister les législatures
 */
export interface LegislaturesListResponse {
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des législatures */
  legislatures?: Legislature[];
}

/**
 * ArticleConsultWithIdAndNum
 * requête de consultation d'un article du fonds data_article avec son ID et son numéro
 */
export interface ArticleConsultWithIdAndNum {
  /**
   * ID du LEGITEXT cible
   * @example "LEGITEXT000006075116"
   */
  id?: string;
  /**
   * Numéro de l'article cible
   * @example "5-8"
   */
  num?: string;
}

/**
 * DebatParlementaireConsultRequest
 * Requête de consultation d'un débat parlementaire
 */
export interface DebatParlementaireConsultRequest {
  /**
   * Identifiant du débat parlementaire
   * @example "AN_2020-090.pdf"
   */
  id: string;
}

/**
 * ConsultCnilTextResponse
 * réponse de consultation d'un texte CNIL
 */
export interface ConsultCnilTextResponse {
  /** Texte */
  text?: TexteSimple;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
}

/**
 * GetListPlanClassementJuriResponse
 * réponse de consultation des plans de classement Juri
 */
export interface GetListPlanClassementJuriResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalNbResult?: number;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  listPlanClassementJuri?: Nomenclature[];
}

/** StructureLienSection */
export interface StructureLienSection {
  /** @format date-time */
  dateDebut?: string;
  renvoiNum?: string;
  etat?: string;
  id?: string;
  titre?: string;
  commentaire?: string;
  renvoi?: string;
  cid?: string;
  /** @format date-time */
  dateFin?: string;
  url?: string;
  /** @format int64 */
  ordre?: number;
}

/**
 * ConsultDossierLegislatifResponse
 * Réponse à une requête de consultation d'un dossier législatif
 */
export interface ConsultDossierLegislatifResponse {
  /** Dossier législatif */
  dossierLegislatif?: DossierLegislatif;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
}

/**
 * JorfConsultRequest
 * requête de consultation d'un texte JORF
 */
export interface JorfConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Chronical ID de l'élément
   * @example "JORFTEXT000033736934"
   */
  textCid: string;
}

/** GlobalBoccListRequest */
export interface GlobalBoccListRequest {
  /** @example "CCO20190051" */
  idGlobalBocc?: string;
  /** @example "BOCC_SORT_ASC" */
  sortValue?: string;
  searchForSingleGlobalBocc?: boolean;
  /** @example "01/01/2020 > 31/01/2020" */
  intervalPublication?: string;
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
}

/**
 * Facet
 * Objet représentant une facette
 */
export interface Facet {
  /**
   * Nom du champ représentant la facette
   * @example "natureJuridiction"
   */
  field?: string;
  /**
   * Liste au format map des éléments enfants d'un élément particulier d'une facette ainsi que le nombre de résultats associés. La clé permet de déterminer le parent de cette liste dans les libellés values.
   * @example {"TRIBUNAL_ADMINISTATIF":{"values":{"Bordeaux":2,"Lille":8}}}
   */
  childs?: Record<string, Facet>;
  /**
   * 1560
   * @format int64
   * @example 1560
   */
  totalElement?: number;
  /**
   * Liste au format map des libellés d'une facette ainsi que le nombre de résultats associés
   * @example {"COURS_COMPTES":3295,"TRIBUNAL_ADMINISTATIF":10,"COURS_APPEL":35}
   */
  values?: Record<string, number>;
  /**
   * Nom de la facette
   * @example "JURIDICTION_NATURE"
   */
  facetElem?: string;
}

/**
 * ConsultAccoResponse
 * Réponse à une requête de consultation d'un accord d'entreprise
 */
export interface ConsultAccoResponse {
  /** Accord d'entreprise */
  acco?: Accord;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * Identifie si le contenu est référençable par les robots d'indexation
   * @example true
   */
  dereferenced?: boolean;
}

/** BoccGlobalListResponse */
export interface BoccGlobalListResponse {
  /** @format int64 */
  totalResultNumber?: number;
  results?: EsParutionBocc[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** @format int64 */
  totalResultBocc?: number;
  /** @format int64 */
  totalResultIdcc?: number;
}

/**
 * SearchCanonicalVersionResponse
 * Résultat d'une requête de récupération de la version canonique d'un texte en fonction d'une date
 */
export interface SearchCanonicalVersionResponse {
  /** Date de début */
  dateDebut?: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  cid?: string;
  /** Date de fin */
  dateFin?: string;
}

/** EsTextBocc */
export interface EsTextBocc {
  idccs?: string[];
  /** @format date-time */
  texteDate?: string;
  fileName?: string;
  displaySize?: string;
  enteteTitle?: string;
  idMainBocc?: string;
  pathFile?: string;
  /** @format int32 */
  numAnn?: number;
  department?: string;
  title?: string;
}

/**
 * ChronoLegiArticleRequest
 * requête de consultation de la liste des versions de l'article de manière chronologique.
 */
export interface ChronoLegiArticleRequest {
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  textCid: string;
  /**
   * Chronical ID de l'article
   * @example "LEGIARTI000006070721"
   */
  elementCid: string;
}

/**
 * DatesWithNoJoResponse
 * Résultat d'une requête pour récupérer les dates pour lesquelles il n'y a pas eu de publication du Journal officiel
 */
export interface DatesWithNoJoResponse {
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * Liste des dates
   * @example [-3187209600000,-3187123200000,-3187036800000]
   */
  lstDateDisabled?: string[];
}

/**
 * StructureTxt
 * Objet représentant la structure d'un conteneur
 */
export interface StructureTxt {
  /** Liste des liens vers les textes de premier niveau dans le conteneur */
  liens?: LienTxt[];
  /** Liste des sections de premier niveau dans le conteneur */
  tms?: Tms[];
}

/**
 * Nomenclature
 * Objet représentant le détail d'un jurinome
 */
export interface Nomenclature {
  /** arborescent */
  arbo?: string;
  /** id du parent du jurinome */
  parent?: string;
  /** titre du juritext */
  titreJuritext?: string;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /** id du jurinome */
  id?: string;
  /**
   * nuveau du jurinome
   * @format int32
   */
  niveau?: number;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
  /** le libelle de l'arborescence */
  libelleArbo?: string;
  /** feuille */
  feuille?: boolean;
  /** le libelle du jurinome */
  libelleNiveau?: string;
  /** id du juritext */
  idJuritext?: string;
}

/**
 * DetailContext
 * Objet représentant le détail d'un élément du contexte
 */
export interface DetailContext {
  /**
   * Chemin pour arriver à l'élément dans le XML
   * @example "/ARTICLE/CONTEXTE/TEXTE/TM/TM/TM/TM/TM/TM/TITRE_TM"
   */
  xPath?: string;
  /**
   * Date de début
   * @example "1979-07-01"
   */
  debut?: string;
  /**
   * Identifiant technique
   * @example "LEGISCTA000006179574"
   */
  id?: string;
  /**
   * Titre
   * @example "2e Sous-section : Revenu global"
   */
  titre?: string;
  /**
   * Etat juridique
   * @example "VIGUEUR"
   */
  etat?: string;
  /**
   * Chronical ID
   * @example "LEGISCTA000006179574"
   */
  cid?: string;
  /**
   * Date de fin
   * @example "2999-01-01"
   */
  fin?: string;
}

/**
 * SearchCanonicalVersionRequest
 * Requête de récupération de la version d'un texte (et d'une section) la plus proche d'une date demandée
 */
export interface SearchCanonicalVersionRequest {
  /**
   * Chronical ID de la section
   * @example "LEGISCTA000006117894"
   */
  cidSection?: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  cidText: string;
  /**
   * Date de référence pour la recherche
   * @example "2021-04-15"
   */
  date: string;
}

/** Bodmr */
export interface Bodmr {
  texts?: BodmrTexts;
  /** Référence technique permettant d'identifier la date d'injection */
  refInjection?: string;
  /** Identifiant unique */
  id?: string;
  /** Identifiant technique de l'élément injecté */
  idTechInjection?: string;
}

/**
 * JuriPlanClassementRequest
 * requête de consultation d'un jurinome du fonds JURI
 */
export interface JuriPlanClassementRequest {
  /**
   * recherche par niveau
   * @example false
   */
  searchByNiveau?: boolean;
  /**
   * id du JURINOME
   * @example "JURINOME000007644451"
   */
  id?: string;
  /**
   * id du JURINOME
   * @example "procedure civile"
   */
  libelle?: string;
  /**
   * niveau ou nous nous trouvons
   * @format int32
   * @example 0
   */
  niveau?: number;
  /**
   * la requete ELK
   * @format int32
   * @example 1
   */
  page?: number;
  /**
   * recherche par suggestion
   * @example false
   */
  searchSuggest?: boolean;
  /**
   * le fond a rechercher
   * @example "juri"
   */
  fond?: string;
}

/**
 * GetListSectionResponse
 * réponse de consultation d'une liste de sections par son Chronical CID
 */
export interface GetListSectionResponse {
  /** Liste des sections */
  listSection?: Section[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
}

/**
 * Syndicat
 * Objet représentant un syndicat
 */
export interface Syndicat {
  /**
   * Libellé
   * @example "CFDT"
   */
  libelle?: string;
  /**
   * Code
   * @example "3"
   */
  code?: string;
}

/**
 * DebatsParlementairesListResponse
 * Résultat d'une requête pour lister les débats parlementaires.
 */
export interface DebatsParlementairesListResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalResultNumber?: number;
  /**
   * Taille du fichier avec son unité
   * @example "918,4 Ko"
   */
  displaySize?: string;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Facette listant les types de publication */
  typesPublication?: Facet;
  /** Liste des résultats de la page */
  results?: Debat[];
  /** Facette listant les types de publications des débats parlementaires */
  typePublicationFacet?: Facet;
}

/**
 * Dossier
 * Objet représentant un dossier pour les dossiers legislatifs
 */
export interface Dossier {
  /**
   * Libellé
   * @example "Projet de loi"
   */
  libelleTexte?: string;
  /** Identifiant */
  idTexte?: string;
  /** Contenu html du dossier */
  contenuDossier?: string;
}

/**
 * ParentChronoDTO
 * Objet définissant le nœud parent, dans le chronolegi ou chronokali, sur lequel est appliquée une modification
 */
export interface ParentChronoDTO {
  /**
   * Date de début de la version du noeud impactée
   * @format date-time
   * @example "1475280000000"
   */
  dateDebut?: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  cidText?: string;
  /**
   * Chronical ID de l'élément
   * @example "LEGISCTA000032008380"
   */
  cid?: string;
  /**
   * Identifiant unique de l'élément
   * @example "LEGISCTA000032008380"
   */
  id?: string;
  /**
   * Nature/type du texte
   * @example "CODE"
   */
  nature?: "LODA" | "JORF" | "CODE" | "KALI" | "JORFCONT";
  /** Map listant les articles ciblés par les modifications. La clé correspond à l'ID de l'article cible. */
  articlesCibles?: Record<string, CibleChronoDTO>;
  /** Identifiant du texte, si la modification s'applique directement au niveau du texte (modification du titre) */
  texteCible?: CibleChronoDTO;
  /** Map listant les sections ciblées par les modifications. La clé correspond à l'ID de la section cible. */
  sectionsCibles?: Record<string, CibleChronoDTO>;
  /**
   * Nom/titre du parent
   * @example "Paragraphe 1 : La capacité"
   */
  name?: string;
}

/**
 * SuggestResponse
 * Résultat de recherche de suggestions. Retourne des titres de texte/section/article
 */
export interface SuggestResponse {
  /** @format int64 */
  totalResultNumber?: number;
  /** Liste des suggestions retournées. La clé représente l'id du texte/section/article */
  results?: Record<string, Record<string, SuggestValue>>;
  /** @format int64 */
  executionTime?: number;
}

/**
 * DatePeriod
 * Objet représentant une période de recherche
 */
export interface DatePeriod {
  /**
   * Date de début
   * @format date-time
   * @example "2016-01-01"
   */
  start?: string;
  /**
   * Date de fin
   * @format date-time
   * @example "2016-12-31"
   */
  end?: string;
}

/**
 * TexteSommaire
 * Objet représentant un sommaire
 */
export interface TexteSommaire {
  /** Autre résumé */
  autreResume?: string;
  /** Identifiant */
  id?: string;
  /** Abstracts */
  abstrats?: string;
  /** Résumé principal */
  resumePrincipal?: string;
}

/**
 * ConsultDateRequest
 * Objet date permettant la recherche
 */
export interface ConsultDateRequest {
  /**
   * Année
   * @format int32
   * @example 2019
   */
  year?: number;
  /**
   * Mois
   * @format int32
   * @example 1
   */
  month?: number;
  /**
   * Jour
   * @format int32
   * @example 1
   */
  dayOfMonth?: number;
}

/**
 * LienTxt
 * Objet représentant un lien vers un texte
 */
export interface LienTxt {
  /** Autorité lié au texte */
  autorite?: string;
  /** Etat juridique du texte */
  etat?: string;
  /** Identifiant du texte */
  id?: string;
  /** Titre */
  titre?: string;
  /**
   * Dernière date de modification du texte
   * @format date-time
   */
  dateModif?: string;
  /** Ministère lié au texte */
  ministere?: string;
  /** Émetteur */
  emetteur?: string;
  /** Nature */
  nature?: string;
  /**
   * Numéro de séquence
   * @format int64
   */
  numSequence?: number;
  /**
   * Numéro d'ordre
   * @format int64
   */
  ordre?: number;
}

/**
 * JorfContConsultRequest
 * requête de consultation d'un conteneur JORF
 */
export interface JorfContConsultRequest {
  /**
   * Nombre d'éléments par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /** Date de fin de recherche du conteneur */
  end?: ConsultDateRequest;
  /**
   * Texte à rechercher
   * @example "mariage"
   */
  searchText?: string;
  /**
   * identifiant du conteneur JORF recherché
   * @example "JORFCONT000022470431"
   */
  id?: string;
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber?: number;
  /** Date de début de recherche du conteneur */
  start?: ConsultDateRequest;
  /**
   * Date de référence
   * @format date-time
   * @example "1538352000000"
   */
  date?: string;
  /**
   * numéro de JORF recherché
   * @example "0022"
   */
  num?: string;
  /**
   * Activer/Désactiver le highlight, dans la réponse, du texte recherché
   * @example true
   */
  highlightActivated?: boolean;
}

/**
 * LienCitation
 * Objet représentant un lien de citation
 */
export interface LienCitation {
  /** @format date-time */
  dateDebut?: string;
  parentCid?: string;
  /**
   * Nature du texte lié
   * @example "LOI"
   */
  natureText?: string;
  /**
   * Type de lien
   * @example "MODIFIE"
   */
  linkType?: string;
  /** @format date-time */
  datePubli?: string;
  /**
   * Numéro de l'article lié
   * @example "53"
   */
  articleNum?: string;
  /**
   * Chronical ID du texte lié
   * @example "JORFTEXT000030978561"
   */
  textCid?: string;
  /**
   * Sens de la modification
   * @example "cible"
   */
  linkOrientation?: string;
  /**
   * Titre du texte lié
   * @example "LOI n°2015-990 du 6 août 2015 - art. 53 (V)"
   */
  textTitle?: string;
  /**
   * Identifiant de l'article lié
   * @example "LEGIARTI000032930490"
   */
  articleId?: string;
  numTexte?: string;
}

/**
 * ConsultKaliContResponse
 * Réponse à une requête de consultation d'une convention collective
 */
export interface ConsultKaliContResponse {
  /** Liste des activités professionelles */
  activitePro?: string[];
  /**
   * Identifiant
   * @example "KALICONT000005635384"
   */
  id?: string;
  /**
   * Titre
   * @example "Convention collective nationale des acteurs du lien social et familial : centres sociaux et socioculturels, associations d'accueil de jeunes enfants, associations de développement social local  du 4 juin 1983.  Etendue par arrêté du 22 janvier 1987 JORF 12 février 1987. (1)"
   */
  titre?: string;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /**
   * numéro du texte
   * @example "IDCC 1261"
   */
  numeroTexte?: string;
  /**
   * Liste des identifiants des textes de base
   * @example ["KALITEXT000005677408"]
   */
  texteBaseId?: string[];
  /** Liste des catégories */
  categorisation?: string[];
  /**
   * Nature
   * @example "IDCC"
   */
  nature?: string;
  /** Texte HTML de la description de fusion */
  descriptionFusionHtml?: string;
  /**
   * Numéro
   * @example "1261"
   */
  num?: string;
  /** Liste des conventions collectives */
  sections?: ConsultSection[];
}

/**
 * DossierLegislatifRequest
 * Requête de consultation d'un dossier législatif
 */
export interface DossierLegislatifRequest {
  /**
   * Identifiant du dossier législatif
   * @example "JORFDOLE000038049286"
   */
  id: string;
}

/**
 * CodeListResult
 * Objet représentant un résultat de code
 */
export interface CodeListResult {
  /**
   * Date de début
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateDebut?: string;
  /**
   * Titre du code
   * @example "Code civil"
   */
  titre?: string;
  /**
   * Etat juridique
   * @example "VIGUEUR"
   */
  etat?: string;
  /**
   * Identifiant unique
   * @example "LEGITEXT000006070721"
   */
  id?: string;
  /**
   * Dernière date de mise à jour
   * @example "2021-04-15T16:49:47.707+0000"
   */
  lastUpdate?: string;
  pdfFileSize?: string;
  pdfFilePath?: string;
  /**
   * Chronical ID
   * @example "LEGITEXT000006070721"
   */
  cid?: string;
  /**
   * Date de fin
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateFin?: string;
  pdfFileName?: string;
}

/**
 * CritereDTO
 * Objet décrivant un critère ou un groupe de critères
 */
export interface CritereDTO {
  /**
   * Proximité maximum entre les mots du champ valeur. La proximité représente la distance maximale, en mots, entre deux termes recherchés.
   * @format int32
   * @example 2
   */
  proximite?: number;
  /**
   * Mot(s)/expression recherchés
   * @example "dispositions"
   */
  valeur: string;
  /**
   * Sous-critère/Sous-groupe de critères
   * @example [{"valeur":"soins","operateur":"ET","typeRecherche":"UN_DES_MOTS"},{"proximite":"3","valeur":"fonction publique","operateur":"ET","typeRecherche":"TOUS_LES_MOTS_DANS_UN_CHAMP"}]
   */
  criteres?: CritereDTO[];
  /**
   * Opérateur entre les sous-critères
   * @example "ET"
   */
  operateur: "ET" | "OU";
  /**
   * Type de recherche effectuée
   * @example "UN_DES_MOTS"
   */
  typeRecherche:
    | "UN_DES_MOTS"
    | "EXACTE"
    | "TOUS_LES_MOTS_DANS_UN_CHAMP"
    | "AUCUN_DES_MOTS"
    | "AUCUNE_CORRESPONDANCE_A_CETTE_EXPRESSION";
}

/**
 * CnilConsultWithAncienId
 * requête de consultation d'un texte du fonds CNIL avec ancien ID
 */
export interface CnilConsultWithAncienId {
  /**
   * Ancien Id afin de consulter un texte du fond CNIL
   * @example "MCN97020008A"
   */
  ancienId?: string;
}

/** SearchExtract */
export interface SearchExtract {
  /**
   * Date de début
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateDebut?: string;
  title?: string;
  /**
   * Date de la version (date de début ou date de fin)
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateVersion?: string;
  id?: string;
  values?: string[];
  searchFieldName?: string;
  legalStatus?:
    | "VIGUEUR"
    | "ABROGE_DIFF"
    | "VIGUEUR_DIFF"
    | "VIGUEUR_ETEN"
    | "VIGUEUR_NON_ETEN"
    | "ABROGE"
    | "PERIME"
    | "ANNULE"
    | "MODIFIE"
    | "DISJOINT"
    | "SUBSTITUE"
    | "TRANSFERE"
    | "INITIALE"
    | "MODIFIE_MORT_NE"
    | "SANS_ETAT"
    | "DENONCE"
    | "REMPLACE";
  type?: string;
  /**
   * Date de fin
   * @example "2021-04-15T16:49:47.707+0000"
   */
  dateFin?: string;
  num?: string;
}

/**
 * KaliContConsultIdccRequest
 * Requête de consultation d'une convention collective
 */
export interface KaliContConsultIdccRequest {
  /**
   * Identifiant de la convention collective ou son numéro IDCC
   * @example "1261"
   */
  id: string;
}

/**
 * LienModification
 * Objet représentant un lien de modification
 */
export interface LienModification {
  /**
   * Type de lien
   * @example "MODIFIE"
   */
  linkType?: string;
  /**
   * Chronical ID du texte lié
   * @example "JORFTEXT000030978561"
   */
  textCid?: string;
  /**
   * Nature du texte lié
   * @example "LOI"
   */
  natureText?: string;
  /**
   * Date de publication du texte lié
   * @example "2015-08-07"
   */
  datePubliTexte?: string;
  /**
   * Numéro de l'article lié
   * @example "53"
   */
  articleNum?: string;
  /**
   * Titre du texte lié
   * @example "LOI n°2015-990 du 6 août 2015 - art. 53 (V)"
   */
  textTitle?: string;
  /**
   * Sens de la modification
   * @example "cible"
   */
  linkOrientation?: string;
  /**
   * Date de signature du texte lié
   * @example "2015-08-06"
   */
  dateSignaTexte?: string;
  /**
   * Identifiant de l'article lié
   * @example "LEGIARTI000032930490"
   */
  articleId?: string;
  /**
   * Date de début de la cible
   * @example "2016-07-24"
   */
  dateDebutCible?: string;
}

/**
 * SearchTitle
 * Objet décrivant la version d'un texte
 */
export interface SearchTitle {
  /**
   * Titre
   * @example "Code civil"
   */
  title?: string;
  /** Etat juridique de la version */
  legalStatus?: string;
  /** Identifiant du texte */
  id?: string;
  /**
   * Date de début de la version
   * @example "2021-04-15T16:49:47.707+0000"
   */
  startDate?: string;
  /**
   * Date de fin de la version
   * @example "2021-04-15T16:49:47.707+0000"
   */
  endDate?: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006070721"
   */
  cid?: string;
  /** Nature du texte */
  nature?: string;
}

/**
 * TexteReference
 * Objet représentant un texte de référence
 */
export interface TexteReference {
  /** Lien vers le texte */
  url?: string;
  /** Texte de référence */
  texteReference?: string;
}

/**
 * LawDecreeConsultRequest
 * Requête de consultation d'un texte du fonds Legi.
 */
export interface LawDecreeConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Date de consultation
   * @example "2021-04-15"
   */
  date: string;
  fromSuggest?: boolean;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006075116"
   */
  textId: string;
}

/**
 * SectionsRevisionArticleResponse
 * Réponse à une requête de récupération des liens de concordance d'un article ou des articles avec le même numéro
 */
export interface SectionsRevisionArticleResponse {
  /** Liste des nouveaux textes liés à l'article */
  newTexts?: ArticleDTO[];
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des anciens textes liés à l'article */
  oldTexts?: ArticleDTO[];
}

/**
 * Arborescence
 * Objet représentant une arborescence de dossier legislatif
 */
export interface Arborescence {
  /** Liste des liens de premier niveau */
  liens?: Lien[];
  /** Liste des niveaux enfants */
  niveaux?: Niveau[];
}

/**
 * VersionDTO
 * Objet définissant une version d'un texte
 */
export interface VersionDTO {
  /**
   * Date de début de la version
   * @format date-time
   * @example "1538352000000"
   */
  dateDebut?: string;
  /** Détermine s'il s'agit de la dernière version. */
  isEndVersion?: boolean;
  /** Map listant les articles ayant apportés des modifications pour cette version. La clé correspond à la date de la version au format AAAA-MM-JJ. */
  articlesModificateurs?: Record<string, ArticleModificateurDTO>;
}

/**
 * AccoConsultRequest
 * Requête de consultation d'un accord d'entreprise
 */
export interface AccoConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Identifiant de l'accord d'entreprise
   * @example "ACCOTEXT000037731479"
   */
  id: string;
}

/** StructureLienArticle */
export interface StructureLienArticle {
  /** @format date-time */
  dateDebut?: string;
  id?: string;
  etat?: string;
  /** @format date-time */
  dateFin?: string;
  url?: string;
}

/**
 * CodeListRequest
 * Requête paginée pour lister les codes
 */
export interface CodeListRequest {
  /**
   * Ordre de tri
   * @example "TITLE_ASC"
   */
  sort?: "TITLE_ASC";
  /**
   * Nombre de résultats par page (max 100)
   * @format int32
   * @example 10
   */
  pageSize: number;
  /**
   * Liste des états juridiques à filtrer
   * @example ["VIGUEUR","ABROGE","VIGUEUR_DIFF"]
   */
  states?: (
    | "VIGUEUR"
    | "ABROGE_DIFF"
    | "VIGUEUR_DIFF"
    | "VIGUEUR_ETEN"
    | "VIGUEUR_NON_ETEN"
    | "ABROGE"
    | "PERIME"
    | "ANNULE"
    | "MODIFIE"
    | "DISJOINT"
    | "SUBSTITUE"
    | "TRANSFERE"
    | "INITIALE"
    | "MODIFIE_MORT_NE"
    | "SANS_ETAT"
    | "DENONCE"
    | "REMPLACE"
  )[];
  /**
   * Numéro de la page à consulter
   * @format int32
   * @example 1
   */
  pageNumber: number;
  /**
   * Titre de code à chercher
   * @example "Code civil"
   */
  codeName?: string;
}

/**
 * CnilConsultRequest
 * requête de consultation d'un texte CNIL
 */
export interface CnilConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Identifiant du texte
   * @example "CNILTEXT000017652361"
   */
  textId: string;
}

/**
 * JuriConsultWithAncienId
 * requête de consultation d'un texte du fonds JURI avec ancien ID
 */
export interface JuriConsultWithAncienId {
  /**
   * Ancien Id afin de consulter un texte des fonds JURI
   * @example "JG_L_2006_09_000000269553"
   */
  ancienId?: string;
}

/**
 * GetJosResponse
 * Réponse à une requête de recherche de JO
 */
export interface GetJosResponse {
  /**
   * Nombre de résultats
   * @format int64
   * @example 12
   */
  totalNbResult?: number;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des éléments trouvés */
  items?: GetJorfContResponseItem[];
}

/**
 * LegiConsultRequest
 * Requête de consultation d'un texte du fonds Legi.
 */
export interface LegiConsultRequest {
  /**
   * Texte de la recherche ayant aboutie à la consultation du texte
   * @example "constitution 1958"
   */
  searchedString?: string;
  /**
   * Date de consultation
   * @example "2021-04-15"
   */
  date: string;
  /**
   * Chronical ID du texte
   * @example "LEGITEXT000006075116"
   */
  textId: string;
}

/**
 * TextTitle
 * Objet représentant les métadonnées d'une version d'un texte
 */
export interface TextTitle {
  /** Numéro NOR */
  nor?: string;
  /** Visas */
  visas?: string;
  /**
   * Date du texte
   * @format date-time
   */
  dateTexte?: string;
  /** Travaux préparatoires */
  travauxPreparatoires?: string;
  /** Titre */
  titre?: string;
  /**
   * Date de la version courante du texte
   * @format date-time
   */
  dateTexteComputed?: string;
  /** Nature du texte */
  nature?: string;
  /** Signataires */
  signataires?: string;
  /** Nota */
  nota?: string;
  /** Etat juridique */
  etat?: string;
  /** Identifiant */
  id?: string;
  /** Notice */
  notice?: string;
  /** Numéro du texte */
  num?: string;
  /**
   * Date de début
   * @format date-time
   */
  dateDebut?: string;
  /** Numéro de parution */
  numParution?: string;
  /** Titre long */
  titreLong?: string;
  /**
   * Date de publication de la version courante
   * @format date-time
   */
  datePubliComputed?: string;
  /**
   * Date de publication
   * @format date-time
   */
  datePubli?: string;
  /** Portée Géographique */
  appliGeo?: string;
  /** Liste des code de nomenclature */
  codesNomenclatures?: string[];
  /** Chronical ID */
  cid?: string;
  /**
   * Date de fin
   * @format date-time
   */
  dateFin?: string;
  /** Origine de la publication */
  originePubli?: string;
  /** ID référençant le code lié à l'article cible. */
  ancienId?: string;
  /** Appellations */
  appellations?: string[];
  /** Liste des dossiers législatifs */
  dossiersLegislatifs?: DossierLegislatif[];
}

/**
 * ServicePublicLinksArticleResponse
 * Réponse d'une requête de récupération des liens service public associés à un article
 */
export interface ServicePublicLinksArticleResponse {
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des liens service public associés à notre article */
  liensSP?: Record<string, string>;
}

/**
 * LastNElementRequest
 * requête de récupération des derniers JO
 */
export interface LastNElementRequest {
  /**
   * Nombre de JO à remonter
   * @format int32
   * @example 5
   */
  nbElement: number;
}

/**
 * Tms
 * Objet représentant une section d'un conteneur
 */
export interface Tms {
  /** Liste des liens vers les textes de la section courante */
  liensTxt?: LienTxt[];
  /**
   * Numéro d'ordre de la section
   * @format int32
   * @example 3
   */
  ordre?: number;
  /** Liste des sections enfants de la section courante */
  tms?: Tms[];
  /** Titre de la section */
  titre?: string;
  /**
   * Niveau de la section
   * @format int32
   * @example 1
   */
  niv?: number;
}

/**
 * JorfConsultWithNorRequest
 * Requête de consultation d'un JORF à partir de son NOR.
 */
export interface JorfConsultWithNorRequest {
  /**
   * NOR
   * @example "MAEJ9830052D"
   */
  nor: string;
}

/**
 * DossiersLegislatifsListResponse
 * Résultat d'une requête pour lister les dossiers législatifs d'une législature
 */
export interface DossiersLegislatifsListResponse {
  /** Législature associée */
  legislature?: Legislature;
  /**
   * Temps d'exécution
   * @format int64
   */
  executionTime?: number;
  /** Liste des dossiers législatifs répondant à la requête */
  dossiersLegislatifs?: DossierLegislatifResult[];
}

/** Map«string,SuggestValue» */
export type MapStringSuggestValue = Record<string, SuggestValue>;

/** Map«string,SuggestAccoValue» */
export type MapStringSuggestAccoValue = Record<string, SuggestAccoValue>;
