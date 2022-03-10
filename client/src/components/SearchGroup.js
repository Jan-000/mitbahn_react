import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SearchGroup(props) {
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [date, setDate] = useState("");
  const [allGroups, setAllGroups] = useState(null);

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get("/api/groups/groups", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((groups) => {
        console.log("this is groups", groups);
        setAllGroups(groups);
      });
  }, []);
  console.log("this is allGroups: ", allGroups);

  let dynamicSearch;

  if (allGroups) {
    dynamicSearch = allGroups.data.filter((group) => {
      if (
        group.date.includes(date) &&
        group.endStation.includes(endStation) &&
        group.startStation.includes(startStation)
      )
        return group;
    });
  }

  if (allGroups === null) {
    return <>"Loading.."</>;
  }

  return (
    <>
      <div className="search-train">
        <h1>Search for a train</h1>

        <label htmlFor="startStation">From: </label>
        <input
          id="startStation"
          type="text"
          value={startStation}
          onChange={(e) => setStartStation(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="endStation">To: </label>
        <input
          id="endStation"
          type="text"
          value={endStation}
          onChange={(e) => setEndStation(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="search-dyn-list">
        {dynamicSearch.map((group) => {
          let _id = group._id;
          return (
            <>
              <div className="search-dyn-element">
                <Link to={`/groups/${_id}`} style={{ textDecoration: "none" }}>
                  <h2 className="element-date">Date: {group.date}</h2>
				  
                  <div className="element-stations">
                    <h2 className="from">From:<h2 className="start"> {group.startStation}</h2></h2>
                    <h2 className="to">To:<h2 className="end">{group.endStation}</h2> </h2>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
