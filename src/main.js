// import "./scss/styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  // NOS DECLARATIONS

  let i = 1;
  let points = 0;
  let autoClickEnabled = false;
  let autoClickInterval;
  let bonusCost = 7;
  let bonusMultiplier = 1;
  

  const pointsElement = document.getElementById("scoreclickbonus");
  const startButton = document.getElementById("boutonautoclick");
  const cookieclic = document.getElementById("cookie1");
  const pointsnobonus = document.getElementById("scoreclick");
  const pointsmoney = document.getElementById("scoremoney");
  const multi = document.getElementById("boutonmulti");
  let coutmulti = 10;
  let multiMultiplier = 1;
  let nouveau = 5;
  

  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");

  const svgElement = document.querySelector(".zoomable-svg");
  const clicSound = document.getElementById("clicSound");
  const clicSound2 = document.getElementById("clicSound2");

  // Affichez le cookie banner

  acceptButton.addEventListener("click", () => {
    // Masquez le cookie banner lors du clic
    cookieBanner.style.display = "none";
  });

  // FONCTION COCHON

  svgElement.addEventListener("click", function () {
    svgElement.classList.add("accelerate");
    clicSound.play();
    setTimeout(() => {
      svgElement.classList.remove("accelerate");
    }, 50); // Réglez la durée du clic en millisecondes
  });

  //FONCTION COOKIECLIC

  cookieclic.addEventListener("click", function() {
    points += i;
    pointsnobonus.textContent = points;
    let moneyValue = parseInt(pointsmoney.textContent);
    moneyValue++; 
    if (multiMultiplier !== 1) {
      moneyValue = moneyValue + nouveau -6;
      pointsmoney.textContent = moneyValue;
      
    } else {
      pointsmoney.textContent = moneyValue;
    }   
   
    checkMulti();    
  });
 


  // bouton multi //

  /*étendre le bouton multi*/
function multiOff(){
  multi.disabled = true;
}

/*allumé le bouton multi*/
function multiOn(){
  multi.disabled = false;
}

/*ajoute 1 au multiplicateur = nombre de fois qu'on a utilisé le bouton multi*/
function augCoutMulti(){
  multiMultiplier ++;
  if (multiMultiplier > 1){
    nouveau +=5;
  };
}
function coutBouton () {
  let x = coutmulti*multiMultiplier;
  return x;
}



// Appelez cette fonction pour mettre à jour le texte du bouton lorsque nécessaire
function augCoutMulti(){
  multiMultiplier++;
  nouveau += 5;
  updateButtonText(); // Met à jour le texte du bouton
}


/*Vérifie si on a assez d'argent pour acheter un bouton multi, si oui le bouton est allumé, si non il est éteint */
function checkMulti(){ 
  let moneyValue = parseInt(pointsmoney.textContent);
  if (moneyValue >= (coutmulti*multiMultiplier)){
    multiOn();
  } else {
    multiOff();
  }

}
function updateButtonText() {
  let x = coutmulti*multiMultiplier;
  const buttonText = `Cost : ${(x)}`;
  const bonusText = `+5 x : ${multiMultiplier-1}`;
  multi.innerHTML = `<div>${buttonText}</div><div>${bonusText}</div>`;
  return x;
}

// Déclarer une variable globale pour stocker le texte initial du bouton
let initialButtonText = multi.innerHTML;

// Gérer le clic sur le bouton multi
multi.addEventListener('click', function() {
  let moneyValue = parseInt(pointsmoney.textContent);
  pointsmoney.textContent = moneyValue - (coutmulti * multiMultiplier);

  updateButtonText();
  augCoutMulti();
  checkMulti();

  // Déclencher un délai de 4 secondes pour réinitialiser le texte du bouton
  setTimeout(function() {
    multi.innerHTML = initialButtonText;
  }, 4000); // Réinitialisation après 4 secondes
});

// ...


  //FONCTION AUTOCLICK

  startButton.addEventListener("click", () => {
    clicSound2.play();
    if (!autoClickEnabled && points >= 50) {
      subtractPoints(50);
      startAutoClick();
      autoClickEnabled = true;
      startButton.style.display = "none";
    }
  });

  function autoClick() {
    clicSound2.play();
    addPoints(+1);
    checkMulti();
  }

  function startAutoClick() {
    // TEMPS DU CLICK
    autoClickInterval = setInterval(autoClick, 500);
  }

  /**
   * @description rajouter des points dans html
   * @param {number} value
   */

  function addPoints() {
    let moneyValue = parseInt(pointsmoney.textContent);
    moneyValue++;
    pointsmoney.textContent = moneyValue;
  }

  function subtractPoints(value) {
    pointsmoney.textContent -= value;
  }
  
  // Appelez cette fonction au chargement de la page pour initialiser le score.
  function initializeGame() {
    points = 0;
    pointsElement.textContent = 0;
    pointsmoney.textContent = 0;
  }

  window.onload = multiOff();

  initializeGame();
});


//FENETRE POP UP

  // Fonction pour ouvrir la fenêtre modale au chargement de la page
  function openModalOnLoad() {
    document.getElementById("modalOverlay").style.display = "block";
    document.getElementById("myModal").style.display = "block";
  }

  // Appeler la fonction pour ouvrir la fenêtre modale au chargement de la page
  window.addEventListener("DOMContentLoaded", openModalOnLoad);

  // Fermer la fenêtre modale lorsque le bouton "Fermer" est cliqué
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("myModal").style.display = "none";
  });




