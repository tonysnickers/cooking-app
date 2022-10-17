import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'

const RestaurantsLists = ({ restaurant }) => {
  return (
    <Card>
      <CardActionArea>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ margin: '10px auto', textAlign: 'center' }}
        >
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
      </CardActionArea>
    </Card>
  )
}

export default RestaurantsLists
