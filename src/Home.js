import React, { useState } from 'react'
import FetchRestaurant from './components/FetchRestaurant'
import Form from './components/Form'

const Home = () => {
  const [meals, setMeals] = useState([])
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      <Form setInputValue={setInputValue}/>
      <FetchRestaurant setMeals={setMeals} meals={meals}  inputValue={inputValue}/>
    </div>
  )
}

export default Home


