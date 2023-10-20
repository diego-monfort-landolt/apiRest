import express from 'express'
const app = express()

app.use(express.json()) // middleware que transforma req body a un json
const PORT = 3000;
app.get('/ping', (req, res) => {
  console.log('ping Ping ping')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})