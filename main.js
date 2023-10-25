const boutonMulti = document.getElementById("boutonmulti");
        const scoreClickbonus = document.getElementById("scoreclickbonus");
        const imageCookie = document.querySelector(".cookie img");
        const scoreClick = document.getElementById("scoreclick");

        let bonusCost = 7;
        let bonusMultiplier = 1;
        let score = 0;
        let scoreBonus = 0;

        document.getElementById('cookieClick').addEventListener('click', function() {
            score += 1;
            scoreBonus += bonusMultiplier; // Mise à jour du score bonus

            document.getElementById('scoreclick').innerText = score;
            document.getElementById('scoreclickbonus').innerText = scoreBonus;
            updateMultiButton();
        });

        function updateMultiButton() {
            if (score >= bonusCost) {
                boutonMulti.style.display = "block";
            } else if (score >= 20) {
                boutonMulti.style.display = "block";
            } else {
                boutonMulti.style.display = "none";
            }
        }

        boutonMulti.addEventListener("click", function () {
            if (parseInt(scoreClick.textContent) >= bonusCost) {
                scoreClick.textContent = parseInt(scoreClick.textContent) - bonusCost; // Déduction du score
                bonusMultiplier *= 2; // Doublement du multiplicateur
                bonusCost *= 2; // Doublement du coût du bonus

                //boutonMulti.textContent = `Acheter le bonus Multi (${bonusCost})`;
                scoreClickbonus.textContent = bonusMultiplier - 1;

                updateMultiButton();
            }
        });

        updateMultiButton();
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

  initializeGame();
});
