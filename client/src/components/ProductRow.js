import React from "react";

export default function ProductRow(props) {
 return props.groups.map((group) => {
     return (<div><p>
     From: {group.endStation} | 
     To: {group.startStation} |
     Date: {group.date}
     </p>
     <p>ProductRow</p></div>) 
     
     
     })
    


}