import React, {useState} from 'react'
import leesCakes from '../svg/leesCakes.svg'
import {Link, useHistory} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth()

    const login = (e) => {
        e.preventDefault();

       signInWithEmailAndPassword(auth,email, password)
       
        .then(() => {
            history.push('/ecommerce');
        })
        .catch(e => alert(e.message))
    }

    const register = (e)=> {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            history.push('/ecommerce');
        })
        .catch(e => alert(e.message))
    }

    return (

        <div className="login">
        <div className="login_container">
        <Link to="/ecommerce">
        <img className="logo" src={leesCakes} alt=""/>
        </Link>
       

      
        <h1>Sign in</h1>
        <form>
        <label>E-mail</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
        <label>Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </form>
        <button onClick={login} type="submit">Sign in</button>
        <p>Don't have an account?</p>
        <button onClick={register} className="login_register">
            Create account
        </button>
        </div>
        </div>
    )
}

export default Login
