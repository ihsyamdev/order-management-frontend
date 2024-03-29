import React, { useState } from 'react'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onLogin({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='border' type='text' value={username} onChange={handleUsernameChange} />
      <input className='border' type='password' value={password} onChange={handlePasswordChange} />
    </form>
  )
}

export default LoginForm
