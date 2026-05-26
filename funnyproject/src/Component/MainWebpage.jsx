import React from 'react'
import { Link } from 'react-router-dom'
const MainWebpage = () => {
  return (
    <div>
        <h1 style={{color:"black"}}>&nbsp;Welcome!😉😉</h1>
        <h1 style={{color:"green"}}>&nbsp;Thank you !😁 to continue please  select  ⬆🙋🏻‍♂️</h1>
        
         
  
   <Link to="/login">
        
        <button class="btn btn-success "> &nbsp;LOGIN 🤩</button>
        </Link>
        <br />
        <br />
        <Link to="/signup">
         <button type="button" class="btn btn-primary">&nbsp; SIGN-IN 🫱🏻‍🫲🏻</button>
        </Link>
         
  </div>

  )
}

export default MainWebpage