import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { CgProfile, CgLock } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  axios.defaults.baseURL = "http://127.0.0.1:4000/api/v1";
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandeler = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="register__container"
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post("/users/signup", { ...userInfo })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }}
    >
      <div className="register">
        <div className="register__header">
          <h3 className="header3">Sign Up</h3>
          <div className="header__close">
            <IconContext.Provider value={{ color: "blue" }}>
              <AiOutlineClose />
            </IconContext.Provider>
          </div>
        </div>
        <div className="register__access">
          <div className="relative">
            <IconContext.Provider
              value={{ color: "#277ffe", className: "icons", size: "18px" }}
            >
              <CgProfile className="icon" />
            </IconContext.Provider>

            <input
              name="name"
              required
              type="text"
              className=" register__input"
              placeholder="Full Name"
              onChange={changeHandeler}
            />
          </div>
          <div className="relative">
            <IconContext.Provider
              value={{ color: "#277ffe", className: "icons", size: "18px" }}
            >
              <AiOutlineMail className="icon" />
            </IconContext.Provider>
            <input
              name="email"
              type="email"
              className=" register__input"
              placeholder="Email"
              required
              onChange={changeHandeler}
            />
          </div>
          <div className="relative">
            <IconContext.Provider
              value={{ color: "#277ffe", className: "icons", size: "18px" }}
            >
              <CgLock className="icon" />
            </IconContext.Provider>
            <input
              required
              name="password"
              type="password"
              className=" register__input"
              onChange={changeHandeler}
              placeholder="Password"
            />
          </div>
          <div className="relative">
            <IconContext.Provider
              value={{ color: "#277ffe", className: "icons", size: "18px" }}
            >
              <CgLock className="icon" />
            </IconContext.Provider>
            <input
              required
              name="confirmPassword"
              type="password"
              className=" register__input"
              onChange={changeHandeler}
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="register__button register__button--blue"
          >
            Sign Up
          </button>
          <p className="register__or">or sign in with</p>
          <button className="register__button register__button--black">
            Google
          </button>
        </div>
        <p className="register__signin">
          Already a member? <a href="#">sign in</a>
        </p>
      </div>
    </form>
  );
};

export default Signup;
