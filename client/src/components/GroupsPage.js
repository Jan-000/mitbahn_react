import { useState } from 'react';
import jsonData from '../data.json';
import GroupTable from "./GroupTable"

let runningList = [...jsonData]

function GroupsPage () {
  const [groups, setGroups] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [stock, setStock] = useState(false);
  
  const filterList = (incomingList, incomingSearch, incomingStock) => {
    if (incomingStock) {
      incomingList = incomingList.filter(function (str) {
        return str.inStock;
      });
    }
    return incomingList.filter(function (str) {
      return (str.startStation.includes(incomingSearch) || str.endStation.includes(incomingSearch) || str.date.includes(incomingSearch)
      );
    });
  };

  // const filterStock = (e) => {
  //   runningList = [...filterList(jsonData, search, e.target.checked)]
  //   setProducts(runningList);
  //   setStock(e.target.checked);
  // };

  const updateSearch = (e) => {
runningList = [...filterList(jsonData, e.target.value, stock)];
setGroups(runningList)
setSearch(e.target.value)
  }
  
  return (
      <div>
        <h1>Find your group:</h1>
       <label>Search by station or date</label> <input
          id="username"
          type="text"
          placeholder = "search groups"
          value = {search}
          onChange={(e)=>updateSearch(e)}>
        </input>
        <GroupTable groups={groups} />
        <p>groups page</p>
      </div>    
  )
}

export default GroupsPage;