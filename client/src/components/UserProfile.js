import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function UserProfile() {

  const storedToken = localStorage.getItem("authToken");
  const [user, setUser] = useState(null);
  const {
    isLoggedIn,
    logoutUser,
    user: userFromAuth,
  } = useContext(AuthContext);
  const id = userFromAuth._id;

  useEffect(() => {
    console.log(id);
    axios
      .get(`/api/auth/user/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (user) {
    return (
      <div>
        <h3>User profile of {user.name}</h3>
        {console.log(user)}
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Mail: {user.email}</h3>
          <h3>Password: ********</h3>
        </div>
        <Link to={`../userprofileedit/${user._id}`}>
          <button className='groupdetails-btn'>EditProfile</button>
        </Link>
      </div>
    );
  } else {
    return <>err</>;
  }
}