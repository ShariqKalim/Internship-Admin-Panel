import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import FooterAll from "./FooterAll";
import axios from "axios";

const Adminpanel = () => {
  const [infos, setInfos] = useState([]);
  const history = useHistory();
  useEffect(() => {
    let tokens = sessionStorage.getItem("token");

    if (tokens) {
    } else {
      history.push("/");
    }
    const loadApi = async () => {
      try {
        const info = await axios.get(process.env.React_App_API_LINK);
        setInfos(info.data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    loadApi();
  }, []);
  const logout = () => {
    sessionStorage.removeItem("token");
    history.push("/");
  };

  const [card, setCard] = useState({
    topic: "",
    main: "",
    link: "",
    date: "",
    ratings: "",
  });
  const onTextFieldChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.React_App_API_LINK, card);
      setTimeout(() => {
        history.push("/");
      }, 10);
      setTimeout(() => {
        history.push("/adminpanel");
      }, 12);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(process.env.React_App_API_LINK + "/" + id);
    let newinfo = infos.filter((item) => {
      return item.id !== id;
    });
    setInfos(newinfo);
  };

  return (
    <>
      <div
        className="w-2/12 h-full bg-gradient-to-b from-gray-400 via-gray-600 to-gray-400 absolute "
        id="responsivePanel"
      >
        <h5 className="text-white font-medium my-3 text-center">
          User - Admin of Internship dept
        </h5>
        <button className="mt-4 w-10/12">
          <a
            href="#"
            className=" p-2 text-md text-white border-white border-2 rounded-md"
          >
            contact smartcollege
          </a>
        </button>
        <div className="w-11/12 bg-white p-2 h-52 mx-auto my-10">
          <h4 className="text-center font-medium text-md border-b-2 border-blue-600">
            contact details
          </h4>
          <h6 className="text-sm  my-4 bg-green-600 text-white font-medium p-2 rounded-md text-center">
            contactsmartcollege@gmail.com
          </h6>
          <h6 className="text-center">or</h6>
          <h6 className="bg-green-600 text-white font-medium p-2 rounded-md text-center">
            contact Head Admin
          </h6>
        </div>
        <button
          onClick={logout}
          className="text-black text-md font-medium p-2 w-10/12 mx-4 rounded-md bg-white"
        >
          Logout
        </button>
      </div>
      <div>
        <button id="responsivePanel4" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="w-10/12 float-right shadow-sm" id="responsivePanel1">
        <h1
          className="w-full text-white p-3 text-3xl font-medium bg-gradient-to-r from-yellow-500  to-yellow-400"
          id="responsivePanel3"
        >
          Welcome to Admin Panel
        </h1>
        <div className="shadow-xl mt-5 p-5">
          <form>
            <input
              type="text"
              placeholder="Topic"
              className="p-2 w-full border-4 rounded-lg mb-5"
              name="topic"
              onChange={(e) => onTextFieldChange(e)}
              autoComplete="off"
              required
            />
            <input
              type="text"
              placeholder="Paragraph"
              className="p-2 w-full border-4 rounded-lg mb-5"
              name="main"
              onChange={(e) => onTextFieldChange(e)}
              autoComplete="off"
              required
            />
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Link"
                className="mb-5 border-4 p-2 rounded-lg w-6/12"
                name="link"
                onChange={(e) => onTextFieldChange(e)}
                autoComplete="off"
                required
              />
              <input
                type="text"
                placeholder="Date"
                className="mb-5 border-4 p-2 rounded-lg w-5/12"
                name="date"
                onChange={(e) => onTextFieldChange(e)}
                autoComplete="off"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Ratings"
              className="p-2 w-full border-4 rounded-lg"
              name="ratings"
              onChange={(e) => onTextFieldChange(e)}
              autoComplete="off"
              required
            />
            <div className="flex flex-row-reverse">
              <button
                onClick={(e) => onFormSubmit(e)}
                className="w-72 text-xl font-medium tracking-wider bg-gradient-to-l from-blue-900 to-blue-700 p-2 text-white rounded-md mt-3"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="p-7">
          <h1 className="text-center text-3xl tracking-wider text-blue-600  bg-white border-2 border-blue-600 p-3">
            Collections
          </h1>
          <div className="w-full h-72 overflow-y-scroll">
            {infos.map((currElem, i) => {
              const { id, topic, main, link, date, ratings } = currElem;
              return (
                <>
                  <div
                    className="flex flex-col p-5 shadow-2xl my-10 w-full mx-auto"
                    key={id}
                  >
                    <h6 className="text-lg  text-green-900 font-medium">
                      Serial No :
                      <span className="text-gray-900 ml-8">{id} </span>
                    </h6>
                    <h6 className="text-lg  text-green-900 font-medium">
                      Topic :<span className="text-gray-900 ml-8">{topic}</span>
                    </h6>
                    <h6 className="text-lg  text-green-900 font-medium">
                      Para :<span className="text-gray-900 ml-8">{main}</span>
                    </h6>
                    <h6 className="text-lg  text-green-900 font-medium">
                      Link :<span className="text-gray-900 ml-8">{link}</span>
                    </h6>
                    <h6 className="text-lg  text-green-900 font-medium">
                      Date :<span className="text-gray-900 ml-8">{date}</span>
                    </h6>
                    <h6 className="text-lg  text-green-900 font-medium">
                      Ratings :
                      <span className="text-gray-900 ml-5">{ratings}</span>
                    </h6>
                    <button
                      className="bg-red-500 text-white w-10 ml-auto p-1 "
                      onClick={() => handleDelete(id)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <FooterAll />
      </div>
    </>
  );
};

export default Adminpanel;
