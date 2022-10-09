import React from "react";
import { useState } from "react";

const ExerciseFilter = ({data,setData,allData,setAllData}) => {
    const [searching,setSearching]= useState('')
    return (
        <>
        <div className="filter">
        {/* <label>Filter your Exercises:</label> */}
        <input type="text" placeholder="Search exercises by name" onChange={(e) => {
            if (!e.target.value) return setData(allData)
            let search = data.filter((element)=>{
                console.log(element)
                if (e.target.value){
                return element.name.toLowerCase().includes(e.target.value.toLowerCase())
                } 
            })
            if(search.length > 0) setData(search)
        }}/>
        </div>
        <>
            {data.length === 0 && <span>Exercise not found</span>}
        </>
        </>
    )
}

export default ExerciseFilter