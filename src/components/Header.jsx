import { Navigate, useNavigate } from "react-router";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";
const Header = ({ isSign }) => {
   const [popUp, setPopUp] = useState(false);
  const user=useSelector((store)=>store.user)
  const navigate = useNavigate();
 
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
          <div className="profile w-8 h-8 m-4" onClick={()=>setPopUp(!popUp)}>
            <img
              src={profile}
              alt="profile"
              className="w-full h-full cursor-pointer"
            />
          </div>
        )}

        {popUp && (
          <div className="fixed w-[90%] p-12 top-[50%] left-[50%]  -translate-1/2 rounded-sm flex flex-col gap-6 bg-black/70 text-white max-w-md z-9">
<h1 className="Profile text-4xl text-white" >Profile</h1>
<p className="text-lg text-gray-300">Name: {user?.displayName}</p>
<p className="text-lg text-gray-300">Email: {user?.email}</p>
<button className="absolute top-4 right-4 " onClick={()=>setPopUp(!popUp)}>❌</button>
                  <button
          className=" rounded-sm p-2  cursor-pointer w-full bg-[#7D08DD] hover:bg-[#7207C9] text-lg font-semibold"
          onClick={handleSignOut}
        >Sign Out</button>
          </div>
        )}
   
      </header>
    </>
  );
};

export default Header;
