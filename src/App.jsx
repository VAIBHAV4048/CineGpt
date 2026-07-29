import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import { Outlet } from "react-router";
import Header from "./components/Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "./utils/userSlice";

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth user:", user);
      if (user) {
        const { uid, email, displayName } = user;
      
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");// we can also use window.location.href
     
      }
    });
  }, []);
  return (
    <>

      <Outlet />
    </>
  );
}

export default App;
