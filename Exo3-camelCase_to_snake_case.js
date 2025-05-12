/*
Exercices 3 : CamelCase to snake_case
Transformer les clés d'un object de camelCase en snake_case
Objectif?
A partir de l'objet suivant, 

const product = {
  productId: 1,
  productName: 'Laptop',
  productPrice: 1500,
  inStock: true
};

Exercice:

Transformez toutes les clés en snake_case avec lodash. Vous devriez obtenir le résultat suivant :
{
  product_id: 1,
  product_name: 'Laptop',
  product_price: 1500,
  in_stock: true
}
Utilisez la méthode `_.mapKeys` de Lodash pour transformer les clés de l'objet `product` de camelCase en snake_case.
- Utilisez la méthode `_.snakeCase` de Lodash pour transformer les clés de l'objet `product` de camelCase en snake_case.
- Affichez le nouvel objet dans la console.
- Exemple de sortie :
{
  product_id: 1,
  product_name: 'Laptop',
  product_price: 1500,
  in_stock: true
}
*/

//On appel la bibliotheque lodash
const _ = require('lodash');
//On crée un objet product
const product = {
  productId: 1,
  productName: 'Laptop',
  productPrice: 1500,
  inStock: true
};
//On crée un nouvel objet en transformant les clés de camelCase en snake_case
//_.mapKeys : Cette méthode de Lodash permet de créer un nouvel objet en transformant les clés d'un objet existant.
//_.snakeCase : transforme chaque clé de camelCase en snake_case
const newProduct = _.mapKeys(product, (value, key) => _.snakeCase(key));
console.log(newProduct);

