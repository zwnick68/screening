import React from "react"
import ExerciseFilter from "./ExerciseFilter"
import List from "./List"
// created list container at 32 min in

const ListContainer = ({data, setData, allData}) => {
    return ( 
    <div>
        <ExerciseFilter allData={allData} data={data} setData={setData}/>
    {
        data.map((e) => {
        return (
            <List data = {e}/>
        )
    })
    }
    </div>)
}

export default ListContainer