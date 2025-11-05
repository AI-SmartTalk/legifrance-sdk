# 📚 Legifrance SDK

<div align="center">

**TypeScript SDK for the Legifrance API**

Made with ❤️ by [**AI Smarttalk**](https://aismarttalk.tech)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## 🚀 Features

- ✅ **Full TypeScript support** with autocomplete
- ✅ **OAuth2 authentication** handled automatically
- ✅ **Sandbox & Production** environments
- ✅ **Complete LODA search** with all filters (dates, natures, legal status)
- ✅ **Clean & simple API**

## 📦 Installation

```bash
npm install legifrance-sdk
```

## 🔧 Quick Start

```typescript
import { LegifranceClient, Nature } from 'legifrance-sdk';

const client = new LegifranceClient({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  environment: 'sandbox', // or 'production'
});

await client.initialize();

// Search in LODA
const result = await client.searchLoda('environnement', {
  pageSize: 10,
  natures: [Nature.DECRET, Nature.ARRETE],
  datePublication: { start: '2025-01-01', end: '2025-12-31' },
});

console.log(`Found ${result.totalResultNumber} results`);
```

## 📋 Covered Endpoints

| Endpoint | Method | Description | Status |
|----------|--------|-------------|--------|
| `/consult/ping` | `ping()` | Test API connectivity | ✅ Working |
| `/list/loda` | `listLoda()` | List LODA texts | ✅ Working |
| `/search` (LODA) | `searchLoda()` | Search LODA with filters | ✅ Working |
| `/search` (JURI) | `searchJuri()` | Search jurisprudence with filters | ✅ Working |
| `/consult/loda` | `consultLoda()` | Consult a LODA text | ✅ Working |
| `/consult/loda/version` | `consultLodaVersion()` | Consult specific version | ✅ Working |
| `/consult/loda/versions` | `listLodaVersions()` | List text versions | ✅ Working |

## 🔍 Search Parameters

### LODA Search (LOI, ORDONNANCE, DECRET, ARRETE)

The `searchLoda()` method supports all parameters from the official Python wrapper:

```typescript
await client.searchLoda('query text', {
  // Pagination
  pageSize: 10,
  pageNumber: 1,
  
  // Search parameters
  textId: 'LEGITEXT000006074220',
  champ: 'ALL', // 'ALL' | 'TEXTE' | 'TITLE' | 'NUM'
  typeRecherche: 'TOUS_LES_MOTS_DANS_UN_CHAMP', // Search type
  
  // Filters
  fond: 'LODA_DATE', // 'LODA_DATE' | 'LODA_ETAT'
  natures: [Nature.LOI, Nature.DECRET, Nature.ARRETE],
  
  // Date filters
  dateSignature: '2024-01-01', // or { start: '...', end: '...' }
  datePublication: { start: '2025-01-01', end: '2025-12-31' },
});
```

### JURI Search (Jurisprudence)

The `searchJuri()` method supports comprehensive jurisprudence search with filters:

```typescript
await client.searchJuri('contrat de travail', {
  // Pagination
  pageSize: 5,
  pageNumber: 1,
  
  // Publication filter
  publicationBulletin: [PublicationStatus.PUBLIER], // or NON_PUBLIER, PUBLIER_EXTRAIT
  
  // Juridiction filter
  juridictionJudiciaire: ['Cour de cassation'], // or "Juridictions d'appel", etc.
  
  // Date filter
  dateStart: '2024-01-01',
  dateEnd: '2024-12-31',
  dateFacet: 'DATE_DECISION', // or 'DATE_PUBLI'
  
  // Formation filter (for Cour de cassation)
  formation: ['Chambre sociale'], // or 'Chambre commerciale', 'Première chambre civile', etc.
  
  // Court of appeal location (only for "Juridictions d'appel")
  courAppel: ['Paris'],
  
  // Search configuration
  field: 'ALL', // 'ALL' | 'TEXTE' | 'TITLE'
  searchType: 'UN_DES_MOTS', // or 'TOUS_LES_MOTS_DANS_UN_CHAMP', 'EXACTE'
  sort: SortJuri.PERTINENCE, // or DATE_DESC, DATE_ASC
});
```

**Return type:** Fully typed `JuriSearchResponse` with `JuriSearchResult[]` - no `any` types! ✨

## 📖 Available Constants

```typescript
import { 
  // Common
  Nature,              // LOI, DECRET, ARRETE, ORDONNANCE, etc.
  Fond,                // LODA_DATE, LODA_ETAT, CODE_DATE, JURI, etc.
  TypeChamp,           // ALL, TEXTE, TITLE, NUM, etc.
  Operateur,           // ET, OU, SAUF, NEAR, etc.
  Facette,             // DATE_VERSION, TEXT_LEGAL_STATUS, etc.
  Sort,                // PUBLICATION_DATE_DESC, SIGNATURE_DATE_ASC, etc.
  
  // LODA-specific
  LodaSearchRequest,   // Typed request
  LodaSearchResponse,  // Typed response
  LodaSearchResult,    // Typed result
  
  // JURI-specific
  SortJuri,            // PERTINENCE, DATE_DESC, DATE_ASC
  PublicationStatus,   // PUBLIER, NON_PUBLIER, PUBLIER_EXTRAIT
  FacettesJuri,        // CASSATION_TYPE_PUBLICATION_BULLETIN, JURIDICTION_JUDICIAIRE, etc.
  JuriSearchResponse,  // Typed response
  JuriSearchResult,    // Typed result
} from 'legifrance-sdk';
```

## 🛠️ Environment Configuration

Create a `.env` file:

```env
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
```

Then use:

```typescript
import 'dotenv/config';

const client = new LegifranceClient({
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  environment: 'sandbox',
});
```

## 📚 Code Examples

Check the [`examples/`](./examples) folder for complete working examples:

- **`basic.ts`** - Simple ping and list example
- **`loda-search.ts`** - Complete LODA search with all filters
- **`juri-search.ts`** - Complete jurisprudence search examples
- **`complete.ts`** - Combined LODA + JURI example

### List LODA Texts

```typescript
const result = await client.listLoda({
  pageSize: 10,
  pageNumber: 1,
});

console.log(`Total: ${result.totalResultNumber}`);
result.results.forEach(item => {
  console.log(`${item.title} (${item.cid})`);
});
```

### Search with Date Filters

```typescript
const result = await client.searchLoda('décret', {
  pageSize: 5,
  datePublication: { 
    start: '2025-01-01', 
    end: '2025-12-31' 
  },
});
```

### Search by Nature

```typescript
import { LodaSearchResult } from 'legifrance-sdk';

const result = await client.searchLoda('travail', {
  natures: [Nature.LOI, Nature.ORDONNANCE],
  pageSize: 10,
});

// Fully typed results!
result.results.forEach((item: LodaSearchResult) => {
  console.log(item.titles[0]?.title);
});
```

### Search Jurisprudence

```typescript
const result = await client.searchJuri('contrat de travail', {
  pageSize: 10,
  juridictionJudiciaire: ['Cour de cassation'],
  formation: ['Chambre sociale'],
  dateStart: '2024-01-01',
  dateEnd: '2024-12-31',
});

// Fully typed results!
result.results?.forEach((item: JuriSearchResult) => {
  console.log(item.titles?.[0]?.title);
  console.log(`Nature: ${item.nature}`);
});
```

### Consult a Text

```typescript
const text = await client.consultLoda({
  textId: 'LEGITEXT000006074220',
  date: '2024-01-01',
});

console.log(text.title);
```

## 🏗️ Build

```bash
npm run build
```

## 🧪 Examples

Run examples from the `examples/` folder:

```bash
# Basic example (ping, list)
npx ts-node examples/basic.ts

# LODA search examples
npx ts-node examples/loda-search.ts

# JURI search examples
npx ts-node examples/juri-search.ts

# Complete example (LODA + JURI)
npx ts-node examples/complete.ts
```

## 📄 License

MIT

## 🤝 Contributing

Made by [AI Smarttalk](https://aismarttalk.tech) - We build AI-powered solutions.

For issues or feature requests, please open an issue on GitHub.

### Updating types
Update swagger files and run the following command 
```bash 
npx swagger-typescript-api generate -p legifrance.swagger.json -o ./src/generated -n api-types.ts --no-client
```

---

<div align="center">
  <strong>Powered by AI Smarttalk</strong><br>
  <a href="https://aismarttalk.tech">aismarttalk.tech</a>
</div>

