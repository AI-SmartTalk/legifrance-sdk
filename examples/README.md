# 📚 Legifrance SDK Examples

This folder contains complete examples demonstrating how to use the Legifrance SDK.

## 🚀 Prerequisites

1. Create a `.env` file in the project root with your credentials:

```env
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
```

2. Install dependencies:

```bash
npm install
```

## 📋 Available Examples

### 1. Basic Example (`basic.ts`)

Simple example showing:
- Ping API connectivity
- List LODA texts

```bash
npx ts-node examples/basic.ts
```

### 2. LODA Search (`loda-search.ts`)

Complete LODA search examples:
- Basic search with nature filters
- Search with date filters
- Search with multiple natures (LOI, ORDONNANCE)
- Search with `LODA_ETAT` fond

```bash
npx ts-node examples/loda-search.ts
```

### 3. JURI Search (`juri-search.ts`)

Complete jurisprudence search examples:
- Basic JURI search
- Search with publication bulletin filter
- Search with date range
- Search with juridiction filter (Cour de cassation)
- Search with formation filter (Chambre sociale)

```bash
npx ts-node examples/juri-search.ts
```

### 4. Complete Example (`complete.ts`)

Comprehensive example combining:
- Ping test
- List LODA texts
- LODA search with filters
- JURI search

```bash
npx ts-node examples/complete.ts
```

## 💡 Tips

- All examples use **fully typed** responses (no `any` types!)
- Examples demonstrate both `LodaSearchResult` and `JuriSearchResult` types
- Use the sandbox environment for testing
- Check the main [README](../README.md) for full API documentation

## 🔗 Resources

- [Main Documentation](../README.md)
- [API Constants](../src/constants.ts)
- [Type Definitions](../src/types.ts)

