import React from 'react'

const Login = () => {
  return (
    <div className='login_form'>
      <form action="POST">
        <ul className='list_login'>
        <h1 className='login_name'>LOGIN</h1>
        <br />
          Email please 😘
        <input type="email" placeholder='enter email' />
        Password🥲
        <input type="password" placeholder='password also required'/>
        <br />
        <button class="btn btn-primary btn-lg ">Submit 🤗</button>
        </ul>
      </form>
    </div>
  )
}

export default Login