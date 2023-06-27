// import Head from 'next/head'
// import { DefaultLayout } from '@/components/templates/DefaultLayout'
// import React from 'react'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import cookie from 'js-cookie'

// export default function Login() {
//   const router = useRouter()
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     try {
//       const response = await fetch('http://localhost:3002/auth/login', {
//         method: 'POST',
//         headers: {
//           'Access-Control-Allow-Origin': 'http://localhost:4000',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//       })
//       const data = await response.json()
//       console.log('data is...' + JSON.stringify(data))
//       if (data.access_token) {
//         console.log('cookieに保存するよ')
//         cookie.set('token', data.access_token, { expires: 1 })
//       }
//       console.log('cookie is...: ' + cookie.get('token'))
//     }catch(error) {
//       console.log('Error logging in: ', error)
//     }
//   }

//   return (
//     <form id='loginForm' className='flex flex-col px-6' onSubmit={handleLogin}>
//       <h1 className='p-6 text-xl font-bold'>ログイン</h1>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//     </form>
//   )
// }
import { useState } from 'react'
import cookie from 'js-cookie'
import LoginForm from '@/components/auth/LoginForm'

const Login = () => {
  const [accessToken, setAccessToken] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLogin = (username: string, password: string) => {
    const response = fetch('http://localhost:3002/auth/login', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          setAccessToken(data.access_token)
          cookie.set('access_token', data.access_token,)
          setIsModalOpen(false)
          console.log(cookie.get('access_token'))
        }
      }
    )
  }

  const handleIsOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleIsCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleIsOpenModal}>Login</button>
      {isModalOpen && (
        <div className='modal border'>
          <div className='modal-content border'>
            <LoginForm onLogin={handleLogin} />
              <button onClick={handleIsCloseModal} className='border'>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
