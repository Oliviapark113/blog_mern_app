import "./sidebar.css"

export default function Sidebar() {
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
          <li className="sidebarListItem">
            Life
         </li>
          <li className="sidebarListItem">
            Music
         </li>
          <li className="sidebarListItem">
            Style
         </li>
          <li className="sidebarListItem">
            Sport
         </li>
          <li className="sidebarListItem">
            Tech
         </li>
          <li className="sidebarListItem">
            Cinema
         </li>
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
