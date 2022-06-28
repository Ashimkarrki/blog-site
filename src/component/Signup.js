import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { CgProfile, CgLock } from "react-icons/cg";
import { IconContext } from "react-icons";

const Signup = () => {
  return (
    <div className="register__container">
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
              type="text"
              className=" register__input"
              placeholder="Full Name"
            />
          </div>
          <div className="relative">
            <IconContext.Provider
              value={{ color: "#277ffe", className: "icons", size: "18px" }}
            >
              <AiOutlineMail className="icon" />
            </IconContext.Provider>
            <input
              type="email"
              className=" register__input"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <IconContext.Provider
              value={{ color: "#277ffe", className: "icons", size: "18px" }}
            >
              <CgLock className="icon" />
            </IconContext.Provider>
            <input
              type="password"
              className=" register__input"
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
              type="password"
              className=" register__input"
              placeholder="Confirm Password"
            />
          </div>
          <button className="register__button register__button--blue">
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
    </div>
  );
};

export default Signup;
