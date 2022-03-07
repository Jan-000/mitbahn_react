import React from "react";
import GroupRow from "./GroupRow"

export default function GroupTable(props){
    return(
       <div> <GroupRow groups={props.groups} />
       <p>GroupTable.js</p>
       </div>
        
    )
}
