import { CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const RestaurantsLists = ({ restaurant }) => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        {restaurant.strMeal}
      </Typography>
      <CardMedia
        component="img"
        height="250"
        image={restaurant.strMealThumb}
        alt="img food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {restaurant.strInstructions}
        </Typography>
      </CardContent>
    </div>
  )
}

export default RestaurantsLists
