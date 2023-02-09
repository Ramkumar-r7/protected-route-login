import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleclick = () => {

    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    const data = localStorage.getItem("email", "password")
    if (data) {
      navigate('/')
    } else {
      alert('Login to access')
    }
  }


  return (
    <>


      <div className='container w-50 bg-light mt-5'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email"
              className="form-control"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password"
              className="form-control"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default LoginPage
