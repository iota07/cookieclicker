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
  const coutmulti = 10;
  let multiMultiplier = 1;
  let nouveau = 5;
  

  // FONCTION COCHON
  const svgElement = document.querySelector(".zoomable-svg");

  svgElement.addEventListener("click", function () {
    svgElement.classList.add("accelerate");
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

/*Vérifie si on a assez d'argent pour acheter un bouton multi, si oui le bouton est allumé, si non il est éteint */
function checkMulti(){ 
  let moneyValue = parseInt(pointsmoney.textContent);
  if (moneyValue >= (coutmulti*multiMultiplier)){
    multiOn();
  } else {
    multiOff();
  }

}

/*Après avoir appuyer sur le bouton multi, transform la valeur de cash en nombre, 
ensuite soustrait à cash le coût du bouton multi X le nombre de fois utilisé.
Augmente le nombre de fois utilisé +1
vérifie si on a toujours assez d'argent comparé au nouveau coût du bouton multi*/

multi.addEventListener('click', function(){
  let moneyValue = parseInt(pointsmoney.textContent);
  pointsmoney.textContent = moneyValue - (coutmulti*multiMultiplier);
  
  augCoutMulti();
  checkMulti();
})

  //FONCTION AUTOCLICK

  startButton.addEventListener("click", () => {
    if (!autoClickEnabled && points >= 50) {
      subtractPoints(50);
      startAutoClick();
      autoClickEnabled = true;
      startButton.style.display = "none";
    }
  });

  function autoClick() {
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



