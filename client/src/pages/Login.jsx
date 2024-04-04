import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../css/Login.module.css'

function Login() {

  const navigate = useNavigate();
  const [input, setInput] = useState({ userId: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    login();

    async function login() {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(input),
        });
        if (!response.ok) {
          throw response.statusText;
        }
        const data = await response.json();
        if (data.length != 0) {
          localStorage.setItem("currentUser", JSON.stringify(data));
          navigate(`/users/${data.id}/home`)
        }
        else {
          alert("One of the data entered is incorrect. Please try again.")
          setInput({ userId: '', password: '' })
        }
      }
      catch {
        alert("An error occurred. Please try again ")
      }
    };

  }
  return (
    <>
      <h1>Login</h1>
      <form className={styles.loginContainer} onSubmit={handleSubmit}>
        <label >User Id</label>
        <input value={input.userId} onChange={(e) => setInput({ ...input, userId: e.target.value })} type="text" name='userId' placeholder='Israel123' required />
        <label>Password</label>
        <input value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} type="Password" placeholder='*********' required />
        <button type='submit'>Submit</button>
        <br />
        <span>Don't have an account?</span>
        <Link to='/signup'> Please sign up</Link>
      </form>
    </>
  )
}

export default Login