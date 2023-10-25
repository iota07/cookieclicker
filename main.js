document.addEventListener("DOMContentLoaded", function () {
  // NOS DECLARATIONS

  let i = 1;
  let points = 0;
  let autoClickEnabled = false;
  let autoClickInterval;

  const pointsElement = document.getElementById("scoreclickbonus");
  const startButton = document.getElementById("boutonautoclick");
  const cookieclic = document.getElementById("cookie1");
  const pointsnobonus = document.getElementById("scoreclick");
  const pointsmoney = document.getElementById("scoremoney");

  //FONCTION COOKIECLIC

  cookieclic.addEventListener("click", () => {
    points += i;
    pointsnobonus.textContent = points;
    pointsmoney.textContent = points;
  });

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

  /**
   * @description rajouter des points dans html
   * @param {number} value
   */

  function addPoints(value) {
    points += value;
    pointsElement.textContent = points;
    pointsmoney.textContent = points;
  }

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

  initializeGame();
});
