import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../../css/Signup.module.css'
function Signup() {

  const navigate = useNavigate();
  const [input, setInput] = useState({ username: "", password: "", verifyPassword: "" });

  function handleSubmit(e) {
    e.preventDefault();

    if (input.password != input.verifyPassword) {
      alert("The passwords are different. Please try again.");
      setInput({ ...input, password: "", verifyPassword: "" });
    }
    else {
      getUserData();
    }

    async function getUserData() {
      try {
        const response = await fetch(`http://localhost:3000/users/?username=${input.username}`);
        if (!response.ok) {
          throw response.statusText;
        }
        const data = await response.json();

        if (data.length == 0) {
          navigate('/signup/details', {
            state: {
              username: input.username,
              password: input.password,
            }
          });
        }

        else {
          alert("This usrename is already exist. Try another.");
          setInput({ username: "", password: "", verifyPassword: "" });
        }
      }
      catch {
        alert("An error occurred. Please try again ")
      }
    };


  }
  return (
    <>
      <h1>Signup</h1>
      <form className={styles.signupContainer} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          type="text"
          name="username"
          placeholder="Israel123"
          required
        ></input><br />
        <label>Password</label>
        <input
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          type="Password"
          placeholder="*********"
          required
        ></input><br />
        <label>Verify Password</label>
        <input
          value={input.verifyPassword}
          onChange={(e) => setInput({ ...input, verifyPassword: e.target.value })}
          type="Password"
          placeholder="*********"
          required
        ></input><br />
        <button type="submit">Submit</button>
        <br />
        <span>Already have an account?</span>
        <Link to="/login"> Please log in</Link>
      </form>
    </>
  );
}

export default Signup;
