import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsTitleUpdate">Update Your Account</span>
              <span className="settingsTitleDelete">Delete Your Account</span>
          </div>
          <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                  <img src="https://cdn.britannica.com/59/94459-050-DBA42467/Skyline-Chicago.jpg" alt=""/>
             <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
              </div>
              <label>Username</label>
              <input type="text" placeholder="Olivia"/>
              <label>Email</label>
              <input type="email" placeholder="oliviaypark113@gmail.com"/>
              <label>Password</label>
              <input type="password" placeholder="password"/>
              <button className="settingsSubmitButton" type="submit">
            Update
          </button>  
          </form>
      </div>
      <Sidebar/>
    </div>
  )
}
