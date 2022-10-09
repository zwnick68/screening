import React from "react";
import { useState } from "react";

const ExerciseFilter = ({data,setData,allData,setAllData}) => {
    // const [searching,setSearching]= useState('')
    // console.log(data)

    // const handleChange = value => {
    //     // setSearching(value)
    //     filterData(value)
    // }
    // const excludeColumns = ['id','synonyms','is_alternating','video','audio']

    // const filterData = value => {
    //     const lowerCaseValue = value.toLowerCase().trim()
    //     console.log(lowerCaseValue)
    //     if (!lowerCaseValue){
    //         setData(allData)
    //     }
    //     else {
    //         let filteredData = data.filter(item => {
    //             console.log(Object.values(item))
    //             return Object.values(item)
    //             // .find(key => {
    //             //     console.log(key)
    //             //     return item[key].toString().toLowerCase().includes(lowerCaseValue)
    //             // })
    //         })
    //         setData(filteredData)
    //     }
    // }

    return (
        <>
        <div className="filter">
        
        {/* <input type="text" placeholder="Search exercises by name" onChange={(e) => {
            if (!e.target.value) return setData(allData)
            let search = data.filter((element)=>{
                // let desc = JSON.stringify(element.description).toLowerCase()
                // console.log(desc)
                if (e.target.value){
                return element.name.includes(e.target.value.toLowerCase())
                } 
            })
            if(search.length > 0) setData(search)
        }}/> */}
        {
            <input type="text" placeholder="search by name, description, muscle group etc..." onChange={(e) => {
                if (!e.target.value) return setData(data)
                // console.log(typeof data[0].synonyms)
                // let query = e.target.value.toLowerCase()
                let search = data.filter((item) =>{
                    return Object.keys(item).some((key) => {
                        return JSON.stringify(item[key]).toLowerCase().includes(e.target.value.toLowerCase())
                    })
                })
                setData(search)
            }}>
            </input>
        }
        </div>
        {/* <div className="span">
        {data.length === 0 && <span>Exercise not found</span>}
        </div> */}
        </>
    )
}

export default ExerciseFilter