import express, { Request, Response } from 'express';
import cors from 'cors'
import { alldata } from './data/all';
import { rockdata } from './data/rock';
import { metaldata } from './data/metal';
import { popdata } from './data/pop';

const app = express();
const port = 5000;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

/* ***************************************************************************** */

//GET, tutti gli artisti
app.get('/artists/all', async (req: Request, res: Response) => {
  const { page, limit, name } = req.query;
  const pageNumber = parseInt(page as string, 10) || 1;
  const itemsPerPage = 12;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  try {
    let filteredArtists = alldata;

    if (name) {
      const searchTerm = name.toString().toLowerCase();
      filteredArtists = alldata.filter((artist) =>
        artist.info.name.toLowerCase().includes(searchTerm)
      );
    }

    const paginatedItems = filteredArtists.slice(startIndex, endIndex);
    const totalItems = filteredArtists.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    res.json({
      items: paginatedItems,
      currentPage: pageNumber,
      totalPages: totalPages,
      totalItems: totalItems
    });
  } catch (err) {
    console.error('Errore durante la richiesta GET degli artisti:', err);
    res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
  }
});


//GET, artisti rock
app.get('/artists/rock', async (req: Request, res: Response) => {
  try {
    res.json(rockdata);
  } catch (err) {
    console.error('Errore durante la richiesta GET degli artisti:', err);
    res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
  }
});


//GET, artisti metal
app.get('/artists/metal', async (req: Request, res: Response) => {
  try {
    res.json(metaldata);
  } catch (err) {
    console.error('Errore durante la richiesta GET degli artisti:', err);
    res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
  }
});

//GET, artisti pop
app.get('/artists/pop', async (req: Request, res: Response) => {
  try {
    res.json(popdata);
  } catch (err) {
    console.error('Errore durante la richiesta GET degli artisti:', err);
    res.status(500).json({ error: 'Errore durante la richiesta GET degli artisti' });
  }
});

app.listen(port, async () => {
  console.log(`Server API running on http://localhost:${port}`);
});
