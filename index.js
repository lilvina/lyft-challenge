const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({
  type: () => {
    return true
  }
}))

app.post("/test", (request, response) => {
  response.setHeader('Content-Type', 'application/json')
  response.send(JSON.stringify({'sum': sum(request, response)}))
  console.log(JSON.stringify({'sum': sum(request, response)}))
})

let sum = (request, response) => {
  let x = request.body.x
  let y = request.body.y
  let sum = x + y
  return sum
}

app.listen(3000, () => {
  console.log('Listening to port 3000')
})