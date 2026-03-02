const express = require('express');
const Datastore = require('nedb-promises');

const app = express();
const db = Datastore.create('data.db');

app.use(express.json());
app.use(express.static('public'));

app.post('/insert', async (req, res) => {
  try {
    const doc = await db.insert(req.body);
    res.json(doc);
  } 
  catch (err) {
    res.json({ error: err.message });
  }
});

app.post('/search', async (req, res) => {
  try {
    const docs = await db.find(req.body);
    res.json(docs);
  } 
  catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(3000, () => console.log('http://localhost:3000'));