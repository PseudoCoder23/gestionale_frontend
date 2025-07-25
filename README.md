# Gestionale Inserimento Utenti

Questo progetto è un'applicazione web semplice per l'inserimento di utenti (nome ed email) e il salvataggio dei dati in un file JSON lato server tramite Node.js.

## 📁 Struttura del Progetto

```
gestionale-inserimento-utenti/
│
├── index.html          # Pagina HTML con form utente
├── server.js           # Server Node.js con Express
└── assets/
    └── css/
        └── css         # Stili CSS per il form
    └── js/
        └── script.js   # Invio dei dati con Fetch API
    └── db/
        └── db.json     # File JSON dove vengono salvati gli utenti
```

## 🚀 Tecnologie utilizzate

- HTML/CSS/JavaScript (Frontend)
- Node.js + Express (Backend)
- JSON per il salvataggio dati

## 📦 Installazione


**Apri il terminale nella cartella del progetto**:

   ```bash
   cd gestionale-inserimento-utenti
   ```

**Inizializza il progetto Node.js (se non lo hai già fatto)**:

   ```bash
   npm init -y
   ```

**Installa le dipendenze necessarie**:

   ```bash
   npm install express
   ```

## ▶️ Avvio del Server

Per avviare il server, esegui:

```bash
npm start
```

Il server sarà attivo su: [http://localhost:3000](http://localhost:3000)

## 📝 Come funziona

- L’utente compila il form presente in `index.html`.
- Al click su "Salva", i dati vengono inviati via `fetch` con metodo `POST` a `/api/utenti`.
- Il server Node.js riceve i dati e li salva nel file `assets/db/db.json`.

## ✅ Obiettivi didattici

- Separazione frontend/backend
- Utilizzo di Express.js
- Lavoro con file system (`fs`) in Node
- Integrazione di HTML, JS e API REST

---

Creato con ❤️ per esercitazione pratica voi
