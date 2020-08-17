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
} from '@material-ui/core'
import pianoData from './data/piano.json'
import violinData from './data/violin.json'

const PIANO = 0
const VIOLIN = 1

const ClassicalMusicRecommender = () => {
  const [instrument, setInstrument] = useState(PIANO)
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(false)
  const instruments = [pianoData, violinData]

  const handleButtonClick = instrument => () => {
    const max = instruments[instrument].length
    const random = Math.floor(Math.random() * max)
    setIndex(random)
    setInstrument(instrument)
    setActive(true)
  }

  const piece = instruments[instrument][index]

  return (
    <>
      <AppBar position='absolute'>
        <Toolbar>
          <Typography variant='h6'>Classical Music Recommender</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box marginTop={1}>
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
              <Grid item xs={12} sm={8} md={6}>
                <Card style={{ flex: 1 }}>
                  <CardContent>
                    <Typography variant='h6'>{piece.name}</Typography>
                    <Typography>by {piece.composer}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </>
  )
}

export default ClassicalMusicRecommender
