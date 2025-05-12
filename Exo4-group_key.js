/*
Exercice 4 : Grouper des objets selon une propriété
Objectif :
Considérez ce tableau d'objets :

const students = [
  { name: "John", class: "Math", grade: 90 },
  { name: "Alice", class: "Physics", grade: 85 },
  { name: "Bob", class: "Math", grade: 75 },
  { name: "Eve", class: "Physics", grade: 95 },
];
Exercice :
Regroupez les étudiants selon leur classe. Vous devriez obtenir une structure comme ceci :

{
  Math: [
    { name: "John", class: "Math", grade: 90 },
    { name: "Bob", class: "Math", grade: 75 }
  ],
  Physics: [
    { name: "Alice", class: "Physics", grade: 85 },
    { name: "Eve", class: "Physics", grade: 95 }
  ]
} 
*/
// Utilisez la méthode `_.groupBy` de Lodash pour grouper les étudiants par classe.
// Affichez le résultat dans la console.

// On appel la bibliotheque lodash
const _ = require('lodash');
// On crée un tableau d'objets students
const students = [
  { name: "John", class: "Math", grade: 90 },
  { name: "Alice", class: "Physics", grade: 85 },
  { name: "Bob", class: "Math", grade: 75 },
  { name: "Eve", class: "Physics", grade: 95 },
];
// On utilise la méthode groupBy de Lodash pour grouper les étudiants par classe
const groupedStudents = _.groupBy(students, 'class');
// On affiche le résultat dans la console
console.log(groupedStudents);
