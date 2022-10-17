import React, { useState } from 'react'
import FetchRestaurant from './components/FetchRestaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  return (
    <div>
      <FetchRestaurant setRestaurants={setRestaurants} restaurants={restaurants} />
    </div>
  )
}

export default Home

// const Home = () => {
//   const [restaurants, setRestaurants] = useState([])
//   return (
//     <div>
//       {/* <ul>
//         {restaurants.map((restaurant) => (
//           <li>
//             {restaurant.strMeal}
//             {restaurant.strInstructions}
//             <img src={restaurant.strMealThumb} alt="" />
//           </li>
//         ))}
//       </ul>
//       <FetchRestaurant setRestaurants={setRestaurants} /> */}
//     </div>
//   )
// }
