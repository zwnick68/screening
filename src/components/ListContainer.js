import React from "react"
// import Description from "./newDescription"
import ExerciseFilter from "./ExerciseFilter"
import List from "./List"
// created list container at 32 min in
const ListContainer = ({data, setData, allData, descModal, setDescModal, descData, setDescData, video, setVideo}) => {
    
    return ( 
    <div>
    {
        data.map((e, id) => {
        return (
            <List video={video} setVideo={setVideo} allData={allData} descData={descData} setDescData={setDescData} descModal={descModal} setDescModal={setDescModal} data = {e}/>
        )
    })
    }
    </div>)
}

export default ListContainer