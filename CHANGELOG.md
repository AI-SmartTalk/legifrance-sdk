# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-05

### Added
- Initial release of @aismarttalk/legifrance-sdk
- Full TypeScript support with 5577+ generated types from Swagger 2.0
- OAuth2 authentication with automatic token management
- LODA search with comprehensive filters:
  - Date filters (signature, publication)
  - Nature filters (LOI, DECRET, ARRETE, ORDONNANCE)
  - Legal status filters
  - Text ID search
  - Multiple search types (TOUS_LES_MOTS_DANS_UN_CHAMP, UN_DES_MOTS, EXACTE)
- JURI (Jurisprudence) search with filters:
  - Publication bulletin filter
  - Juridiction filter (Cour de cassation, Juridictions d'appel)
  - Formation filter (Chambre sociale, etc.)
  - Court of appeal location filter
  - Date range filters
- List LODA texts with pagination
- Consult LODA text by ID and date
- Get LODA text versions
- Ping endpoint for connectivity check
- Sandbox and Production environment support
- Complete examples in `examples/` folder
- Comprehensive documentation

### Type System
- `LodaSearchRequest`, `LodaSearchResponse`, `LodaSearchResult` for LODA
- `JuriSearchRequest`, `JuriSearchResponse`, `JuriSearchResult` for JURI
- All constants as TypeScript enums (Nature, Fond, Sort, etc.)
- Full type safety with no `any` types in public API

### Features
- Automatic token refresh
- Environment configuration (sandbox/production)
- Auto-initialization option
- Token inspection with `getTokenInfo()`
- Error handling with typed responses

[1.0.0]: https://github.com/aismarttalk/legifrance-sdk/releases/tag/v1.0.0

