import React from 'react'
import { Link } from 'react-router-dom'
const MainWebpage = () => {
  return (
    <div className='main_page_form'>
      <div >
   <ul className='list'>
    <h1 style={{color:"black"}}>Welcome!😉😉</h1>
   <li ><Link to="/login">
        <button class="btn btn-primary btn-lg login" > &nbsp;LOGIN 🤩</button>
    </Link>🦖</li>
       <br/>
    <li><Link to="/signup">
         <button type="button" class="btn btn-dark btn-primary btn-lg signup">&nbsp; SIGN-IN 🫱🏻‍🫲🏻</button>
    </Link>🐉</li>
   </ul>
         
  </div>
    </div>

  )
}

export default MainWebpage