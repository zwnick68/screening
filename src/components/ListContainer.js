import React from "react"
import List from "./List"

const ListContainer = ({data, setData, allData, descModal, setDescModal, descData, setDescData, video, setVideo}) => {
    
    return ( 
    <div>
    {
        data.map((e) => {
        return (
            <List value={e} key={e.id} video={video} setVideo={setVideo} allData={allData} descData={descData} setDescData={setDescData} descModal={descModal} setDescModal={setDescModal} data = {e}/>
        )
    })
    }
    </div>)
}

export default ListContainer