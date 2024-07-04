import React from 'react'

function SignUp() {
  return (
    <div className='sign-up-container'>
      <h1>Sign Up</h1>
<form className='sign-up-form'>
  <label htmlFor='username'>Username:</label>
  <input type='text' placeholder='username'/>
        <label htmlFor='email'>Email:</label>
        <input type='email' placeholder='email' />
        <label htmlFor='password'>Password:</label>
        <input type='password' placeholder='password' />



</form>
    </div>
  )
}

export default SignUp