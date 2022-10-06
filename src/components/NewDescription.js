import React from "react";

const NewDescription = ({data})=> {
    const [description,video] = [data[0].description, data[0].video.url]
    console.log(video)
    return (
        <div className="oi">
        <p>{description}</p>
        <video className="video" loop autoPlay>
        <source controls src={video} type='video/mp4'></source>
        </video>
        </div>
    )
}
export default NewDescription