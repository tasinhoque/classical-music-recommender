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
import ReactPlayer from 'react-player'
import axios from 'axios'

import pianoData from './data/piano.json'
import violinData from './data/violin.json'

const PIANO = 0
const VIOLIN = 1
const instruments = [pianoData, violinData]

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

    try {
      console.log(processedName)
      const videoId = await axios.get(
        `https://classical-music-recommender.herokuapp.com/api/${processedName}`
      )
      console.log(processedName, videoId)
      setYouTubeVideoUrl('https://www.youtube.com/watch?v=' + videoId.data)
    } catch (error) {
      console.log(error)
    }
  }

  const piece = instruments[instrument][index]

  return (
    <>
      <CssBaseline />
      <AppBar color='default' position='static' elevation={0}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item>
              <img src='./logo.png' width='30' height='30' alt='logo' />
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
