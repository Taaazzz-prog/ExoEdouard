//cree une fonction qui va mettre la premiere lettre en majuscule 

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}


//Deuxieme fonction qui va inverser le texte
function reverseText(text) {
    return text.split('').reverse().join('');
}

//On exporte les deux fonctions
module.exports = {
    capitalizeFirstLetter,
    reverseText
};