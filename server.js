const express = require('express');
const Datastore = require('nedb-promises');

const app = express();
const db = Datastore.create('data.db');

app.use(express.static('public'));

app.get('/insert', async (req, res) => {
  try {
    const doc = await db.insert(JSON.parse(req.query.doc));
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/search', async (req, res) => {
  try {
    const docs = await db.find(JSON.parse(req.query.doc));
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('http://localhost:3000'));