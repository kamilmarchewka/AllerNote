import { Client } from 'pg';

// Konfiguracja połączenia z Neon PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL,  // Zmienna środowiskowa zawierająca URI bazy danych
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function connectDb() {
  if (!client._connected) {
    await client.connect();
  }
}

export async function disconnectDb() {
  await client.end();
}

export { client };
