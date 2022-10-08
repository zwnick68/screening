import React from "react"
import {useState} from "react"
// created list around 45 min mark
// import Description from "./newDescription"
const List = ({allData,descData,setDescData, data, descModal,setDescModal}) => {
    
    const [modal,setModal] = useState(false)
    const [name, description, video] = [data.name, data.description]
    const [hovering, setHovering] = useState(false)

//    setDescData(data[0])
//    console.log(data)
//    console.log(data)
    const toggleModal = (e) => {
        // setDescModal(!descModal)
        // setDescData(data)
        console.log(descData[0])
        console.log(data)
        let other;
        let clickedInfo = allData.filter((element)=> {
            // console.log(element)
            if(data == element && data != other) {
                // setDescModal(!descModal)
                other = data
                descData[0] = data
                return data
            }
            else if( data == other) {
                setDescModal(!descModal)
            }
            // else if (data == descData[0]) {
            //     setDescModal(!descModal)
            //     // return data
            // }
            // else return data
            
        })
        setDescData(clickedInfo)
        console.log(data)
        console.log(clickedInfo[0])
        console.log(descData[0])
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
            <h3 value={data} onClick={toggleModal} onMouseOver={hover} onMouseOut={hover}>{name}</h3>
        </div>
        {/* <div>
            {modal ? <Description/> : null}
        </div> */}
    </div>
    )
}

export default List

// finished here at 90 minute mark. 