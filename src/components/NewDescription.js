import React from "react";

const NewDescription = ({data})=> {

    const [name,description,video, muscle_groups, equipment_required, movement_patterns, alternating, side, is_flipped] = [data[0].name, data[0].description, data[0].video.url, data[0].muscle_groups, data[0].equipment_required, data[0].movement_patterns, data[0].is_alternating, data[0].side, data[0].video.is_flipped]

    return (
        <div className="descVideo">
        <div className="info">
            <h1>{name}</h1>
            <h2>How-to:</h2>
            <p>{description}</p>
            {muscle_groups ? <h2>Muscle Groups:</h2> : null}
            <p>{muscle_groups}</p>
            {equipment_required ?<h2>Equipment:</h2> : null}
            <p>{equipment_required}</p>
            {movement_patterns ? <h2>Movements:</h2> : null}
            <p>{movement_patterns}</p>
            <h2>{alternating ? "This exercise alternates" : "This exercise does not alternate."}</h2>
            {side ? <h2>Side:</h2>: null}
            <p>{side.replace('_',' ')}</p>
        </div>
        <video className={is_flipped ? "video" : "flippedVideo"} loop autoPlay>
        <source controls src={video} type='video/mp4'></source>
        </video>
        </div>
    )
}
export default NewDescription