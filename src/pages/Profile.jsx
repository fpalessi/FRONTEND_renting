import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CarPage from "./CarPage";

const Profile = () => {
  const { currentUser, setCurrentUser } = useAuth();

  const navigate = useNavigate();

  let { subpage } = useParams();

  //   if (!ready) {
  //     return "Loading...";
  //   }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (subpage === undefined) {
    subpage = "profile";
  }

  const logOut = async () => {
    console.log("clicked logout");
    await axios.post("/logout");
    navigate("/");
    setCurrentUser(null);
  };

  const activeClass = (type = null) => {
    let classes = "py-2 px-6";
    if (type === subpage || (subpage === undefined && type === "profile")) {
      classes += " bg-primary rounded-full text-white";
    }
    return classes;
  };

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8 ">
        {" "}
        <Link to="/acc/" className={activeClass("profile")}>
          My profile
        </Link>
        <Link to="/acc/bookings" className={activeClass("bookings")}>
          My bookings
        </Link>
        <Link to="/acc/cars" className={activeClass("cars")}>
          My cars
        </Link>
      </nav>
      {subpage === "cars" && <CarPage />}
    </div>
  );
};

export default Profile;
