import React from "react"
import {useState} from "react"
// created list around 45 min mark
// import Description from "./newDescription"
const List = ({allData,descData,setDescData, data, descModal,setDescModal}) => {
    
    const [modal,setModal] = useState(false)
    const [name, description, video] = [data.name, data.description]
   

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
    
    return ( 
        <div className="exercise">
            <h3 key={data.id} onClick={toggleModal}>{name}</h3>
        </div>
    )
}

export default List

// finished here at 90 minute mark. 