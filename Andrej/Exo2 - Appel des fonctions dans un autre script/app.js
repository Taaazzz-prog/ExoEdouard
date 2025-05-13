//On va appeler les fonctions dans ce fichier
// => Cette ligne importe le module `notes` que nous avons créé précédemment.
// => Ce module contient les fonctions `addNote` et `readNotes` que nous avons définies pour gérer les notes.
// => En important ce module, nous pouvons utiliser ces fonctions dans notre script principal (`app.js`).
// => Cela nous permet de garder notre code organisé et de séparer la logique de gestion des notes dans un module distinct.
// => En utilisant `require('./notes')`, nous accédons aux fonctions exportées par le module `notes.js`.
// => Cela nous permet d'utiliser ces fonctions dans notre script principal (`app.js`) pour ajouter des notes et lire le contenu du fichier `notes.txt`.
//On va appeler les fonctions dans ce fichier


const notes = require('./notes');

//On appelle la fonction addNote pour ajouter une note
notes.addNote('On va tester si ca fonctionne bien?');
// => Cette ligne appelle la fonction `addNote` du module `notes` pour ajouter une nouvelle note au fichier `notes.txt`.
// => La note ajoutée est "On va tester si cette merde fonctionne bien?".
//On appelle la fonction readNotes pour lire le contenu du fichier
notes.readNotes();
// => Cette ligne appelle la fonction `readNotes` du module `notes` pour lire le contenu du fichier `notes.txt`.
// => Cela affichera le contenu du fichier dans la console, y compris la note que nous venons d'ajouter.




