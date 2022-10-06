import React from "react"
import {useState} from "react"
// created list around 45 min mark
import DescriptionVideo from "./DescriptionVideo"
const List = ({data}) => {
    
    const [modal,setModal] = useState(false)
    const [name, description, video] = [data.name, data.description]
    const [hovering, setHovering] = useState(false)
   // console.log(data.video.url)
    const toggleModal = () => {
        setModal(!modal)
        
    }
    const hover = () => {
        setHovering(!hovering)
        console.log("hoveringgggggggggg")
    }
    const Description = () => {
        return (
            <>
            <p>{description}</p>
            <video loop autoPlay>
            <source controls onload='this.play()' src={data.video.url} type='video/mp4'></source>
            </video>
            </>
        )
    }
    return ( 
    <div>
        <li onClick={toggleModal} className={hovering ? "hovered" : null} onMouseOver={hover} onMouseOut={hover}>{name}</li>
        {modal ? <Description/> : null}
    </div>
    )
}

export default List

// finished here at 90 minute mark. 