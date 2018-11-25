let Depense = {
  prix: 0,
  payeurs : []
}


let sci = function() {
    let nbPartTotal = 0;

    getNbPartTotal = function () {
      console.log("Le nombre de part dans la SCI est de "+nbPartTotal);
      return nbPartTotal;
    }

    return {
      getNbPartTotal : getNbPartTotal
    }

}

let Associe = function (){
  let nom = "";
  let nbPart = 0;

  var acheter = function () {

  }

  return {
    acheter : acheter
  }
}





//Une part c'est un peu comme une action. Tu les achêtes à un prix et tout peut prendre de la valeur
//Pour vendre des parts il faut convenir dans les status de la procédure (A l'hunamité ou non)
let Part = {
  valeurNominal : 1,
  valeurReel : 1
}

let main = function () {

  let SCI_LFQCEG = sci();
  SCI_LFQCEG.getNbPartTotal();

  let Leo = Associe();
  let Fio = Associe();
  let Guillaume = Associe();

}()
