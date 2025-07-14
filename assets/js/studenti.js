fetch("http://localhost:3000/api/utenti/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }

    return response.json();
  })

  .then((studenti) => {
    studenti.forEach((studente) => {
      console.log(
        studente.CF,
        studente.nome,
        studente.cognome,
        studente.dataNascita,
        studente.email,
        studente.tel,
        studente.corso,
        studente.note
      );

      const tabella = document.getElementById("tabella");
    const rowTable = `
        <tr>
            <td>${studente.CF}</td>
            <td>${studente.nome}</td>
            <td>${studente.cognome}</td>
            <td>${studente.dataNascita}</td>
            <td>${studente.email}</td>
            <td>${studente.tel}</td>
            <td>${studente.corso}</td>
            <td>${studente.note}</td>
        </tr> `;
        tabella.innerHTML += rowTable;
    });

    
  })

  .catch((error) => {
    document.bodyML += `<span class="text-danger">${error.message}</span>`;
    console.error("Errore fetch:", error);
  });
