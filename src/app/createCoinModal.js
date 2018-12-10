const createCoinModal = coin => {
  const { CoinInfo } = coin;
  const priceData = coin.DISPLAY.USD;
  const modal = document.createElement('div');
  modal.className = 'modal';
  //Im not using CrytoCompare's images
  modal.innerHTML = `
  <div class="btn-container">
  <button class="close-modal-btn"><i class="fas fa-times"></i></button>
  </div>
  <div class="icon-container">
  <img class="icon" src=" https://raw.githubusercontent.com/nullablebool/crypto-icons/f199603c/200x200/${
    CoinInfo.Name
  }-200.png">
  </div>
  <div class="info-container">
  <h3>${CoinInfo.Name}</h2>
  <p>${CoinInfo.FullName}</p>
  </div>
  <ul class="coin-stats">
  <li>${priceData.PRICE}<span class="${
    priceData.CHANGEPCT24HOUR > 0 ? 'lower' : 'higher'
  }">(${priceData.CHANGEPCT24HOUR}%)</span></li>
  <li>Market:${priceData.MARKET}</li>
  <li>High 24H:${priceData.HIGH24HOUR}</li>
  <li>Open 24H:${priceData.OPEN24HOUR}</li>
  <li>Low 24H:${priceData.LOW24HOUR}</li>
  <li>Direct Vol. 24H:${priceData.VOLUME24HOURTO}</li>
</ul>
    `;
  const { body } = document;
  body.insertBefore(modal, body.firstChild);
  const closeModalBtn = document.querySelector('.close-modal-btn');
  body.style.overflow = 'hidden';
  closeModalBtn.addEventListener('click', e => {
    modal.remove();
    body.style.overflow = 'auto';
  });
};
export default createCoinModal;
