// Récupérez les éléments du bouton Multi, le score de clic et l'image du cookie
const boutonMulti = document.getElementById("boutonmulti");
const scoreClickbonus = document.getElementById("scoreclickbonus");
const imageCookie = document.querySelector(".cookie img");
const scoreClick = document.getElementById("scoreclick");

// Définissez le coût initial du bonus et l'état du bonus
let bonusCost = 7;
let bonusMultiplier = 1;
let score = 0;
let scoreBonus = 0;

document.getElementById('cookieClick').addEventListener('click', function() {

    score += 1;
    scoreBonus += 1;

    document.getElementById('scoreclick').innerText = score;
    document.getElementById('scoreclickbonus').innerText = scoreBonus;
    updateMultiButton();
});


// Fonction pour mettre à jour le bouton Multi en fonction du score
function updateMultiButton() {
    if (score >= 10) {
        boutonMulti.style.display = "block";
    } else {
        boutonMulti.style.display = "none";
    }
}

// Gérez l'achat du bonus Multi
boutonMulti.addEventListener("click", function () {
    if (parseInt(scoreClick.textContent) >= bonusCost) {
        scoreClickbonus.textContent = parseInt(scoreClick.textContent) - bonusCost; // Déduction du score
        bonusMultiplier *= 5; // Augmentation du multiplicateur
        bonusCost += 7; // Augmentation du coût du bonus

        // Mettez à jour le texte du bouton
        boutonMulti.textContent = `Multiplier (Coût : ${bonusCost})`;

        // Mettez à jour le texte du score bonus
        scoreClickbonus.textContent = `Score Click Bonus: ${bonusMultiplier - 1}`;

        updateMultiButton();
    }
});



// Mettez à jour le bouton Multi au chargement de la page
updateMultiButton();