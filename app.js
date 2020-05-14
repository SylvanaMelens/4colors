// import des données susceptibles de changer
import { enonces, couleurBrique, lockeeSrc } from "./data.js";

// Récupérer tous les éléments qui ont la classe brique pour leur ajouter la classe couleur définie dans l'array couleurBrique, dont le contenu
let brique = document.getElementsByClassName("brique");
// Donner à chaque brique la classe couleur définie dans les data
for (let i = 0; i < couleurBrique.length; i++) {
  brique[i].classList.add(couleurBrique[i]);
}

// Récupérer les briques par nom de couleur
let rouge = document.getElementsByClassName("rouge");
let orange = document.getElementsByClassName("orange");
let jaune = document.getElementsByClassName("jaune");
let vert = document.getElementsByClassName("vert");
let bleu = document.getElementsByClassName("bleu");
let violet = document.getElementsByClassName("violet");
let marron = document.getElementsByClassName("marron");
let gris = document.getElementsByClassName("gris");
let noir = document.getElementsByClassName("noir");

// Définir les couleurs conformément aux couleurs du cadenas
let rouge1 = "#d32f2f";
let orange2 = "#f57c00";
let jaune3 = "#fbc02d";
let vert4 = "#388e3c";
let bleu5 = "#1976d2";
let violet6 = "#7b1fa2";
let marron7 = "#5d4037";
let gris8 = "#616161";
let noir9 = "#000000";

// Définir une fonction d'affichage, pour chaque brique, du nom de la couleur et de la couleur en background
const afficherNomCouleur = (couleur, nomCoul, codeCoul) => {
  for (let i = 0; i < couleur.length; i++) {
    couleur[i].textContent = nomCoul;
    couleur[i].style.backgroundColor = codeCoul;
  }
};

// Exécuter la fonction d'affichage des couleurs et des noms de couleurs
afficherNomCouleur(rouge, "Rouge", rouge1);
afficherNomCouleur(orange, "Orange", orange2);
afficherNomCouleur(jaune, "Jaune", jaune3);
afficherNomCouleur(vert, "Vert", vert4);
afficherNomCouleur(bleu, "Bleu", bleu5);
afficherNomCouleur(violet, "Violet", violet6);
afficherNomCouleur(marron, "Marron", marron7);
afficherNomCouleur(gris, "Gris", gris8);
afficherNomCouleur(noir, "Noir", noir9);

// Récupérer les éléments ayant la classe explications pour y ajouter du contenu venant des data
let explications = document.getElementsByClassName("explications");

// Définir la fonction affichant des données dans le champ explications, issues des data
const afficherExplication = (explication, enonce) => {
  for (let i = 0; i < explication.length; i++) {
    explication[i].textContent = enonce[i];
  }
};

//Exécution de la fonction qui affiche les explications
afficherExplication(explications, enonces);

// Récupérer l'iframe
let iframe = document.querySelector("iframe");
// Changer le lien du cadenas issu des datas
iframe.setAttribute("src", lockeeSrc);
iframe.setAttribute("height", "500");
iframe.setAttribute("width", "350");
