import 'dotenv/config';
import { LegifranceClient, JuriSearchResult, PublicationStatus, SortJuri } from '../src';

async function main() {
  const client = new LegifranceClient({
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    environment: 'sandbox',
  });

  await client.initialize();
  console.log('✅ Authenticated\n');

  // Example 1: Basic JURI search
  console.log('=== Example 1: Basic JURI search ===');
  try {
    const result = await client.searchJuri('contrat de travail', {
      pageSize: 3,
      sort: SortJuri.PERTINENCE,
    });

    console.log(`Total: ${result.totalResultNumber || result.totalNbResult}`);
    console.log(`Results: ${result.results?.length || 0}\n`);
    
    result.results?.forEach((item: JuriSearchResult, i: number) => {
      const title = item.titles?.[0]?.title || 'No title';
      console.log(`${i + 1}. ${title}`);
      console.log(`   Nature: ${item.nature || 'N/A'}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Example 2: Search with publication filter
  console.log('\n=== Example 2: Search with publication filter ===');
  try {
    const result = await client.searchJuri('responsabilité', {
      pageSize: 3,
      publicationBulletin: [PublicationStatus.PUBLIER],
    });

    console.log(`Total: ${result.totalResultNumber || result.totalNbResult}`);
    result.results?.slice(0, 2).forEach((item: JuriSearchResult, i: number) => {
      const title = item.titles?.[0]?.title || 'No title';
      console.log(`${i + 1}. ${title}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Example 3: Search with date range
  console.log('\n=== Example 3: Search with date range ===');
  try {
    const result = await client.searchJuri('licenciement', {
      pageSize: 3,
      dateStart: '2024-01-01',
      dateEnd: '2024-12-31',
      dateFacet: 'DATE_DECISION',
    });

    console.log(`Total: ${result.totalResultNumber || result.totalNbResult}`);
    result.results?.slice(0, 2).forEach((item: JuriSearchResult, i: number) => {
      const title = item.titles?.[0]?.title || 'No title';
      console.log(`${i + 1}. ${title}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Example 4: Search with juridiction filter
  console.log('\n=== Example 4: Search with Cour de cassation ===');
  try {
    const result = await client.searchJuri('dommages', {
      pageSize: 3,
      juridictionJudiciaire: ['Cour de cassation'],
    });

    console.log(`Total: ${result.totalResultNumber || result.totalNbResult}`);
    result.results?.slice(0, 2).forEach((item: JuriSearchResult, i: number) => {
      const title = item.titles?.[0]?.title || 'No title';
      console.log(`${i + 1}. ${title}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Example 5: Search with formation filter
  console.log('\n=== Example 5: Search with Chambre sociale ===');
  try {
    const result = await client.searchJuri('préjudice', {
      pageSize: 3,
      formation: ['Chambre sociale'],
      juridictionJudiciaire: ['Cour de cassation'],
    });

    console.log(`Total: ${result.totalResultNumber || result.totalNbResult}`);
    result.results?.slice(0, 2).forEach((item: JuriSearchResult, i: number) => {
      const title = item.titles?.[0]?.title || 'No title';
      console.log(`${i + 1}. ${title}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  console.log('✅ All JURI examples completed!');
}

main();

