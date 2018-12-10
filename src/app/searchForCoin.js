import getData from './getData/getData';
import displayError from './displayError/displayError';
import createCoinModal from './createCoinModal';
const searchForCoin = () => {
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const coinName = e.target.elements.name.value.toUpperCase();
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinName}&tsyms=USD`;
    const url2 = `https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${coinName}&tsym=USD`;
    //The api dosn't return all the information i need in one place so im fetching twice
    getData(url)
      .then(data => {
        let coin = {
          DISPLAY: data.DISPLAY[coinName]
        };
        getData(url2)
          .then(data => {
            const { CoinInfo } = data.Data[0];
            coin['CoinInfo'] = CoinInfo;
            createCoinModal(coin);
          })
          .catch(error => displayError("Coin wasn't found!"));
      })
      .catch(error => displayError("Coin wasn't found!"));
      e.target.reset()
  });
};
export default searchForCoin;
