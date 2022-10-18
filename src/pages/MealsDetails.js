import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const MealsDetails = () => {
  const { id } = useParams()
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const getMealById = async (id) => {
      await axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => setMeals(res.data.meals))
    }
    getMealById(id)
  }, [])
  console.log(meals)

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      <Card sx={{ maxWidth: 1045 }}>
        {meals.map((m) => (
          <CardActionArea>
            <CardMedia
              component="img"
              height="550 %"
              image={m.strMealThumb}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                {m.strMeal}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {m.strArea}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {m.strCategory}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {m.strInstructions}
              </Typography>
              <h2>Ingredients</h2>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>{m.strIngredient1}</p>
                <p>{m.strIngredient2}</p>
                <p>{m.strIngredient4}</p>
                <p>{m.strIngredient5}</p>
                <p>{m.strIngredient6}</p>
                <p>{m.strIngredient7}</p>
              </div>
            </CardContent>
          </CardActionArea>
        ))}
      </Card>
    </div>
  )
}

export default MealsDetails
