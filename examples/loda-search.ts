import 'dotenv/config';
import { LegifranceClient, LodaSearchResult, Nature } from '../src';

async function main() {
  const client = new LegifranceClient({
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    environment: 'sandbox',
  });

  await client.initialize();
  console.log('✅ Authenticated\n');

  // Example 1: Basic search
  console.log('=== Example 1: Basic LODA search ===');
  try {
    const result = await client.searchLoda('environnement', {
      pageSize: 3,
      natures: [Nature.DECRET, Nature.ARRETE],
    });
    
    console.log(`Total: ${result.totalResultNumber}`);
    console.log(`Results: ${result.results.length}\n`);
    
    result.results.forEach((item: LodaSearchResult, i: number) => {
      const title = item.titles[0]?.title || item.id;
      console.log(`${i + 1}. ${title}`);
      console.log(`   Nature: ${item.nature}`);
      console.log(`   NOR: ${item.nor}`);
      console.log(`   Status: ${item.etat}`);
      console.log(`   Date: ${item.datePublication}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Example 2: Search with date filters
  console.log('\n=== Example 2: Search with date filters ===');
  try {
    const result = await client.searchLoda('décret', {
      pageSize: 3,
      datePublication: { start: '2025-01-01', end: '2025-12-31' },
    });
    
    console.log(`Total: ${result.totalResultNumber}`);
    result.results.forEach((item: LodaSearchResult, i: number) => {
      const title = item.titles[0]?.title || item.id;
      console.log(`${i + 1}. ${title}`);
      console.log(`   Date: ${item.datePublication}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Example 3: Search with multiple natures
  console.log('\n=== Example 3: Search LOI and ORDONNANCE ===');
  try {
    const result = await client.searchLoda('travail', {
      pageSize: 3,
      natures: [Nature.LOI, Nature.ORDONNANCE],
    });
    
    console.log(`Total: ${result.totalResultNumber}`);
    result.results.forEach((item: LodaSearchResult, i: number) => {
      const title = item.titles[0]?.title || item.id;
      console.log(`${i + 1}. ${title}`);
      console.log(`   Nature: ${item.nature}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  // Example 4: Search with LODA_ETAT fond
  console.log('\n=== Example 4: Search with LODA_ETAT ===');
  try {
    const result = await client.searchLoda('santé', {
      pageSize: 3,
      fond: 'LODA_ETAT',
    });
    
    console.log(`Total: ${result.totalResultNumber}`);
    result.results.forEach((item: LodaSearchResult, i: number) => {
      const title = item.titles[0]?.title || item.id;
      console.log(`${i + 1}. ${title}`);
      console.log(`   Status: ${item.etat}\n`);
    });
  } catch (error: any) {
    console.log('Error:', error.response?.status, error.response?.data?.message || error.message);
  }

  console.log('✅ All examples completed!');
}

main();

