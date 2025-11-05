import 'dotenv/config';
import { LegifranceClient } from './src';

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

  // List LODA texts
  try {
    const result = await client.listLoda({
      pageSize: 5,
      pageNumber: 1,
    });
    
    console.log('\nLODA texts:');
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
}

main();
