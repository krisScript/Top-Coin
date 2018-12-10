'use strict';
import './style/index.scss';
import getData from './app/getData/getData';
import createCoinCard from './app/createCoinCard';
import searchForCoin from './app/searchForCoin';
import displayError from './app/displayError/displayError';
const url =
  'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
getData(url)
  .then(data => {
    const coinsSection = document.querySelector('.coins-section');
    data.Data.forEach(coin => {
      coinsSection.appendChild(createCoinCard(coin));
    });
    const loadingSection = document.querySelector('.loading');
    loadingSection.style.display = 'none';
  })
  .catch(error => {
    displayError('Sorry there was an error!');
  });
const upBtn = document.querySelector('.up-btn');
upBtn.addEventListener('click', e => {
  window.scrollTo(0, 0);
});
searchForCoin();
