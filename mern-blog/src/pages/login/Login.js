import React from 'react'
import { Link } from 'react-router-dom'
import LoginBg from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'

const Login = () => {
  return (
   <body className='body-register'>
    <div>
      <div className="main-page">
        <div className="left">
          <img src={LoginBg} className='bg-image-register' alt="register" />
        </div>
        <div className="right">
          <p className='title'>Login</p>
          <Input label='Email' placeholder= 'Email'/>
          <Input label='Password' placeholder= 'Password'/>
          <Button title='Register'/>
          <Link Link to='/register' className='back-to-login'>Kembali ke Register</Link>
        </div>
      </div>
    </div>
    </body>
  )
}

export default Login