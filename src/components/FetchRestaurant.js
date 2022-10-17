import axios from 'axios'
import React, { useEffect } from 'react'

const FetchRestaurant = ({setRestaurants, restaurants}) => {


  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`).then((res) => setRestaurants(res.data.meals))
  })
  return (
    <div>
      <ul>
        {restaurna}
      </ul>
    </div>
  )
}

export default FetchRestaurant
