import {Link} from "react-router-dom"
import "./topbar.css"
import myImg from "./myImage/olivia_intro_1.png"

export default function Topbar() {
  const user = true;
  // const user = false;
  
  return (
    <div className="top">

      <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-twitter"></i>
      <i className="topIcon fab fa-pinterest"></i>
      <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"> <Link to="/" className="link" >HOME</Link></li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
              {user && <li className="topListItem">LOGOUT</li>}
          </ul>
      </div>
      <div className="topRight">
        {
          user?(
            <img className="topImg" src={myImg} alt=""/>
          ):( 
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">REGISTER</Link>
                </li>
              </ul>)
        }
         
          <i className="topSearchIcon fas fa-search-plus"></i>
      </div>
    </div>
  )
}
