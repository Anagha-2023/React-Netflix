import React from 'react'
import NavBar from './Components/Navbar/NavBar.js'
import './App.css'
import {originals,action,Romance,Comedy,Horror} from './urls.js'
import Banner from './Components/Banner/Banner.js'
import RowPost from './Components/RowPost/RowPost.js'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url = {originals} title = 'Netflix Originals'/>
      <RowPost url = {action} title = 'Action' isSmall/>
      <RowPost url = {Romance} title = 'Romance' isSmall/>
      <RowPost url = {Comedy} title = 'Comedy' isSmall/>
      <RowPost url = {Horror} title = 'Horror' isSmall/>
    </div>
  )
}

export default App
