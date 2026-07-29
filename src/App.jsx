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
      if (user) {
        const { uid, email, displayName } = user;
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");// we can also use window.location.href
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
