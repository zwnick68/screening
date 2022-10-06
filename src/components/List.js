import React from "react"
import {useState} from "react"
// created list around 45 min mark
import DescriptionVideo from "./DescriptionVideo"
const List = ({data}) => {
    
    const [modal,setModal] = useState(true)
    const [name, description] = [data.name, data.description]

    const toggleModal = () => {
        setModal(!modal)
        
    }
    
    return ( 
    <div>
        <li onClick={toggleModal}>{name}</li>
        
    </div>
        
    )
}

export default List

// finished here at 90 minute mark. 