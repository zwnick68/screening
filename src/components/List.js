import React from "react"
import {useState} from "react"
// created list around 45 min mark
// import Description from "./newDescription"
const List = ({allData,descData,setDescData, data, descModal,setDescModal, setVideo}) => {
    
    const [modal,setModal] = useState(false)
    const [name, description, video] = [data.name, data.description]
   

//    setDescData(data[0])
//    console.log(data)
//    console.log(data)
    let other;
    
    const toggleModal = (key) => {
        // setDescModal(!descModal)
        // setDescData(data)
        // console.log(key)
        // console.log(data)
        
        let clickedInfo = allData.filter((element)=> {
            // console.log(data)
            if(data.id == element.id && data !== descData[0] != data  && descModal == false) {
                setDescModal(!descModal)
                // other = data
                // descData[0] = data
                setVideo(element.video.url)
                return element
                
            }
            else if (data.id == element.id && data !== descData[0] != data  && descModal == true){
                setVideo(element.video.url)
                return element
            }
            else if( descData[0] == data) {
                setDescModal(!descModal)
                return data
            }
            // else if (data == descData[0]) {
            //     setDescModal(!descModal)
            //     // return data
            // }
            // else return data
            // other = data
        })
        setDescData(clickedInfo)
        console.log(descData[0])
        console.log(data)
        // console.log(descData[0])
    }
    
    return ( 
        <div className="exercise">
            <h3 key={data.id} onClick={toggleModal}>{name}</h3>
        </div>
    )
}

export default List

// finished here at 90 minute mark. 