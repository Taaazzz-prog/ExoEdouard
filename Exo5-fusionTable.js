/* 
Exercice 5 : Fusionner des tableaux d'objets selon une clé
Objectif :
Considérez les deux tableaux suivants :

const infos = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const scores = [
  { id: 1, score: 95 },
  { id: 2, score: 87 },
];
Exercice :
Fusionnez les deux tableaux pour obtenir ceci :

[
  { id: 1, name: "Alice", score: 95 },
  { id: 2, name: "Bob", score: 87 }
] 
*/

// Utilisez la méthode `_.merge` de Lodash pour fusionner les deux tableaux d'objets selon la clé `id`.
// Affichez le résultat dans la console.

// On appel la bibliotheque lodash
const _ = require('lodash');


// On map, find, merge
// On crée un tableau d'objets infos et scores
const infos1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const scores1 = [
  { id: 1, score: 95 },
  { id: 2, score: 87 },
  { id: 3, score: 100 }, // Ne doit pas être affiché car il n'a pas de name correspondant
];

// On utilise la méthode map pour fusionner les deux tableaux d'objets selon la clé id
const mergedArray1 = _.map(infos1, info => {
  // On cherche dans scores1 l'objet qui a le même id que l'objet actuel de infos1
  const score1 = _.find(scores1, s => s.id === info.id);
  // On fusionne l'objet info avec l'objet trouvé dans scores1
  return _.merge({}, info, score1);
});

// On affiche le résultat dans la console
console.log(mergedArray1);

