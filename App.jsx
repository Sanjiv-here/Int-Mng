import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {

  const handleFormSubmit = (data) => {
    console.log('Admin form submitted:', data);
  };

  return (
    <Form onSubmit={handleFormSubmit}/>
  )
}

export default App
