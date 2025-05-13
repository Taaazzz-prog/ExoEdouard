//On va utiliser la fonction fs.mkdirSync pour créer un dossier
// => Cette ligne est un commentaire qui explique l'objectif du script : utiliser la fonction `fs.mkdirSync` pour créer un dossier.

//On appelle la bibliothèque fs
const fs = require('fs');
// => Cette ligne importe le module `fs` (File System) de Node.js, qui permet de manipuler des fichiers et des répertoires.

//On appelle la bibliothèque path
const path = require('path');
// => Cette ligne importe le module `path` de Node.js, qui permet de travailler avec les chemins de fichiers et de répertoires.

//On définit le chemin du fichier à créer
const filePath = path.join(__dirname, 'output.txt');
// => Cette ligne utilise `path.join` pour construire un chemin absolu vers un fichier nommé `output.txt` dans le même répertoire que le script (`__dirname`).

//On définit les options pour l'écriture du fichier
const options = { encoding: 'utf8', flag: 'w' };
// => Cette ligne définit un objet d'options pour l'écriture du fichier :
//    - `encoding: 'utf8'` spécifie que le fichier sera encodé en UTF-8.
//    - `flag: 'w'` indique que le fichier sera ouvert en mode écriture (et écrasé s'il existe déjà).

//Créer une fonction qui va créer un dossier
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    // Vérifie si le dossier n'existe pas
    fs.mkdirSync(dirPath, { recursive: true });
    // Crée le dossier et ses sous-dossiers si nécessaire
    console.log(`Dossier créé : ${dirPath}`);
  } else {
    // Si le dossier existe déjà, affiche un message
    console.log(`Le dossier existe déjà : ${dirPath}`);
  }
}

//On va créer un dossier dans le répertoire où se trouve le fichier
const directoryPath = path.join(__dirname, 'monDossierz');
// => Cette ligne utilise `path.join` pour construire un chemin absolu vers un dossier nommé `monDossierz` dans le même répertoire que le script (`__dirname`).

//On appelle la fonction pour créer le dossier
createDirectory(directoryPath);