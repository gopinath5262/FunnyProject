import React from 'react'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import MainWebpage from './Component/MainWebpage'

import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom"

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<MainWebpage/>} />

          <Route path="/login" element={<Login/>} />

          <Route path="/signup" element={<Signup/>} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App