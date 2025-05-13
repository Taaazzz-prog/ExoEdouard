//On importe le module textUtils
const textUtils = require('./Exo2-textUtils');

// On utilise les fonctions du module textUtils
const text = "hello world";
const capitalizedText = textUtils.capitalizeFirstLetter(text);
const reversedText = textUtils.reverseText(text);
console.log("Texte original : ", text);
console.log("Texte avec la première lettre en majuscule : ", capitalizedText);
console.log("Texte inversé : ", reversedText);

