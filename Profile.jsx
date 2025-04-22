
import { Link } from "react-router-dom";

import "./Profile.css";
const Profile = () => {

  return (
    <>


      <div className="main-profile">
        <div className="profile">
          <ul>
          <Link to="/"style={{textDecoration:"none"}}><li>Home</li></Link>
          <Link to="/contact" style={{textDecoration:"none"}}><li>Contact Us</li></Link>
          <Link to="/about"style={{textDecoration:"none"}}><li>About</li></Link>
          <Link to="/login" style={{textDecoration:"none"}}><li>Login</li></Link>
          <Link to="/signup" style={{textDecoration:"none"}}><li>SignUp</li></Link>
     
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
