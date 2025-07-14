document
  .getElementById("inserisciStudenti")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const dati = {
      infoPersonali: {
        nome: document.getElementById("nome_studente").value.trim(),
        cognome: document.getElementById("cognome_studente").value.trim(),
        CF: document.getElementById("CF").value.trim(),
        email: document.getElementById("mail_studente").value.trim(),
        tel: document.getElementById("telefono_studente").value.trim(),
        genere: document.getElementById("genere").value.trim(),
        infoNascita: {
          dataNascita: document.getElementById("dataNascita").value.trim(),
          luogoNascita: document.getElementById("luogoNascita").value.trim(),
          nazionalita: document.getElementById("nazionalita").value.trim(),
        },
        residenza: {
          via: document.getElementById("via_studente").value.trim(),
          cap: document.getElementById("cap_studente").value.trim(),
          comune: document.getElementById("comune_studente").value.trim(),
          provincia: document.getElementById("provincia_studente").value.trim(),
          nazione: document.getElementById("nazione_studente").value.trim(),
        }
      },
      corso: document.getElementById("selectCorso").value.trim(),
      note: document.getElementById("note").value.trim(),


    };
    console.log(dati);


    inviaDatiAlServer(dati);
    /* if (validaDati(dati)) {
    } else {
      console.log("Errore: Dati non validi.");
    } */





    /*========== Validazione dati ==========*/

    /* function validaDati(dati) {
      let valido = true;
      if (dati.infoPersonali.tel.length !== 10 || !/^\d{10}$/.test(dati.infoPersonali.tel)) {
        alert("Telefono errato");
        valido = false;
      }

      if (dati.infoPersonali.CF.length !== 16) {
        alert("Codice Fiscale Errato");
        valido = false
      }
      return valido
    } */



    /*========= invia al form ========*/
    async function inviaDatiAlServer(dati) {
      console.log("Invio dei dati al server in corso...");

      try {
        const res = await fetch('/api/studenti');
        if (!res.ok) throw new Error("Impossibile leggere gli studenti esistenti");
        const studenti = await res.json();

        let id;
        const esisteID = (id) => studenti.some(u => u.id === id);

        // Genera un ID unico
        do {
          id = Math.random().toString(36).substring(2, 6);
        } while (esisteID(id));

        dati.id = id;

        const postResponse = await fetch('/api/studenti', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dati)
        });

        if (!postResponse.ok) {
          const errorText = await postResponse.text();
          throw new Error("Errore HTTP " + postResponse.status + ": " + errorText);
        }

        const data = await postResponse.json();
        console.log("Risposta del server (JSON Server):", data);
        alert("Dati inviati con successo al server locale!");
      } catch (error) {
        console.error("Errore durante l'invio:", error.message);
        alert("Errore durante l'invio dei dati: " + error.message);
      }
    }

  });

/*========= GET ========*/
