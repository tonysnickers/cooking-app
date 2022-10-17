import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Form = ({ setInputValue }) => {
  const handlesubmit = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
    
  }

  return (
    <input
      type="text"
      style={{
        width: 700,
        padding: 15,
        maxWidth: '100%',
        margin: '70px auto',
        backgroundColor: 'white',
        borderRadius: 15,
        fontSize: 18,
        border: '1px solid',
      }}
      className="input-form"
      onChange={(e) => handlesubmit(e)}
    />
  )
}

export default Form
