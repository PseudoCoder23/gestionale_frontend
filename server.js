const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.static(__dirname));

const dbPath = path.join(__dirname, 'assets', 'db', 'db.json');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'aggiungiStudenti.html'));
});

app.post('/api/utenti', (req, res) => {
  const nuovoUtente = req.body;
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Errore nel file database' });
    let utenti = [];
    try { utenti = JSON.parse(data); } catch (e) { utenti = []; }
    utenti.push(nuovoUtente);
    fs.writeFile(dbPath, JSON.stringify(utenti, null, 2), (err) => {
      if (err) return res.status(500).json({ message: 'Errore nel salvataggio' });
      res.json({ message: 'Utente salvato con successo!' });
    });
  });
});

app.post('/utenti', (req, res) => {
  const filePath = path.join(__dirname, 'assets/db/db.json');
  const nuovoUtente = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ errore: 'Errore di lettura file' });

    try {
      const db = JSON.parse(data);
      const idEsistente = db.utenti.some(u => u.id === nuovoUtente.id);
      if (idEsistente) {
        return res.status(400).json({ errore: 'ID già esistente' });
      }

      db.utenti.push(nuovoUtente);

      fs.writeFile(filePath, JSON.stringify(db, null, 2), (err) => {
        if (err) return res.status(500).json({ errore: 'Errore di scrittura' });
        res.status(201).json(nuovoUtente);
      });
    } catch (e) {
      res.status(500).json({ errore: 'Errore nel parsing JSON' });
    }
  });
});

app.get('/api/utenti', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Errore nel caricamento del database' });
    try {
      const utenti = JSON.parse(data);
      res.json(utenti);
    } catch (e) {
      res.status(500).json({ message: 'Errore nel parsing del file' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server attivo su http://localhost:3000');
});
