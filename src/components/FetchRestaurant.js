import axios from 'axios'
import React, { useEffect } from 'react'
import RestaurantsLists from './RestaurantsLists'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'

const FetchRestaurant = ({ setMeals, meals, inputValue }) => {
  useEffect(() => {
    console.log("test")
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((res) => setMeals(res.data.meals))
  }, [inputValue])
  return (
    <Container sx={{ marginTop: '60px' }}>
      <Grid container spacing={5}>
        {meals && meals.map((meal) => (
          <Grid item xs={4} key={meal.idMeal} >
            <RestaurantsLists meal={meal} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default FetchRestaurant
