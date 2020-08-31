import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CardContent,
  Card,
  Grid,
  Button,
  Box,
  CssBaseline,
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player'
import axios from 'axios'

import pianoData from './data/piano.json'
import violinData from './data/violin.json'

const PIANO = 0
const VIOLIN = 1
const instruments = [pianoData, violinData]
const baseUrl =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='
const keyPartOfUrl = '&key=AIzaSyAgQhMo3AVgcMc8uMzjh7RyPblZKeM09wM'

const useStyles = makeStyles(theme => ({}))

const ClassicalMusicRecommender = () => {
  const [instrument, setInstrument] = useState(1)
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(false)
  const [youTubeVideoUrl, setYouTubeVideoUrl] = useState()

  const handleButtonClick = _instrument => async () => {
    const max = instruments[_instrument].length
    const random = Math.floor(Math.random() * max)
    setIndex(random)
    setInstrument(_instrument)
    setActive(true)

    const { name, composer } = instruments[_instrument][random]
    const processedName = (name + ' by ' + composer).replace(/[ ]+/g, '+')

    const fullUrl = baseUrl + processedName + keyPartOfUrl
    const { videoId } = (await axios.get(fullUrl)).data.items[0].id
    setYouTubeVideoUrl('https://www.youtube.com/watch?v=' + videoId)
  }

  const piece = instruments[instrument][index]
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar color='default' position='static' elevation={0}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item>
              <img src='./logo.png' width='30' height='30' />
            </Grid>
            <Grid item>
              <Typography variant='h6'>Classical Music Recommender</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider />
      <Container>
        <Box marginTop={4}>
          <Grid container spacing={3} justify='center'>
            <Grid item>
              <Button variant='contained' onClick={handleButtonClick(PIANO)}>
                Random Piano Piece
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={handleButtonClick(VIOLIN)}>
                Random Violin Piece
              </Button>
            </Grid>
          </Grid>
        </Box>
        {active && (
          <Box marginTop={4}>
            <Grid container justify='center'>
              <Card>
                <ReactPlayer url={youTubeVideoUrl} playing />
                <CardContent>
                  <Typography variant='h6'>{piece.name}</Typography>
                  <Typography>by {piece.composer}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        )}
      </Container>
    </>
  )
}

export default ClassicalMusicRecommender
