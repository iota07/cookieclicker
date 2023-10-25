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