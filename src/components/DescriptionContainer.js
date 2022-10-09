import React from "react";
import NewDescription from "./NewDescription";
const DescriptionContainer = ({data, descModal, setDescModal, descData, setDescData, video, setVideo}) => {
    console.log(descModal)
    // console.log(descData)
    return (
        <div className="descriptionContainer"> 
            { 
            descModal ? <NewDescription data={descData} video={video} setVideo={setVideo}/> : null
            }
        </div>
        
    )
}

export default DescriptionContainer