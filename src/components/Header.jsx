import { Navigate, useNavigate } from "react-router";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import { auth } from "../utils/firebase";


const Header = ({ isSign }) => {
  const navigate=useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  return (
    <>
      <header
        className={`w-full ${isSign ? "relative" : "absolute"} flex justify-between   z-10`}
      >
        <div className="logo m-4">
          <img className="w-24 lg:w-36" src={logo} alt="" />
        </div>
        {isSign && (
          <div className="profile w-8 h-8 m-4" onClick={handleSignOut}>
            <img
              src={profile}
              alt="profile"
              className="w-full h-full cursor-pointer"
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
