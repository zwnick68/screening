import React from "react";

const ExerciseFilter = ({data,setData,allData,setAllData}) => {
    return (
        <>
        <label>Filter your Exercises:</label>
        <input type="text" placeholder="Search exercises" onChange={(e) => {
            if (!e.target.value) return setData(allData)
            let search = data.filter((element)=>{
                return element.name.includes(e.target.value)
            })
            if(search.length > 0) setData(search)
        }}/>
        </>
    )
}

export default ExerciseFilter