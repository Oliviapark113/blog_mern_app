import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Settings() {

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
   
      try {
        const res = await axios.post("/api/upload", data);
        console.log(res.data)
        updatedUser.profilePic  = res.data.avatar

      } catch (err) 
      {console.log(err) }
    }
    try {
      const res = await axios.put("/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={
              file ? URL.createObjectURL(file) 
              :user.profilePic? user.profilePic: "../../../assets/images/noAvatar.png"
              } alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username}
            onChange={e => setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Please enter your password"
            onChange={e => setPassword(e.target.value)} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Profile has been updated..</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
