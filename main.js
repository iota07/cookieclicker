function checkMoney(scoreMoney) {

  if (scoreMoney < 1000) {
      document.getElementById('boutonpop').style.display = 'none'; /*if money <1000 button hidden*/
  } else if (scoreMoney >= 1000 && scoreMoney % 1000 === 0) {
      document.getElementById('boutonpop').style.display = 'block'; /*if money > 1000 && every 1000 multiplier button Appear for 30sec*/
      setTimeout(function () {
          document.getElementById('boutonpop').style.display = 'none';
      }, 30000);
  } else {
      document.getElementById('boutonpop').style.display = 'none'; /*else hidden*/
  }
}



document.getElementById('boutonpop').addEventListener('click', function(){
  scoreGlobal = scoreValue*2 /*Multiply score click X2*/
