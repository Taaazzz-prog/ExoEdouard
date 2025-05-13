// Cree un fichier notes.txt et y écrire une note puis en ajouter une autre note.

/*
Consignes :
1 cree un fichier app.js
2 Ecrire dans un fichier notes.txt la phrase, je mange des chats avec ma voisine
    2 - 1) Si le fichier n'existe pas, il faut le créer
    2 - 2) Si le fichier existe, il faut ajouter la phrase à la suite du contenu existant
3 Ajoute une ligne : Merde tes un gros malade toi
4 Afficher le contenu du fichier dans la console.log
*/

// On appelle la bibliothèque fs
const fs = require('fs');
// On appelle la bibliothèque path
const path = require('path');

// On définit le chemin du fichier notes.txt
const filePath = path.join(__dirname, 'notes.txt');

// Vérification si le fichier existe
if (!fs.existsSync(filePath)) {
  // Si le fichier n'existe pas, on le crée avec un contenu initial
  fs.writeFileSync(filePath, '', { encoding: 'utf8', flag: 'w' });
  console.log('Fichier créé car il n\'existait pas.');
}

// Lecture du contenu existant du fichier
let existingContent = fs.readFileSync(filePath, { encoding: 'utf8' });

// Étape 1 : Écrire ou ajouter une première note
const initialText = 'je mange des chats avec ma voisine\n';
if (existingContent.trim() === '') {
  // Si le fichier est vide, on écrit la première note
  fs.writeFileSync(filePath, initialText, { encoding: 'utf8', flag: 'w' });
  console.log('Première note écrite dans le fichier.');
} else {
  // Si le fichier contient déjà du contenu, on ajoute la note à la suite
  fs.appendFileSync(filePath, initialText, { encoding: 'utf8', flag: 'a' });
  console.log('Première note ajoutée à la suite du fichier.');
}

// Étape 2 : Ajouter une autre note au fichier
const additionalText = 'Merde tes un gros malade toi\n';
fs.appendFileSync(filePath, additionalText, { encoding: 'utf8', flag: 'a' });
console.log('Deuxième note ajoutée au fichier.');

// Étape 3 : Lire et afficher le contenu du fichier avec une tabulation
const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
const tabulatedContent = fileContent
  .split('\n') // Divise le contenu en lignes
  .map(line => `\t${line}`) // Ajoute une tabulation au début de chaque ligne
  .join('\n'); // Recombine les lignes avec des sauts de ligne
console.log('Contenu du fichier :\n', tabulatedContent);

