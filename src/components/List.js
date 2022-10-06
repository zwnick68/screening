import React from "react"
import {useState} from "react"
// created list around 45 min mark
// import Description from "./newDescription"
const List = ({allData,descData,setDescData, data, descModal,setDescModal}) => {
    
    const [modal,setModal] = useState(false)
    const [name, description, video] = [data.name, data.description]
    const [hovering, setHovering] = useState(false)
   // console.log(data.video.url)
    const toggleModal = (e) => {
        setDescModal(!descModal)
        console.log(data)
        let clickedInfo = allData.filter((element)=> {
            if (descData == data) setDescModal(!descModal)
            if (data == element)
            return data
        })
        setDescData(clickedInfo)
        console.log(clickedInfo)
    }
    const hover = () => {
        setHovering(!hovering)
        console.log("hoveringgggggggggg")
    }
    // const Description = () => {
    //     return (
    //         <div className="descVideo">
    //         <p>{description}</p>
    //         <video className="video" loop autoPlay>
    //         <source controls src={data.video.url} type='video/mp4'></source>
    //         </video>
    //         </div>
    //     )
    // }
    return ( 
    <div>
        <div className="exercise">
            <h2 value={data.id} onClick={toggleModal} className={hovering ? "hovered" : null} onMouseOver={hover} onMouseOut={hover}>{name}</h2>
        </div>
        {/* <div>
            {modal ? <Description/> : null}
        </div> */}
    </div>
    )
}

export default List

// finished here at 90 minute mark. 