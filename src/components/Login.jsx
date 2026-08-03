import { useState, useRef } from "react";
import Header from "./Header";
import { isValid } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

import { updateProfile } from "firebase/auth";

const Login = () => {
  const [sign, setSign] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [showError, setShowError] = useState(null);

  const dispatch = useDispatch();
  const signToggle = () => {
    setSign(!sign);
  };
  const handleContinue = () => {
    const error = isValid(
      sign,
      email.current.value,
      password.current.value,
      name?.current?.value,
    );
    setShowError(error);
    if (error) return;
    if (!sign) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              // Profile updated!
              // ...

              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
          // ...
          setShowError(error.code + " - " + error.message);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setShowError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <Header isSign={false} />
      <div className="relative h-screen ">
        <img
          className=" absolute inset-0 object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/918dda59-2ae7-4eaa-9be2-8a3ddd979d4e/web/IN-en-20260720-TRIFECTA-perspective_ca5664c9-e7ca-45da-9d85-173740dbae71_large.jpg"
          alt="Failed to load background"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full  bg-black/70"></div>

      <form
        className=" absolute w-[90%] p-12 top-[50%] left-[50%] bg-amber-200 -translate-1/2 rounded-sm flex flex-col gap-6 bg-black/70 text-white max-w-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-4xl">{sign ? "Sign in" : "Sign up"}</h1>
        {!sign && (
          <input
            required
            ref={name}
            className="w-full rounded-md p-2 bg-gray-800 text-white"
            type="text"
            name="Name"
            placeholder="Full name"
          />
        )}
        <input
          required
          ref={email}
          className=" rounded-sm w-full p-2 bg-gray-800"
          type="text"
          name="Email"
          placeholder="Email Address"
        />
        <input
          required
          ref={password}
          className="rounded-sm p-2 w-full bg-gray-800"
          type="Password"
          name="Name"
          placeholder="Password"
        />
        {showError && <p className="text-lg text-red-500">{showError}</p>}
        <button
          className=" rounded-sm p-2  cursor-pointer w-full bg-[#7D08DD] hover:bg-[#7207C9] text-lg font-semibold"
          onClick={handleContinue}
        >
          Continue
        </button>
        <p className="text-gray-400 text-lg">
          {sign ? "New to Cinegpt?" : "Already a user?"}
          <span
            className="text-white ml-1 cursor-pointer"
            onClick={() => {
              setSign(!sign);
              setShowError(null);
              email.current.value = "";
              password.current.value = "";
            }}
          >
            {sign ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
