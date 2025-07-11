document.getElementById('inserisciStudenti').addEventListener('submit',function(e) {
    e.preventDefault;
    const nome = document.getElementById('nome_studente').value;
    const cognome = document.getElementById('cognome_studente').value;
    const email = document.getElementById('mail_studente').value;
    tel = document.getElementById('telefono_studente').value;
    console.log(nome,cognome,email,tel);

/*========== Validazione dati ==========*/

    if (tel.length !== 10) {
    alert("Telefono errato");
}


/*========= invia al form ========*/
    fetch('/api/utenti', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, cognome, email, tel })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert("Errore nel salvataggio"));
});

/*========= GET ========*/

fetch('/api/utenti', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, cognome, email, tel })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert("Errore nel salvataggio"));
});




