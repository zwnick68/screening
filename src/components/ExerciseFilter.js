import React from "react";

const ExerciseFilter = ({data,setData,allData,setAllData}) => {
    return (
        <div className="filter">
        {/* <label>Filter your Exercises:</label> */}
        <input type="text" placeholder="Search exercises" onChange={(e) => {
            if (!e.target.value) return setData(allData)
            let search = data.filter((element)=>{
                return element.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            if(search.length > 0) setData(search)
        }}/>
        </div>
    )
}

export default ExerciseFilter