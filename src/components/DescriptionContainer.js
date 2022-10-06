import React from "react";
import NewDescription from "./NewDescription";
const DescriptionContainer = ({data, descModal, setDescModal, descData, setDescData}) => {
    console.log(descModal)
    console.log(descData)
    return (
        <div> 
        
            { 
            descModal ? <NewDescription data={descData}/> : null
            }
        </div>
        
    )
}

export default DescriptionContainer