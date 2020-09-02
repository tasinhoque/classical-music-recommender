const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

const baseUrl =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='

app.get('/api/:searchTerm', async (req, res) => {
  try {
    const url = baseUrl + req.params.searchTerm + '&key=' + process.env.API_KEY
    console.log(url)
    const { videoId } = (await axios.get(url)).data.items[0].id
    res.status(200).send(videoId)
  } catch (error) {
    res.status(404).send(error)
  }
})

app.listen(PORT, console.log(`Server started on PORT ${PORT}`))
