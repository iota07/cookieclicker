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
  const boutonMulti = document.getElementById("boutonmulti");


  //FONCTION COOKIECLIC

  cookieclic.addEventListener("click", () => {
    points += i;
    pointsnobonus.textContent = points;
    pointsmoney.textContent = points;
  });

  //FONCTION MULTI

  function updateMultiButton() {
    if (points >= 7) {
        boutonMulti.style.display = "block";
    } else {
        boutonMulti.style.display = "none";
    }
}


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
  }

  function startAutoClick() {
    // TEMPS DU CLICK
    autoClickInterval = setInterval(autoClick, 500);
  }

  //FONCTION RAJOUTER DES POINTS

  function addPoints(value) {
    points += value;
    pointsElement.textContent = points;
    pointsmoney.textContent = points;
  }

  //FONCTION ENLEVER DES POINTS   //SCORE MONEY

  function subtractPoints(value) {
    points -= value;
    pointsmoney.textContent = points;
  }
  
  // Appelez cette fonction au chargement de la page pour initialiser le score.
  function initializeGame() {
    points = 0;
    pointsElement.textContent = points;
    pointsmoney.textContent = points;
  }
  
  updateMultiButton();
  initializeGame();
});
