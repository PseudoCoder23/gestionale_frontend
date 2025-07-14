document
  .getElementById("inserisciStudenti")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const dati = {
      nome: document.getElementById("nome_studente").value.trim(),
      cognome: document.getElementById("cognome_studente").value.trim(),
      dataNascita: document.getElementById("dataNascita").value.trim(),
      CF: document.getElementById("CF").value.trim(),
      email: document.getElementById("mail_studente").value.trim(),
      tel: document.getElementById("telefono_studente").value.trim(),
      corso: document.getElementById("selectCorso").value.trim(),
      note: document.getElementById("note").value.trim(),
      luogoNascita: document.getElementById("luogoNascita").value.trim(),
      nazionalita: document.getElementById("nazionalita").value.trim(),
      genere: document.getElementById("genere").value.trim(),
      via: document.getElementById("via_studente").value.trim(),
      cap: document.getElementById("cap_studente").value.trim(),
      comune: document.getElementById("comune_studente").value.trim(),
      provincia: document.getElementById("provincia_studente").value.trim(),
      pnazione: document.getElementById("nazione_studente").value.trim(),

    };
    console.log(dati);

    /*========== Validazione dati ==========*/

    if (dati.tel.length !== 10 || !/^\d{10}$/.test(dati.tel)) {
      alert("Telefono errato");
      return;
    }

    if (dati.CF.length !== 16) {
      alert("Codice Fiscale Errato");
      return;
    }

    /*========= invia al form ========*/
    setTimeout(() => {
      fetch("/api/utenti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dati),
      })
        .then((res) => res.json())
        .then((data) => alert(data.message))
        .catch((err) => alert("Errore nel salvataggio"));
    }, 1000);
  });

/*========= GET ========*/
