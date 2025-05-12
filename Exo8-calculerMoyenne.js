/*
Exercice 8 : Calculer la moyenne d’une propriété dans un tableau d'objets
Objectif :
Considérez le tableau suivant :

const employees = [
  { id: 1, salary: 3000 },
  { id: 2, salary: 4500 },
  { id: 3, salary: 5000 }
];
Exercice :
Calculez la moyenne des salaires avec Lodash.
*/


// On appel la bibliotheque lodash
const _ = require('lodash');
// On crée un tableau d'objets employees
const employees = [
  { id: 1, salary: 3000 },
  { id: 2, salary: 4500 },
  { id: 3, salary: 5000 }
];

// On utilise la méthode _.meanBy de Lodash pour calculer la moyenne des salaires
const averageSalary = _.meanBy(employees, 'salary');
// On va utiliser _.round pour arrondire la moyenne à 2 décimales apres la virgule
const averageSalary1 = _.round(averageSalary, 2);

// On affiche le résultat dans la console
console.log("La moyenne des salaires est de : " + averageSalary1 + " €, ça gagne bien ici !");