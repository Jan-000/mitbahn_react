import React from "react";

export default function GroupRow(props) {
 return props.groups.map((group) => {
     return (<div><p>
     From: {group.endStation} | 
     To: {group.startStation} |
     Date: {group.date}
     </p>
     <p>ProductRow</p></div>) 
     
     
     })
    


}