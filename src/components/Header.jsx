import { Navigate, useNavigate } from "react-router";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
const Header = ({ isSign }) => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
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
          <div className="profile w-8 h-8 m-4" onClick={setPopUp(true)}>
            <img
              src={profile}
              alt="profile"
              className="w-full h-full cursor-pointer"
            />
          </div>
        )}

        {popUp && (
          <div className="absolute w-[90%] p-12 top-[50%] left-[50%] bg-amber-200 -translate-1/2 rounded-sm flex flex-col gap-6 bg-black/70 text-white max-w-md z-9">

                  <button
          className=" rounded-sm p-2  cursor-pointer w-full bg-[#A53DFC] hover:bg-[#9234df] text-lg font-semibold"
          onClick={handleSignOut}
        ></button>
          </div>
        )}
   
      </header>
    </>
  );
};

export default Header;
