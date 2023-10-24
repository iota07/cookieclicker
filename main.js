document.addEventListener("DOMContentLoaded", function () {
  let i = 1;
  let points = i;
  let autoClickEnabled = false;
  let autoClickInterval;

  const pointsElement = document.getElementById("scoreclickbonus");
  const startButton = document.getElementById("boutonautoclick");
  const cookieclic = document.getElementById("cookie1");
  const pointsnobonus = document.getElementById("scoreclick");

  cookieclic.addEventListener("click", () => {
    points += i;
    pointsnobonus.textContent = points;
  });

  startButton.addEventListener("click", () => {
    if (!autoClickEnabled && points >= 50) {
      subtractPoints(50);
      startAutoClick();
      autoClickEnabled = true;
      startButton.style.display = "none";
    }
  });

  function addPoints(value) {
    points += value;
    pointsElement.textContent = points;
  }

  function subtractPoints(value) {
    addPoints(-value);
  }

  function autoClick() {
    addPoints(+1);
  }

  function startAutoClick() {
    // TEMPS DU CLICK
    autoClickInterval = setInterval(autoClick, 500);
  }

  // Appelez cette fonction au chargement de la page pour initialiser le score.
  function initializeGame() {
    // A MODIFIER J AI MIS CA POUR TEST LE JEUX COMMENCE AVEC 3000 POINTS
    points = 0;
    pointsElement.textContent = points;
  }

  initializeGame();
});
