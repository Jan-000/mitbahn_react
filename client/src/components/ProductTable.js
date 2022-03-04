import React from "react";
import ProductRow from "./ProductRow"

export default function ProductTable(props){
    return(
       <div> <ProductRow groups={props.groups} />
       <p>ProductTable.js</p>
       </div>
        
    )
}
