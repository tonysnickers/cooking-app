import axios from 'axios'
import React, { useEffect } from 'react'
import RestaurantsLists from './RestaurantsLists'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const FetchRestaurant = ({ setRestaurants, restaurants }) => {
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`)
      .then((res) => setRestaurants(res.data.meals))
  })
  return (
    <div>
        {restaurants.map((restaurant) => (
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <RestaurantsLists restaurant={restaurant} />
          </CardActionArea>
      </Card>
            ))}
    </div>
  )
}

export default FetchRestaurant
