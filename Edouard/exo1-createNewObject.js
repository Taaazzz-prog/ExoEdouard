/*
Etapes :
1) installer lodash
2) importer et l'utiliser
Exercices 1
Selectionner des propriétés spécifiques
Objectif?
A partir de l'objet suivant, créer un nouvel objet qui ne contiendra que les propriétés suivantes : id, name, email

const user = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'secret'
};

const { id, name, email } = user;
const newUser = { id, name, email };
console.log(newUser);
*/

/*
La ligne suivante utilise la méthode `_.pick` de la bibliothèque Lodash :

```javascript
const newUser = _.pick(user, ['id', 'name', 'email']);
```

### Explication :
1. _.pick : Cette méthode de Lodash permet de créer un nouvel objet en sélectionnant uniquement les propriétés spécifiées d'un objet existant.
2. `user` : C'est l'objet source dont on veut extraire certaines propriétés.
3. `['id', 'name', 'email']` : C'est un tableau contenant les noms des propriétés que l'on souhaite inclure dans le nouvel objet.

Résultat :
- Un nouvel objet `newUser` est créé, contenant uniquement les propriétés `id`, `name` et `email` de l'objet `user`.
- Les autres propriétés (comme `password`) sont ignorées.

Exemple de sortie :
Si `user` est :
{
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'secret'
}

Alors `newUser` sera :
{
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com'
}
*/


//On appel la bibliotheque lodash
const _ = require('lodash');
//On cree un objet user
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'secret'
};
//On utilise la fonction pick de lodash pour selectionner les proprietes
const newUser = _.pick(user, ['id', 'name', 'email']);
console.log(newUser);

