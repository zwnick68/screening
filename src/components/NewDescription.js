import React from "react";

const NewDescription = ({data})=> {
    const [name,description,video] = [data[0].name, data[0].description, data[0].video.url]
    console.log(video)
    return (
        <div className="descVideo">
        <div className="info">
        <h1>{name}</h1>
        <h3>How-to:</h3>
        <p>{description}</p>
        </div>
        <video className="video" loop autoPlay>
        <source controls src={data[0].video.url} type='video/mp4'></source>
        </video>
        </div>
    )
}
export default NewDescription