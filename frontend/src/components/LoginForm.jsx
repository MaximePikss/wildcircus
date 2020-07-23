import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const [formData, setForm] = useState({});
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
    });
  };

  return (
    <form
      onSubmit={(e) => {
        login(e);
      }}
    >
      <input type="text" name="mail" />
      <input type="password" name="pass" />
      <input type="submit" value="Log in!" />
    </form>
  );
}
