import React from "react";

const NewDescription = ({data})=> {
    const [name,description,video, muscle_groups, equipment_required, movement_patterns, alternating, side] = [data[0].name, data[0].description, data[0].video.url, data[0].muscle_groups, data[0].equipment_required, data[0].movement_patterns, data[0].is_alternating, data[0].side]
    console.log(video)
    return (
        <div className="descVideo">
        <div className="info">
            <h1>{name}</h1>
            <h2>How-to:</h2>
            <p>{description}</p>
            <h2>Muscle Groups</h2>
            <p>{muscle_groups}</p>
            <h2>Equipment</h2>
            <p>{equipment_required}</p>
            <h2>Movement</h2>
            <p>{movement_patterns}</p>
            <h2>{alternating ? "This exercise alternates" : "This exercise does not alternate."}</h2>
            <h2>{side ? `Side: ${side}`: null}</h2>
        </div>
        <video className="video" loop autoPlay>
        <source controls src={data[0].video.url} type='video/mp4'></source>
        </video>
        </div>
    )
}
export default NewDescription