//On va utilisez la function fss.writeFile pour créer un fichier texte
// => Cette ligne est un commentaire qui explique l'objectif du script : utiliser la fonction `fs.writeFile` pour créer un fichier texte.

//On appelle la bibliotheque fs
const fs = require('fs');
// => Cette ligne importe le module `fs` (File System) de Node.js, qui permet de manipuler des fichiers et des répertoires.

//On appelle la bibliotheque path
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

// Vérification et création du fichier si nécessaire avant l'édition
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '', options); // Crée un fichier vide si `output.txt` n'existe pas
  console.log('Fichier créé car il n\'existait pas.');
}

// Fonction pour éditer le fichier et ajouter des informations
function editFile(filePath, newText) {
  const appendOptions = { encoding: 'utf8', flag: 'a' }; // Mode ajout
  try {
    fs.appendFileSync(filePath, newText, appendOptions); // Utilisation de `appendFileSync` pour éviter les erreurs asynchrones
    console.log('Texte ajouté avec succès !');
  } catch (err) {
    console.error('Erreur lors de l\'ajout de texte au fichier :', err);
  }
}

// Appel de la fonction pour ajouter du texte
const additionalText = '\n Et voilà, j\'ai ajouté du texte à mon fichier !';
const additionalText2 = '\n Et voilà, j\'ai mit une ligne en plus pour voir !';
editFile(filePath, additionalText);
editFile(filePath, additionalText2);
