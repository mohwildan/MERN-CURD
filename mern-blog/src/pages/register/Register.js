import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
import Registerbg from '../../assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'

const Register = () => {
  return (
    <body className='body-register'>
    <div>
      <div className="main-page">
        <div className="left">
          <img src={Registerbg} className='bg-image-register' alt="register" />
        </div>
        <div className="right">
          <p className='title'>Register</p>
          <Input label='Full name' placeholder= 'Full name'/>
          <Input label='Email' placeholder= 'Email'/>
          <Input label='Password' placeholder= 'Password'/>
          <Button title='Register'/>
          <Link Link to='/login' className='back-to-login'>Kembali ke login</Link>
        </div>
      </div>
    </div>
    </body>
  )
}

export default Register