import "./login.css"
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Log In</span>
      <form className="loginForm">
          <label>Email</label>
          <input className="loginInput" type="email" placeholder="Enter your email..."/>
          <label>Password</label>
          <input type="password" className="loginInput" placeholder="Enter your password..."/>
          <button className="loginButton">Log In</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link></button>
    </div>
  )
}
