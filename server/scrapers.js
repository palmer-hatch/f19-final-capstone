const puppeteer = require('puppeteer')

async function scrapeChannel(url){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="productTitle"]');
    const txt = await el.getProperty('textContent');
    const name = await txt.jsonValue();
    
    const [el2] = await page.$x('//*[@id="imgBlkFront"]');
    const src = await el2.getProperty('src');
    const avatarURL = await src.jsonValue();


    browser.close()

    console.log({name, avatarURL})

    return {name, avatarURL}

}

module.exports ={
    scrapeChannel
}

//scrapeChannel('https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_2?crid=6QGGQ7IKN43U&keywords=black+swan&qid=1647897518&sprefix=black+swan%2Caps%2C133&sr=8-2')