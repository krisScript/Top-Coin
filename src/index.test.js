import puppeteer from 'puppeteer';
describe('index', () => {
  let page;
  let testData;
  beforeAll(async () => {
    jest.setTimeout(30000);
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: ['--windows-size=1920,1080']
    });
    //I havent figured out how to intercept multiple requests
    //When i do will continue with testing the app
    page = await browser.newPage();
    await page.goto('http://localhost:1234/');
  });
  afterAll(() => {
    t;
    browser.close();
  });
  it('should have title "Top Coin"', async () => {
    const title = await page.title();
    expect(title).toMatch('Top Coin');
  });
  describe('searching for device', () => {
    let card;
    let modal;
    beforeAll(async () => {
      await page.waitForSelector('.search-form');
      await page.type('input[name=name]', 'btc');
      await page.$eval('.search-btn', btn => btn.click());
      card = await page.waitForSelector('.coin-card');
      modal = await page.waitForSelector('.modal');
    });
    it('element with class card should exist', () => {
      expect(card).toBeTruthy();
    });
    it('element with class modal should exist', () => {
      expect(modal).toBeTruthy();
    });
    it('coinsSection should have 10 children', async () => {
      const coinsSectionChildCount = await page.$eval(
        '.coins-section',
        element => element.childElementCount
      );
      expect(coinsSectionChildCount).toBe(10);
    });
    describe('closing modal', () => {
      beforeAll(async () => {
        await page.$eval('.close-modal-btn', btn => btn.click());
      });
      it('element with class modal should not exist', async () => {
        const modalElement = await page.evaluate(() =>
          document.querySelector('.modal')
        );
        expect(modalElement).toBeFalsy();
      });
    });
  });
});
