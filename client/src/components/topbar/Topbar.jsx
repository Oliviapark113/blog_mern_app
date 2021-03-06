import {Link} from "react-router-dom"
import "./topbar.css"
import { Context } from "../../context/Context";
import {useContext} from "react"

export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  
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
              {user && <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>}
          </ul>
      </div>
      <div className="topRight">
        {
          user?(
            <Link to="/settings">
            <img className="topImg" src={user.profilePic? user.profilePic: "../../../assets/images/noAvatar.png"} alt=""/>
            </Link>
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
