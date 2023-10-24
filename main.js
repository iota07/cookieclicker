
let score = 0;
let scoreBonus = 0;

document.getElementById('cookieClick').addEventListener('click', function() {

    score += 1;
    scoreBonus += 1;

    document.getElementById('scoreclick').innerText = score;
    document.getElementById('scoreclickbonus').innerText = scoreBonus;
});

