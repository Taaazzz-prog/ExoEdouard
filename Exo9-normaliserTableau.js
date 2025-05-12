/*
Normaliser un tableau d’objets par ID
Objectif :
À partir du tableau suivant :


const users = [
  { id: 'user1', name: 'Alice', age: 28 },
  { id: 'user2', name: 'Bob', age: 35 }
];
Exercice :
Transformez-le en un objet normalisé indexé par ID :


{
  user1: { name: 'Alice', age: 28 },
  user2: { name: 'Bob', age: 35 }
}
*/
// On crée un tableau d'objets users
const users = [
  { id: 'user1', name: 'Alice', age: 28 },
  { id: 'user2', name: 'Bob', age: 35 }
];
// On va utiliser lodash pour normaliser le tableau d'objets par ID
const _ = require('lodash');
// On utilise la méthode _.keyBy de Lodash pour transformer le tableau en un objet normalisé indexé par ID
const normalizedUsers = _.keyBy(users, 'id');
// On va utiliser _.mapValues pour supprimer la clé id de chaque objet
const normalizedUsers1 = _.mapValues(normalizedUsers, (user) => _.omit(user, 'id'));
// On affiche le résultat dans la console
console.log("On obtient en retour : " + JSON.stringify(normalizedUsers1, null, 2));