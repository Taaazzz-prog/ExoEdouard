/*
Exercice 7 : Inverser clé-valeur dans un objet
Objectif :
Considérez l’objet suivant :

const countryCodes = {
  FR: "France",
  US: "United States",
  CA: "Canada"
};

Exercice :
Créez un nouvel objet où les clés et les valeurs sont inversées :

{
  "France": "FR",
  "United States": "US",
  "Canada": "CA"
}
*/
// On appel la bibliotheque lodash
const _ = require('lodash');
// On crée un objet countryCodes
const countryCodes = {
  FR: "France",
  US: "United States",
  CA: "Canada"
};
// On utilise la méthode _.invert pour inverser les clés et les valeurs de l'objet countryCodes
const invertedCountryCodes = _.invert(countryCodes);
// On affiche le résultat dans la console
console.log("Nous obtenons aprés l'utilisation de la fonction lodash _.invert \n " + JSON.stringify(invertedCountryCodes, null, 2));