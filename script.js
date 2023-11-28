// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed 
// emetto un messaggio in console con il numero della cella cliccata.


//seleziono il contenitore dall'html e il bottone
const gridElement = document.getElementById("grid");
const sendButton = document.getElementById("send");


//attivo la funzione del click al bottone
sendButton.addEventListener("click",

    function(){

        gridElement.innerHTML = "";
        for (let i = 1; i <= 100; i++) {

            const square = document.createElement("div");
            square.classList.add("square");
            grid.append(square);
            square.append(i);
        }
    }
)