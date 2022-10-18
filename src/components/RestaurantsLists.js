import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const RestaurantsLists = ({ meal, handleLike, isLiked }) => {
  const renderLiked = () => {
    if (isLiked.includes(meal.idMeal)) {
      return <FavoriteIcon />
    } else {
      return <FavoriteBorderIcon />
    }
  }

  return (
    <Card>
      <Link to={`meal/${meal.idMeal}`} style={{textDecoration: "none"}}>
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
            <Typography color="text.secondary">
              <p className="meal-instruction">{meal.strInstructions}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <Button variant="text" onClick={() => handleLike(meal.idMeal)}>
        {renderLiked()}
      </Button>
    </Card>
  )
}

export default RestaurantsLists
