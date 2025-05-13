// Exo2 - Créer un module textUtils.js qui contient deux fonctions : capitalizeFirstLetter et reverseText.
// La fonction capitalizeFirstLetter prend une chaîne de caractères en entrée et retourne la même chaîne avec la première lettre en majuscule.
// La fonction reverseText prend une chaîne de caractères en entrée et retourne la même chaîne inversée.


//On importe le module textUtils
const textUtils = require('./Exo2-textUtils');

// On utilise les fonctions du module textUtils
const text = "hello world";
const capitalizedText = textUtils.capitalizeFirstLetter(text);
const reversedText = textUtils.reverseText(text);
console.log("Texte original : ", text);
console.log("Texte avec la première lettre en majuscule : ", capitalizedText);
console.log("Texte inversé : ", reversedText);

