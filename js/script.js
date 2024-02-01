
// array di nomi
const names = ["Gabriel", "Michele", "Miriam", "Ignazio", "Elisabetta"];
// BEST PRACTICE: tutti i valori dentro l'array devono essere dello stesso tipo (stringhe, numeri, booleani ecc.)
// BEST PRACTICE:  i nomi degli array DEVONO essere al plurale

names.push("Daniele");

for (let i = 0; i < names.length; i++ ) {
    console.log(names[i]);
}


console.log(names); // ['Gabriel', 'Michele', 'Miriam', 'Ignazio', 'Roberto', 'Alan']
