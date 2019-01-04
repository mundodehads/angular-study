/* Import */
const http = require('http')
const axios = require('axios')

/* Servidor HTTP */
http.createServer((req, res) => {
  /* Consumo de outro servidor */
  axios.get('http://localhost:4000' + req.url)
    .then(response => {
      res.writeHead(response.status, response.headers)
      res.end(response.data, 'utf-8')
    })
    .catch(err => {
      res.writeHead(500)
      res.end(`[${err.code}] ${err.message}`)
    })
}).listen(3000)

console.log(`🌝 consumer rodando em
>> http://127.0.0.1:3000/`)
