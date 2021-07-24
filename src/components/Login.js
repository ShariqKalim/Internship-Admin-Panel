import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FooterAll from "./FooterAll";

const Login = () => {
  useEffect(() => {
    localStorage.setItem("Email", process.env.React_App_EMAIL);
    localStorage.setItem("Password", process.env.React_App_PASSWORD);
  }, []);
  const history = useHistory();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  // console.log(email);
  // console.log(password);
  let localEmail = localStorage.getItem("Email");
  let localPassword = localStorage.getItem("Password");
  const formSubmitted = (e) => {
    e.preventDefault();
    if (email === localEmail && password === localPassword) {
      history.push("/adminpanel");
      sessionStorage.setItem("token", process.env.React_App_TOKEN);
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        <img src="images/S.png" alt="smartcollege Logo" className="mx-auto" />
        <h1
          id="welcomenote"
          className="text-2xl font-medium text-white p-3 mt-5 rounded-md bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"
        >
          Welcome to smartcollege
        </h1>
        <div>
          <form onSubmit={formSubmitted}>
            <div className="flex" id="media1">
              <div>
                <img
                  src="images/front_1.jpg"
                  alt="login image"
                  className="w-10/12 mt-10"
                  id="media2"
                />
              </div>

              <div className="w-full mt-8 mr-10 shadow-2xl p-10 pt-10">
                <h1 className="text-white text-lg text-center bg-gradient-to-l from-indigo-400 to-blue-600 p-2 font-medium mb-10 rounded-md">
                  Internship Admin Panel
                </h1>
                {/* <h1 className="text-xl text-white font-medium text-center bg-gradient-to-r from-green-500 to-blue-600 p-3 mb-10">
                  Login Here
                </h1> */}
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="enter email"
                  className=" border-2 p-3 mb-10 w-full"
                  onChange={(e) => getEmail(e)}
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="enter password"
                  className=" border-2 p-3 w-full"
                  onChange={(e) => getPassword(e)}
                  required
                />
                <button className="p-3 text-white text-xl rounded-md font-medium bg-gradient-to-r from-green-600 to-green-500 w-full mt-10">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        <h1 className="leading-12 py-3 w-full mt-16 bg-gray-800 text-center text-white">
          Copyright Reserved &copy; 2021 - smartcollege
        </h1>
      </div>
    </>
  );
};

export default Login;
