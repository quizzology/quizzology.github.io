window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
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
