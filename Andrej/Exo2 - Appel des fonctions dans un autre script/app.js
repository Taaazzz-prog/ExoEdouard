
//On appelle les fonctions dans le fichier notes.js


const notes = require('./notes');

// On appelle la fonction addNote pour ajouter une note
const noteToAdd = ''; // Exemple de note

// On vérifie si la note est vide
if (noteToAdd.trim() === '') {
  console.log('Erreur : la note est vide et ne peut pas être ajoutée.');
} else {
  try {
    notes.addNote(noteToAdd);
    console.log('Note ajoutée avec succès !');
  } catch (err) {
    console.log('Erreur lors de l\'ajout de la note :', err);
  }
}

// On appelle la fonction readNotes pour lire le contenu du fichier
notes.readNotes();
// => Cette ligne appelle la fonction `readNotes` du module `notes` pour lire le contenu du fichier `notes.txt`.
// => Cela affichera le contenu du fichier dans la console, y compris la note que nous venons d'ajouter.


