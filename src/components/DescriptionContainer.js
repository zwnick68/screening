import React from "react";
import Description from "./Description";

const DescriptionContainer = ({data, descModal, setDescModal, descData, setDescData, video, setVideo}) => {
    
    return (
        <div className="descriptionContainer"> 
            { 
            descModal ? <Description data={descData} video={video} setVideo={setVideo}/> : null
            }
        </div>
        
    )
}

export default DescriptionContainer