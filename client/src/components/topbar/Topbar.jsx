
import "./topbar.css"
import myImg from "./myImage/olivia_intro_1.png"

export default function Topbar() {
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
              <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">WRITE</li>
              <li className="topListItem">LOGOUT</li>
          </ul>
      </div>
      <div className="topRight">
          <img className="topImg" src={myImg} alt=""/>
          <i className="topSearchIcon fas fa-search-plus"></i>
      </div>
    </div>
  )
}
