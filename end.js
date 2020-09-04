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

var capture;
document.onload = html2canvas(document.getElementsByTagName('html')[0]).then(canvas => {
    capture=(canvas)
});

const shareData = {
  title: 'Quizzology',
  text: 'I scored '+mostRecentScore+' in Quizzology can you?',
  url: 'https://quizzology.github.io',
  files: capture
  }


document.getElementById('share-icon').addEventListener('click', 
  document.getElementsByClassName('pwa-promote')[0].addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
  } catch(err) {
    console.log(err)
  }
});

if(Number(mostRecentScore)<=30)
	console.log('You can do better!')
if(Number(mostRecentScore)==40)
	console.log('Good!')
if(Number(mostRecentScore)==40)
	console.log('Awesome!')

function makeScreenshot() {// Takes a screenshot
        html2canvas(document.getElementsByTagName("body"), {scale: 2})
		.then(canvas => return canvas;)
    }
