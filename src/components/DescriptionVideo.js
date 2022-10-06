import React from "react";
// created DescriptionVideo componenet at 57 minute mark
const DescriptionVideo = ({data})=> {
    const [description, video] = [data.description, data.video.url ]
            return (
        <div>
        <p>{description}</p>
        </div>
    )
}
export default DescriptionVideo