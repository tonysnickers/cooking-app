import React, { useState } from 'react'
import FetchRestaurant from './components/FetchRestaurant'
import Form from './components/Form'

const Home = () => {
  const [meals, setMeals] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLiked, setIsLiked] = useState([])

  const handleLike = (id) => {
    if (isLiked.includes(id)) {
      // suppression de l'id
      const deleteId = isLiked.filter((liked) => liked !== id)
      setIsLiked(deleteId)
      console.log('suprimer')
    } else {
      // ajout de l'id
      setIsLiked([...isLiked, id])
      console.log('ajouter')
    }

    console.log(isLiked)
    console.log(' id: ', id)
  }

  return (
    <div>
      <h1>React Cooking App</h1>
      <Form setInputValue={setInputValue} />
      <FetchRestaurant
        setMeals={setMeals}
        meals={meals}
        inputValue={inputValue}
        handleLike={handleLike}
        isLiked={isLiked}
      />
    </div>
  )
}

export default Home
