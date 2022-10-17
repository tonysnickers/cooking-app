import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'

const RestaurantsLists = ({ meal }) => {
  return (
    <Card>
      <CardActionArea>
        <Typography
          gutterBottom
          sx={{ margin: '10px auto', textAlign: 'center' }}
        >
          <h2 className="meal-name">{meal.strMeal}</h2>
        </Typography>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          sx={{ margin: '10px auto', textAlign: 'center' }}
        >
          {meal.strArea}
        </Typography>
        <CardMedia
          component="img"
          height="250"
          image={meal.strMealThumb}
          alt={'img food' + meal.strMeal}
        />
        <CardContent>
          <Typography  color="text.secondary">
            <p className="meal-instruction">{meal.strInstructions}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RestaurantsLists
