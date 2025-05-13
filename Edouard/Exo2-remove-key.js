/*
Exercice 2: Remove a key from an object
- Utilisez la méthode `_.omit` de Lodash pour créer un nouvel objet à partir de l'objet `user`, en omettant la clé `password`.

https://lodash.com/docs/4.17.15#omit

- Affichez le nouvel objet dans la console.
- Exemple de sortie :
  ```javascript
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
  */
  
//On appel la bibliotheque lodash
const _ = require('lodash');

//On crée un objet user
const user = {
  id: 1,
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  password: 'secret'
};

//On crée un nouvel objet en omettant la clé 'password'
const newUser = _.omit(user, ['password', 'email']);
console.log(newUser);