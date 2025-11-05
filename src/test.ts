import 'dotenv/config';
import { LegifranceClient } from './client';

async function main() {
  const clientId = process.env.CLIENT_ID || 'YOUR_CLIENT_ID';
  const clientSecret = process.env.CLIENT_SECRET || 'YOUR_CLIENT_SECRET';

  const client = new LegifranceClient({
    clientId,
    clientSecret,
  });

  console.log('Initializing client...\n');

  try {
    await client.initialize();
    console.log('Client authenticated\n');

    // Test ping
    console.log('Test: Ping');
    const pingResult = await client.ping();
    console.log('Result:', pingResult, '\n');

    // Test LODA list
    console.log('Test: List LODA');
    const loda = await client.listLoda({ pageSize: 5 });
    console.log('Total results:', loda.totalResultNumber);
    console.log('Returned:', loda.results?.length);
    if (loda.results?.[0]) {
      console.log('First:', loda.results[0].id);
    }
    console.log('');

    // Test search (may fail on sandbox)
    console.log('Test: Search');
    try {
      const search = await client.search({
        fond: 'JORF',
        recherche: {
          champs: [{
            typeChamp: 'ALL',
            criteres: [{ valeur: 'test' }],
            operateur: 'ET' as const,
          }],
          operateur: 'ET' as const,
          pageNumber: 1,
          pageSize: 5,
          sort: 'PERTINENCE',
          typePagination: 'DEFAUT' as const,
        }
      });
      console.log('Results:', search.totalResultNumber);
    } catch (error: any) {
      console.log('Search failed:', error.response?.status, error.response?.data?.message);
    }

    console.log('\nTests completed');
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    process.exit(1);
  }
}

main();
