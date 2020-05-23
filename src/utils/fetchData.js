// npm i xmlhttprequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url_api) => {

  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true) // true ativa la peticion asincrona
    xhttp.onreadystatechange = (() => {
      // Validacion para saber si el estado es satisfactorio, van de 0 a 4
      if(xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error ', url_api))
      }
    })
    xhttp.send()
  })
}
// commonJS export
module.exports = fetchData
