import 'dotenv/config';
import { LegifranceClient, LodaSearchResult, JuriSearchResult, Nature, SortJuri, TypeRecherche } from './src';

async function main() {
  const client = new LegifranceClient({
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    environment: 'sandbox',
  });

  await client.initialize();
  console.log('Authenticated\n');

  // Test ping
  try {
    const result = await client.ping();
    console.log('Ping:', result);
  } catch (error: any) {
    console.log('Error:', error.message);
  }

  // List LODA texts (WORKS on sandbox)
  try {
    const result = await client.listLoda({
      pageSize: 5,
      pageNumber: 1,
    });
    
    console.log('\nLODA list:');
    console.log('Total:', result.totalResultNumber);
    console.log('Results:', result.results?.length);
    
    if (result.results) {
      result.results.forEach((item: any, i: number) => {
        console.log(`${i + 1}. ${item.title || item.id} (${item.cid})`);
      });
    }
  } catch (error: any) {
    console.log('Error:', error.message);
  }

  // Search in LODA (ALL parameters available!)
  try {
    const result = await client.searchLoda('environnement', { 
      pageSize: 3,
      natures: [Nature.DECRET, Nature.ARRETE],
      fond: 'LODA_DATE',
      dateSignature: { start: '2024-01-01', end: '2024-02-31' },
      // fond: 'LODA_DATE', // or 'LODA_ETAT'
      // textId: 'LEGITEXT000006074220', // Search by specific text ID
      // dateSignature: '2024-01-01', // or { start: '2024-01-01', end: '2024-12-31' }
      // datePublication: { start: '2024-01-01', end: '2024-12-31' },
      // champ: 'ALL', // or 'TEXTE', 'TITLE', 'NUM'
      // typeRecherche: 'TOUS_LES_MOTS_DANS_UN_CHAMP', // or 'UN_DES_MOTS', 'EXACTE'
    });
    
    console.log('\nLODA search:');
    console.log('Total:', result.totalResultNumber);
    console.log('Results:', result.results.length);
    
    result.results.forEach((item: LodaSearchResult, i: number) => {        
      // All fields are typed!
      const title = item.titles[0]?.title || item.id;
      console.log(`${i + 1}. ${title}`);
      console.log(`   Nature: ${item.nature}`);
      console.log(`   NOR: ${item.nor}`);
      console.log(`   Status: ${item.etat}`);
      console.log(`   Date: ${item.datePublication}`);
    });
  } catch (error: any) {
    console.log('Search error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Search in JURI (Jurisprudence)
  try {
    const result = await client.searchJuri('contrat de travail', {
      pageSize: 3,
      sort: SortJuri.PERTINENCE,
    });

    console.log('\nJURI search:');
    console.log('Total:', result.totalResultNumber || result.totalNbResult);
    console.log('Results:', result.results?.length || 0);

    result.results?.forEach((item: JuriSearchResult, i: number) => {
      const title = item.titles?.[0]?.title || 'No title';
      console.log(`${i + 1}. ${title}`);
      console.log(`   Nature: ${item.nature || 'N/A'}`);
    });
  } catch (error: any) {
    console.log('JURI error:', error.response?.status, error.response?.data?.message || error.message);
  }
}

main();
