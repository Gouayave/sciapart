
var body = d3.select("body");
let afficher = function (text) {
  body.append("p").text(text)
}

//Une part c'est un peu comme une action. Tu les achêtes à un prix et tout peut prendre de la valeur
//Pour vendre des parts il faut convenir dans les status de la procédure (A l'hunamité ou non)
let Part = {
  valeurNominal : 1, //En euros
  valeurReel : 1 //En euros
}

let Associe = function (nom,apportNumInitial = 0,sci){

  let nbPart = apportNumInitial;

  let getNom = function () {
    return nom;
  }

  let getApportInitial = function () {
    return apportNumInitial;
  }

  let getNbPart = function () {
    return nbPart;
  }

  let effectuerUnApport = function (valeurDeLapport) {
    nbPart += valeurDeLapport;
    afficher(nom + " fait un apport de "+ valeurDeLapport + " € ", " son nombre de part est maintenant de "+nbPart);
    sci.update();
  }

  return {
    getNom,
    getApportInitial,
    getNbPart,
    effectuerUnApport
  }
}


let sci = function() {
    let nbPartTotal = 0;
    let associes = [];

    let getNbPartTotal = function () {
      afficher("Il y a " + nbPartTotal + " parts dans la sci.");
      return nbPartTotal;
    }

    let getValeurReelTotal = function () {
      afficher("Il y a " + nbPartTotal + " parts dans la sci, pour une valeur estimé de "+(nbPartTotal * Part.valeurReel)+ " €");
      return nbPartTotal * Part.prixPartReel;
    }


    let ajouterAssocie = function (associe) {
      associes.push(associe);
      afficher(associe.getNom() + " a été ajouté à la SCI, avec un apport initial de " + associe.getApportInitial() + "€");
      update()
    }

    let update = function (){
      const reducer = (accumulator, currentValue) => accumulator + currentValue.getNbPart();
      nbPartTotal = associes.reduce(reducer,0);
    }

    return {
      getNbPartTotal,
      getValeurReelTotal,
      ajouterAssocie,
      update
    }

}




let main = function () {

  let SCI_LFQCEG = sci();
  SCI_LFQCEG.getNbPartTotal();


  let Leo = Associe("Léo",17500,SCI_LFQCEG);
  SCI_LFQCEG.ajouterAssocie(Leo);

  let Fio = Associe("Fio",17500,SCI_LFQCEG);
  SCI_LFQCEG.ajouterAssocie(Fio);

  let Guillaume = Associe("Guillaume",17500,SCI_LFQCEG);
  SCI_LFQCEG.ajouterAssocie(Guillaume);

  Guillaume.effectuerUnApport(40);
  Fio.effectuerUnApport(500);

  SCI_LFQCEG.getValeurReelTotal();


}()
