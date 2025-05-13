//On va créé dans ce fichier deux fonctions.
    // addnote(text) : pour ajouter n'importe quel valeur quand on l'appelera dans le script app.js
    // readnotes() : qui lira le fichier quand elle sera appeler dans app.js
// => Ces deux fonctions seront utilisées pour ajouter et lire des notes dans le fichier `notes.txt`.

//On appelle la bibliothèque fs
const fs = require('fs');
// => Cette ligne importe le module `fs` (File System) de Node.js, qui permet de manipuler des fichiers et des répertoires.
//On appelle la bibliothèque path
const path = require('path');
// => Cette ligne importe le module `path` de Node.js, qui permet de travailler avec les chemins de fichiers et de répertoires.
//On définit le chemin du fichier notes.txt
const filePath = path.join(__dirname, 'notes.txt');
// => Cette ligne utilise `path.join` pour construire un chemin absolu vers un fichier nommé `notes.txt` dans le même répertoire que le script (`__dirname`).
//On définit les options pour l'écriture du fichier
const options = { encoding: 'utf8', flag: 'a' };
// => Cette ligne définit un objet d'options pour l'écriture du fichier :
//    - `encoding: 'utf8'` spécifie que le fichier sera encodé en UTF-8.
//    - `flag: 'a'` indique que le fichier sera ouvert en mode ajout (et créé s'il n'existe pas).
//On définit une fonction pour ajouter une note
function addNote(text) {
  fs.appendFile(filePath, text + '\n', options, (err) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de la note :', err);
    } else {
      console.log('Note ajoutée avec succès !');
    }
  });
}
// => Cette ligne utilise `fs.appendFile` pour ajouter une nouvelle note au fichier `notes.txt`.
//    - `text + '\n'` ajoute le texte de la note suivi d'un saut de ligne.
//    - `options` spécifie les options d'écriture.
//    - La fonction de rappel gère les erreurs potentielles lors de l'écriture dans le fichier.
//On définit une fonction pour lire le contenu du fichier
function readNotes() {
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier :', err);
    } else {
      console.log('Contenu du fichier :\n', data);
    }
  });
}
// => Cette ligne utilise `fs.readFile` pour lire le contenu du fichier `notes.txt`.
//    - `{ encoding: 'utf8' }` spécifie que le fichier sera lu en UTF-8.
//    - La fonction de rappel gère les erreurs potentielles lors de la lecture du fichier.
//On exporte les fonctions pour les utiliser dans d'autres fichiers
module.exports = {
  addNote,
  readNotes
};
// => Cette ligne exporte les fonctions `addNote` et `readNotes` pour qu'elles puissent être utilisées dans d'autres fichiers.
// => Cela permet de séparer la logique de gestion des notes dans un module distinct, facilitant ainsi la réutilisation et la maintenance du code.
// => En résumé, ce code permet de créer un fichier texte `notes.txt`, d'y ajouter des notes et de lire le contenu du fichier.
// => Il utilise les modules `fs` et `path` de Node.js pour gérer les fichiers et les chemins de manière efficace.
// => Les fonctions `addNote` et `readNotes` sont exportées pour être utilisées dans d'autres fichiers, ce qui permet de garder le code organisé et modulaire.
// => En utilisant ce code, vous pouvez facilement ajouter des notes à un fichier texte et lire son contenu, ce qui est utile pour la gestion de notes ou de journaux dans une application Node.js.
// => Vous pouvez appeler ces fonctions dans un autre fichier JavaScript (par exemple, `app.js`) pour ajouter des notes et afficher le contenu du fichier.
// => Par exemple, dans `app.js`, vous pouvez faire quelque chose comme ceci :

// => Cela ajoutera une nouvelle note au fichier `notes.txt` et affichera le contenu du fichier dans la console.
// => Vous pouvez également personnaliser le texte des notes en fonction de vos besoins.