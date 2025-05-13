
//fonctions addition et soustraction
// On peut aussi utiliser le module 'exports' pour exporter les fonctions
function addition(a,b){
    return a+b;
}
//soustraction
function soustraction(a,b){
    return a-b;
}
//multiplication
function multiplication(a,b){
    return a*b;
}
//division
function division(a,b){
    if(b === 0){
        return "Erreur : Division par zéro";
    }
    return a/b;
}


//export des functoions
module.exports = {
    addition,
    soustraction
};
// On peut aussi utiliser le module 'exports' pour exporter les fonctions
// exports.addition = addition;
// exports.soustraction = soustraction;