/*
Exercice 5-BIS : Fusionner des tableaux d'objets selon une clé (sans utiliser Lodash)
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

Fusionnez ces deux tableaux en JavaScript pur (sans Lodash ni aucune autre bibliothèque externe) afin d'obtenir ce résultat :


[
  { id: 1, name: "Alice", score: 95 },
  { id: 2, name: "Bob", score: 87 }
]
*/
// On crée un tableau d'objets infos et scores
const infos2 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const scores2 = [
  { id: 1, score: 95 },
  { id: 2, score: 87 },
];
// On utilise la méthode map pour fusionner les deux tableaux d'objets selon la clé id
const mergedArray2 = infos2.map(info => {
  // On cherche dans scores2 l'objet qui a le même id que l'objet actuel de infos2
  const score2 = scores2.find(s => s.id === info.id);
  // On fusionne l'objet info avec l'objet trouvé dans scores2
  return Object.assign({}, info, score2);
});
// On affiche le résultat dans la console
console.log(mergedArray2);