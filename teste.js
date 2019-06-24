const Scraping = require("./Scraping")

const rest = async (inscri, cod, cod_verifation) => {


    await Scraping.getSite(inscri, cod, cod_verifation)

    //  const res = //

    /*   try {
          if (res == "Esta nota fiscal não foi emitida") {
              console.log("Nota invalida")
          } else {
              console.log("Nota valida")
          }
      } catch (error) {
  
      }
   */
}


rest("13.711.382/0001-03", "201700000000201", "e966fc0d")