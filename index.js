const express = require('express');
const app = express();
const port = 3001;
const connection = require('./conf');
const cors = require('cors');

app.use(cors());


app.get('/api/monsters', (req, res) => {

    connection.query('SELECT * FROM monsters', (err, results) => {
  
      if (err) {

        res.status(500).send('Erreur lors de la récupération des monstres');
      } else {

        res.json(results);
      }
    });
  });

  app.get('/api/characters', (req, res) => {

    connection.query('SELECT * FROM characters', (err, results) => {
  
      if (err) {

        res.status(500).send('Erreur lors de la récupération des characters');
      } else {

        res.json(results);
      }
    });
  });

  app.get('/api/itemsNormal', (req, res) => {

    connection.query('SELECT * FROM itemsNormal', (err, results) => {
  
      if (err) {

        res.status(500).send('Erreur lors de la récupération des items normaux');
      } else {

        res.json(results);
      }
    });
  });

  app.get('/api/itemsBoss', (req, res) => {

    connection.query('SELECT * FROM itemsBoss', (err, results) => {
  
      if (err) {

        res.status(500).send('Erreur lors de la récupération des items de boss');
      } else {

        res.json(results);
      }
    });
  });

  app.get('/api/bosses', (req, res) => {

    connection.query('SELECT * FROM bosses', (err, results) => {
  
      if (err) {

        res.status(500).send('Erreur lors de la récupération des boss');
      } else {

        res.json(results);
      }
    });
  });









app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
