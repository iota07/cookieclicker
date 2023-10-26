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
  let nouveau = 5*multiMultiplier;
  

  // FONCTION COCHON
  const svgElement = document.querySelector(".zoomable-svg");

  svgElement.addEventListener("click", function () {
    svgElement.classList.add("accelerate");
    setTimeout(() => {
      svgElement.classList.remove("accelerate");
    }, 50); // Réglez la durée du clic en millisecondes
  });

  //FONCTION COOKIECLIC
  cookieclic.addEventListener("click", () => {
    points += i;
    pointsnobonus.textContent = points;
    let moneyValue = parseInt(pointsmoney.textContent);
    moneyValue++;
  
    if (multiMultiplier !== 1) {
      moneyValue = moneyValue + nouveau;
      pointsmoney.textContent = moneyValue;
    } else {
      pointsmoney.textContent = moneyValue;
    }
  
    checkMulti();
  });
  
  //cookieclic.addEventListener("click", () => {
    //points += i;
    //pointsnobonus.textContent = points;
    //let moneyValue = parseInt(pointsmoney.textContent);
    //moneyValue++;

    /*
    if (multiMultiplier !== 1){
      pointsmoney.textContent = moneyValue+nouveau;
    } else {      
      pointsmoney.textContent = moneyValue;
    }    
    */
    //checkMulti();    
  //});


  // bouton multi //
function multiOff(){
  multi.disabled = true;
}

function multiOn(){
  multi.disabled = false;
}

function augCoutMulti(){
  multiMultiplier ++;
}


function checkMulti(){ 
  let moneyValue = parseInt(pointsmoney.textContent);
  if (moneyValue >= (coutmulti*multiMultiplier)){
    multiOn();
  }
}


   


multi.addEventListener('click', function(){
  let moneyValue = parseInt(pointsmoney.textContent);
  pointsmoney.textContent = moneyValue - (coutmulti*multiMultiplier);
  
  augCoutMulti();
  multiOff();
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



