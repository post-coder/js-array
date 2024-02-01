
// array di nomi
const names = ["Gabriel", "Michele", "Miriam", "Ignazio", "Elisabetta"];

// posso aggiungere elementi anche successivamente
names.push("Arianna");

// mostro in pagina la lista dei nomi

// salvo la lista in una variabile
const lista = document.querySelector("ol");


// creo un ciclo che mi scorre tutti gli elementi dell'array names
for(let i = 0; i < names.length; i++) {
    
    // per ognuno creo un elemento html
    const newElement = document.createElement("li");

    // ci scrivo dentro il nome corrispondente preso dall'array tramite il suo indice (i)
    newElement.innerText = names[i];

    // appendo l'elemento creato alla lista
    lista.append(newElement);
}
// così sto visualizzando tutti i nomi, la lista essendo <ol> mostra già il numero relativo (per quanto sia +1)

// mi salvo il pulsante
const formButtonElement = document.getElementById("formButton");

// controllo quando ci effettuano il click
formButtonElement.addEventListener("click",

    function() {

        // prendo ciò che è stato scritto dentro il campo di testo
        const sceltaUtente = document.getElementById("nameNumber").value;

        // ci inserisco dentro come testo il nome selezionato
        // qui mi ricordo che l'indice che ha inserito l'utente nel campo di input in realtà 
        // su js va diminuito di uno
        document.getElementById("result").innerText = names[sceltaUtente-1];

    }
)

