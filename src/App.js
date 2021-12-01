import React from 'react';
import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import foodsJson from "./foods.json"
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import Total from './components/Total';

function App() {

  const [foods, setFoods] = useState(foodsJson)
  const [foodsCopy, setFoodsCopy] = useState(foodsJson)
  const [showForm, setShowForm] = useState(false)
  const [calories, setCalories] = useState([])

  function handleForm() {
    setShowForm(!showForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    }

    setFoods([newFood, ...foods])
    setFoodsCopy([newFood, ...foodsCopy])
    handleForm()
  }

  function handleSearch(event) {
    let word = event.target.value
    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(word.toLowerCase())
    })

    setFoodsCopy(filteredFoods)
  }

  function handleClick(food, qty) {
    // console.log(food, qty)
    let totalCalories = {
      name: food.name,
      quantity: qty,
      calories: food.calories
    }
    setCalories([totalCalories, ...calories])
  }

  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <Search btnSearch={handleSearch}/>
          {
            showForm ? <AddForm btnSubmit={handleSubmit} btnClose={handleForm}/> : <button onClick={handleForm}>Add Food</button>
          }
      
          {
            foodsCopy.map((ele, i) => {
              return <FoodBox
                  key={i}
                  food={ele}
                  btnClick={handleClick}
                  />
            })
          }
        </div>
        <div className="column">
          <Total calories={calories}/>
        </div>
      </div>
    </div>
  );
}

export default App;
