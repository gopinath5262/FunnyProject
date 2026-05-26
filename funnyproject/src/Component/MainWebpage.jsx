import React from 'react'
import { Link } from 'react-router-dom'
const MainWebpage = () => {
  return (
    <div>
        <h1>Welcome to Our Webpage Dear !😉😉</h1>
        <h1>Thank you ! to continue please do select below ⬇👇👇🏻😁</h1>
        <Link to="/login">
        <button>Login</button>
        </Link>
        <Link to="/signup">
         <button type="button" class="btn btn-primary">SIGN-IN</button></Link>
         
    </div>
  )
}

export default MainWebpage