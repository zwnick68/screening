import React from "react";
import { useState } from "react";

const Description = ({data, video,setVideo})=> {

    const [modal,setModal] = useState(false)
    const [id,name,description, muscle_groups, equipment_required, movement_patterns, alternating, side, is_flipped,audio] = [data[0].id, data[0].name, data[0].description,  data[0].muscle_groups, data[0].equipment_required, data[0].movement_patterns, data[0].is_alternating, data[0].side, data[0].video.is_flipped, data[0].audio.url]
    
    const restOfInfo = () => {
        setModal(!modal)
    }
    
    return (
        <div className="descVideo">
            <div className="exerciseVid">
            <video key={id} className={is_flipped ? "video" : "flippedVideo"} loop autoPlay>
            <source src={video} controls type='video/mp4'></source>
            </video>
            </div>
        <div className="info">
            <h1>{name}</h1>
            <h2>How-to:</h2>
            <p>{description}</p>
            <button className="moreInfo" onClick={restOfInfo}>{modal ? "less" : "more"}</button>
            {modal ? 
            <>
                {muscle_groups ? <h2>Muscle Groups:</h2> : null}
                <p>{muscle_groups}</p>
                {equipment_required ?<h2>Equipment:</h2> : null}
                <p>{equipment_required}</p>
                {movement_patterns ? <h2>Movements:</h2> : null}
                <p>{movement_patterns}</p>
                {side ? <h2>Side:</h2>: null}
                <p>{side.replace('_',' ')}</p>
                <h2>{alternating ? "This exercise alternates" : null}</h2>
                <audio controls src={audio}></audio>
            </>: null}
            
        </div>
            
        </div>
    )
}
export default Description