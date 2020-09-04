window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
document.getElementById('pwa-install').addEventListener('click', (e) => {
  // Hide the app provided install promotion
  hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  });
});

if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
  
 document.getElementsByClassName('pwa-promote')[0].hidden='true';
}else{
  const shareData = {
  title: 'Quizzology',
  text: 'Quiz yourself with random questions and test your skills. ',
  url: 'https://quizzology.vercel.app',
  }
  document.getElementsByClassName('pwa-promote')[0].addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
  } catch(err) {
    console.log(err)
  }
});
}
