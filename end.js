const username = document.getElementById('username');
const email= document.getElementById('email');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const lifeScore = localStorage.getItem('lifeScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerHTML = mostRecentScore+finalScore.innerHTML;
localStorage.setItem('lifeScore', Number(lifeScore)+mostRecentScore);

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
	localStorage.setItem('email', email.value)
    window.location.assign('/');
};
if(Number(mostRecentScore)<=30)
	console.log('You can do better!')
if(Number(mostRecentScore)==40)
	console.log('Good!')
if(Number(mostRecentScore)==40)
	console.log('Awesome!')

function makeScreenshot() {// Takes a screenshot
        html2canvas(document.getElementById("screenshot"), {scale: 2}).then(canvas => {
            var main = document.getElementById("main");
            while (main.firstChild) {
              main.removeChild(main.firstChild);
            }

            // for Firefox
            main.appendChild(canvas);

            // for Safari
            //canvas.toBlob(function(blob) {
            //  var newImg = document.createElement('img'),
            //      url = URL.createObjectURL(blob);
              
            //  newImg.onload = function() {
            //    URL.revokeObjectURL(url);
            //  };

            //  newImg.src = url;
            //  newImg.title = "some title";
            //  newImg.alt = "some alternative text";
            //  main.appendChild(newImg);
            //});
        });
    }
