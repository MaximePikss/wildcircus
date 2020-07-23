import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);

  const isAuth = () => {
    return isLoggedIn;
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div className="App">
      {isAuth() ? <button onClick={logout}>Log out</button> : <LoginForm />}
    </div>
  );
}

export default App;
