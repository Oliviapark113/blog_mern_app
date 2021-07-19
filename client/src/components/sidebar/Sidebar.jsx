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
        <img src="../assets/images/img_2.jpg" alt="" />
        <p>
          I am Olivia (Youngmee) Park, I am a passionate coder with fashion designer background NYC. 
          I am happy to see you all in here at my react blog App. 
          Enjoy features I have ..I still work in progress to add more feature. 
          
         </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>
          <Link to={`/?cat=${c.name}`} key={c._id} className="link">
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
