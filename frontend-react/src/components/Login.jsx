import React, { useContext, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from '../AuthProvider'


const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      username, password
    }
    // console.log('user data', userData)

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      // console.log(response.data);
      // console.log(response.data.access)

      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setLoading(true);
      setIsLoggedIn(true);
      
      navigate('/')
    }
    catch (error){
      console.error('Invalid error.')
      setError('User id or password is incorrect.')
    }
    finally{
      setLoading(false);
    }
  }


  return (
    <>
        <div className='container'>
              <div className='row justify-content-center'>
                  <div className="col-md-6 bg-light-dark p-5 rounded">
                      <h3 className='text-light text-center mb-5'>Login</h3>
  
                      <form action="" onSubmit={handleLogin}>
                          <div className='mb-3'>
                              <input type="text" className='form-control' placeholder='Enter username' value = {username} onChange={(e) => setUsername(e.target.value)} />
                              
                          </div>
                          
                          <div className="mb-3">
                              <input type="password" className='form-control' placeholder='Set password' value = {password} onChange={(e) => setPassword(e.target.value)} />
                              <small>{error && <div className='text-danger text-center my-2'>{error}</div>}</small>
                          </div>

                          
                          
                          {loading ? (
                              <button type='submit' className='btn btn-info d-block mx-auto' disabled>< FontAwesomeIcon icon={faSpinner} />Logging in..</button>
                          ) : (
                              <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                          )}
                          
                      </form>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Login