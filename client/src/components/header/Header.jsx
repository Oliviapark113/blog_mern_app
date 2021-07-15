import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
          <span className="headerTitlesm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      {/* <img className="headerImg" src="../assets/images/yusong-he-fBeVSk4gAOs-unsplash.jpg" alt=""/> */}
      <img className="headerImg" src="https://t4.ftcdn.net/jpg/01/43/85/77/240_F_143857733_9OcK0EgB1pZzIB1TeeXKCAzQtKQjjgrj.jpg" alt=""/>
    </div>
  )
}
