import { connectDb, disconnectDb, client } from './app/lib/queries';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { note } = req.body;

    if (!note) {
      return res.status(400).json({ message: 'Notatka nie może być pusta' });
    }

    try {
      await connectDb();

      // Wstawianie notatki do bazy danych
      const query = 'INSERT INTO notes (content, created_at) VALUES ($1, NOW()) RETURNING *';
      const values = [note];
      const result = await client.query(query, values);

      // Odpowiedź z informacjami o nowo dodanej notatce
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Wystąpił błąd przy dodawaniu notatki' });
    } finally {
      await disconnectDb();
    }
  } else {
    res.status(405).json({ message: 'Metoda niedozwolona' });
  }
}
