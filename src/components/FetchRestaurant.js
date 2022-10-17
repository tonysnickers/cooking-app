import axios from 'axios'
import React, { useEffect } from 'react'
import RestaurantsLists from './RestaurantsLists'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'

const FetchRestaurant = ({ setRestaurants, restaurants }) => {
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`)
      .then((res) => setRestaurants(res.data.meals))
  })
  return (
    <Container sx={{ marginTop: '60px' }}>
      <Grid container spacing={5}>
        {restaurants.map((restaurant) => (
          <Grid item xs={4}>
            <RestaurantsLists restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default FetchRestaurant
