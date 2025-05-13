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
//On ne va pas utiliser lodash pour normaliser le tableau d'objets par ID
//On crée un tableau d'objets users
const users = [
  { id: 'user1', name: 'Alice', age: 28 },
  { id: 'user2', name: 'Bob', age: 35 }
];

function myOmit(obj, keysToOmit) {
    let result = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      if (!keysToOmit.includes(keys[i])) { // Vérifie si la clé ne doit pas être omise
        result[keys[i]] = obj[keys[i]];
      }
    }
    return result;
  }
  
  // On va utiliser une fonction pour normaliser le tableau d'objets par ID
  function indexByKey(tableau, key) {
    let result = {};
    for (let i = 0; i < tableau.length; i++) {
      const item = tableau[i];
      const id = item[key];
      
      result[id] = myOmit(item, ['id']); // Appelle la fonction corrigée
    }
    return result;
  }
  
  // On utilise la fonction indexByKey pour transformer le tableau en un objet normalisé indexé par ID
  const normalizedUsers = indexByKey(users, 'id');
  // On affiche le résultat dans la console
  console.log("On obtient en retour : " + JSON.stringify(normalizedUsers, null, 2));