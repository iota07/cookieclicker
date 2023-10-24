document.addEventListener("DOMContentLoaded", function () {
  // a changer j'ai mis 3000 mais sava être 0
  let points = 3000;
  let autoClickEnabled = false;
  let autoClickInterval;

  const pointsElement = document.getElementById("scoreclickbonus");
  const startButton = document.getElementById("boutonautoclick");

  startButton.addEventListener("click", () => {
    if (!autoClickEnabled && points >= 3000) {
      subtractPoints(3000);
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
    points = 3000;
    pointsElement.textContent = points;
  }

  initializeGame();
});
