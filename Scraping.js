const puppeteer = require('puppeteer');

const getSite = async (number_inscri, code, cod_verifation) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://bhissdigital.pbh.gov.br/nfse/pages/consultaNFS-e_cidadao.jsf');

    await page.type("[id='form:cnpjPrestador']", `${number_inscri}`);

    await page.type("[id='form:numeroNfsE']", `${code}`);

    await page.type("[id='form:codVerif']", `${cod_verifation}`);

    await page.screenshot({ path: 'nota.png' })


    const info = await page.evaluate(() => {
        return document.getElementById("form:img_captcha").src
    })

    console.log(info)

    // await page.click("#B198797676878736164")

    /*  const innerText = await page.evaluate(() => {
         return document.querySelector("body").innerText;
     }); */


    // let res = innerText.substring(143, 175);
    await browser.close();
    // return res


}


module.exports = {
    getSite
}