import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./views/Home"
import SingleRecipe from "./views/SingleRecipe"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="recipes/:id" element={<SingleRecipe/>}/>
    </Routes>
    </>
  )
}

export default App