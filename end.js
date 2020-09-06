const username = document.getElementById('username');
const email= document.getElementById('email');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const motiv = document.getElementById('motivation')
const totalScr = localStorage.getItem('totalScr')===null && document.referrer==="" ?localStorage.setItem('totalScr',mostRecentScore):localStorage.setItem('totalScr',Number(mostRecentScore)+Number(localStorage.getItem('totalScr')))
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

document.addEventListener("load",function(){if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
 document.getElementsByClassName('share-share')[0].hidden='true';
}})
document.onload = () => {
if(Number(mostRecentScore)<=300)
	motiv.innerText=('You can do better');
if(Number(mostRecentScore)===400)
	motiv.innerText=('Good');
if(Number(mostRecentScore)>400)
	motiv.innerText=('Awesome');
history.pushState({
    id: 'Edit  URL'
}, 'GAME OVER', 'GAMEEND.html');}

finalScore.innerHTML += mostRecentScore;

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

var capture;
html2canvas(document.getElementsByTagName('html')[0]).then(canvas => {
    capture=(canvas)
});

const shareData = {
  title: 'Quizzology',
  text: 'I scored '+mostRecentScore+' in Quizzology can you?',
  url: 'https://quizzology.github.io',
  files: capture,
  }


document.getElementById('share-score').addEventListener('click', 
  document.getElementsByClassName('pwa-promote')[0].addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
  } catch(err) {
    console.log(err)
  }
}));
