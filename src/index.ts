import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // middleware que transforma req body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
  
  console.log('ping Ping ping' + new Date().toLocaleDateString())
  res.send('pong')
})
app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})