console.log("Hi master");
// esercizio di oggi: **Our Team**
// nome repo: **js-our-team**
// Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
// Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
// **Consigli del giorno:**
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Buon lavoro! :muscolo:

const team = [
    {
        fullName: "Wayne Barnett",
        profession: "Founder & CEO"
    },
    {
        fullName: "Angela Caroll",
        profession: "Chief Editor"
    },
    {
        fullName: "Walter Gordon",
        profession: "Office Manager"
    },
    {
        fullName: "Angela Lopez",
        profession: "Social Media Manager"
    },
    {
        fullName: "Scott Enstrada",
        profession: "Developer"
    },
    {
        fullName: "Barbara Ramos",
        profession: "Graphic Designer"
    }
];

console.log(team);

const teamSectionHtml = document.querySelector('#team');
console.log(teamSectionHtml);

