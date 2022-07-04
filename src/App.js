import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotLoggedInSidebar from "./component/NotLoggedInSidebar";
import Rightsidebar from "./component/Rightsidebar";
import Sidebar from "./component/Sidebar";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Input from "./component/textEditor/Input";
import Home from "./component/Home";
import "./sass/main.scss";
import ProtectedRouterNotSignedUp from "./component/ProtectedRouterNotSignedUp";
import { useLocation } from "react-router-dom";
import ProtectedRouterSignedIn from "./component/ProtectedRouterSignedIn";
import BookMark from "./Pages/BookMark";
import Notification from "./Pages/Notification";
import RenderBlog from "./component/RenderBlog";
function App() {
  const [isSignedIn] = useState(true);
  const location = useLocation();
  return (
    <div className="App">
      {isSignedIn ? "" : <NotLoggedInSidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRouterNotSignedUp isSignedIn={isSignedIn} />}>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRouterSignedIn isSignedIn={isSignedIn} />}>
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/input" element={<Input />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/renderedblog" element={<RenderBlog />} />
        </Route>
      </Routes>

      {isSignedIn & !(location.pathname === "/input") ? <Rightsidebar /> : ""}
      {isSignedIn & !(location.pathname === "/input") ? <Sidebar /> : ""}
    </div>
  );
}

export default App;
