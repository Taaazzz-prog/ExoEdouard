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


// Fonction pour lire le contenu du fichier
function readFileSync(filePath) {
    try {
      if (fs.existsSync(filePath)) {
        // Vérifie si le fichier existe avant de le lire
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });
        console.log('Contenu du fichier :\n', data);
      } else {
        console.error('Le fichier n\'existe pas :', filePath);
      }
    } catch (err) {
      console.error('Erreur lors de la lecture du fichier :', err);
    }
  }
  
  // Appel de la fonction pour lire le fichier
  readFileSync(filePath);