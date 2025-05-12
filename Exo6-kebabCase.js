/*
Exercice 6 : Convertir un objet en tableau avec transformation des clés et valeurs
Objectif :
Considérez l’objet suivant :

const config = {
  maxUsers: "50",
  enableFeatureX: "true",
  timeoutSeconds: "30"
};
Exercice :
Convertissez-le en un tableau d'objets où les clés deviennent name en kebab-case, et les valeurs numériques ou booléennes sont correctement parsées :

[
  { name: "max-users", value: 50 },
  { name: "enable-feature-x", value: true },
  { name: "timeout-seconds", value: 30 }
];    
*/

const _ = require('lodash');
// On crée un objet config
const config = {
  maxUsers: "50",
  enableFeatureX: "true",
  timeoutSeconds: "30"
};
console.log("Mon object de départ sans son CamelToe XD " + JSON.stringify(config, null, 2));
// On utilise la méthode map de Lodash pour transformer l'objet config en un tableau d'objets
const configArray = _.map(config, (value, key) => {
  // On transforme la clé en kebab-case
  //Explication de la fonction kebabCase
  // _.kebabCase : Cette méthode de Lodash transforme une chaîne de caractères en kebab-case
  // Par exemple, 
     //_.kebabCase('maxUsers'); -----> Résultat : 'max-users'
    //_.kebabCase('Enable Feature X'); -----> Résultat : 'enable-feature-x'
    //_.kebabCase('timeout_seconds'); -----> Résultat : 'timeout-seconds'
  
  const name = _.kebabCase(key);
  // On parse la valeur en nombre ou booléen

    //Syntaxe générale de la fonction
    // condition ? valeurSiVrai : valeurSiFaux;
    //Si la condition est vraie, on retourne valeurSiVrai, sinon on retourne valeurSiFaux
    
   // const parsedValue = _.isString(value) ? (_.isNaN(_.parseInt(value)) ? value === "true" : _.parseInt(value)) : value; // Correction de la syntaxe

    //Je la reecris avec explication, étape par étape
    const parsedValue = _.isString(value) // Vérifie si la valeur est une chaîne de caractères
    ? (_.isNaN(_.parseInt(value)) // Si c'est une chaîne, on vérifie si elle peut être convertie en nombre
        ? value === "true" // Si ce n'est pas un nombre, on vérifie si c'est "true"
        : _.parseInt(value)) // Sinon, on la convertit en entier
    : value; // Si ce n'est pas une chaîne, on garde la valeur telle quelle
  return { name, value: parsedValue };
});
// On affiche le résultat dans la console
console.log("Detaille du camelToesCase XD " + JSON.stringify(configArray, null, 2));
