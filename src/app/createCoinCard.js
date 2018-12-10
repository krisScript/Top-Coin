import createCoinModal from './createCoinModal';
const createCoinCard = coin => {
  const { CoinInfo } = coin;
  const coinCard = document.createElement('div');
  coinCard.className = 'coin-card';
  coinCard.innerHTML = `
      <div class="icon-container">
      <img class="icon" src=" https://raw.githubusercontent.com/nullablebool/crypto-icons/f199603c/200x200/${
        CoinInfo.Name
      }-200.png">
      </div>
      <div class="info-container">
      <h3>${CoinInfo.Name}</h2>
      <p>${CoinInfo.FullName}</p>
      </div>
      
      `;
  coinCard.addEventListener('click', e => {
    createCoinModal(coin)
  });

  return coinCard;
};

export default createCoinCard;
