/* 
On va cree un systeme de log avec fs

Etape 1 - on va verifier s'il y a un dossier LOG
Si le LOG n'existe pas, on va le creer

Etape 2 - On va verifier si dans le dossier LOG il y a un fichier log.txt
 on va le creer si il n'existe pas

Etape 3 - On va ecrire dans le fichier log.txt
dans le fichier log.txt on va ajouter 
    Le nom de l'utilisateur
    La date et l'heure de l'ajout
    Son type d'os
    Le nom de la machine

Etape 4 - On va afficher le contenu du fichier log.txt dans la console
*/

// On appelle la bibliothèque fs
const fs = require('fs');
// On appelle la bibliothèque path
const path = require('path');
// On appelle la bibliothèque os
const os = require('os');


// On définit le chemin du dossier LOG
const logDir = path.join(__dirname, 'LOG');
// On définit le chemin du fichier log.txt
const logFilePath = path.join(logDir, 'log.txt');
// On définit le nom de l'utilisateur
const userName = os.userInfo().username;
// On définit le type d'OS
const osType = os.type();

//On verifie si le dossier LOG existe dans le cas contraire on va le creer
function createLogDirectory() {
  if (!fs.existsSync(logDir)) {
    // Vérifie si le dossier n'existe pas
    fs.mkdirSync(logDir, { recursive: true });
    // Crée le dossier et ses sous-dossiers si nécessaire
    console.log(`Dossier LOG créé :\n\t ${logDir}\n`);
  } else {
    // Si le dossier existe déjà, affiche un message
    console.log(`Le dossier LOG existe déjà :\n\t ${logDir}\n`);
  }
}
//On verifie si le fichier log.txt existe dans le cas contraire on va le creer
function createLogFile() {
  if (!fs.existsSync(logFilePath)) {
    // Vérifie si le fichier n'existe pas
    fs.writeFileSync(logFilePath, '', { encoding: 'utf8', flag: 'w' });
    // Crée le fichier log.txt
    console.log(`Fichier log.txt créé :\n\t ${logFilePath}\n`);
  } else {
    // Si le fichier existe déjà, affiche un message
    console.log(`Le fichier log.txt existe déjà :\n\t ${logFilePath}\n`);
  }
}
//On va ecrire dans le fichier log.txt
function writeLog() {
  // On définit la date et l'heure de l'ajout
  const date = new Date();
  const formattedDate = date.toLocaleString('fr-FR', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
  // On définit le nom de la machine
  const machineName = os.hostname();
  // On définit le contenu à écrire dans le fichier log.txt
  const logContent = `Nom de l'utilisateur : ${userName}\nDate et heure : ${formattedDate}\nType d'OS : ${osType}\nNom de la machine : ${machineName}\n\n`;
  // On écrit dans le fichier log.txt
  fs.appendFileSync(logFilePath, logContent, { encoding: 'utf8', flag: 'a' });
  console.log('Log ajouté avec succès !\n');
}
//On va afficher le contenu du fichier log.txt dans la console
function readLogFile() {
  // On lit le contenu du fichier log.txt
  const logContent = fs.readFileSync(logFilePath, { encoding: 'utf8' });
  // On affiche le contenu du fichier log.txt dans la console
  console.log('Contenu du fichier log.txt :\n\n', logContent);
  console.log('Fin du contenu du fichier log.txt.\n');
}
// On appelle les fonctions
createLogDirectory();
createLogFile();
writeLog();
readLogFile();
// On va ajouter une ligne pour séparer les logs
const separator = '\n----------------------------------------\n';
fs.appendFileSync(logFilePath, separator, { encoding: 'utf8', flag: 'a' });
