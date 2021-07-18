import "./sidebar.css"
import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async () =>{
      const res = await axios.get("/categories")
        setCats(res.data)
    }
    getCats()
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="../assets/images/olivia_sidebar2.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vel! Modi, maxime nam. Non sapiente fuga accusamus praesentium temporibus ipsa obcaecati, amet nostrum, accusantium reiciendis asperiores necessitatibus ea, maxime facilis.
         </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>
          <Link to={`/?cat=${c.name}`} className="link">
         <li className="sidebarListItem">
            {c.name}
         </li>
          </Link>
       
         )}
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          FOLLOW US
         </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
