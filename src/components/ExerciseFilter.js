import React from "react";

const ExerciseFilter = ({data,setData,allData}) => {
    
    const excludeColumns = ['id','synonyms','is_alternating','video','audio']

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
                if (!e.target.value) return setData(allData)
                // console.log(typeof data[0].synonyms)
                // let query = e.target.value.toLowerCase()
                let search = data.filter((item) =>{
                    return Object.keys(item).some((key) => {
                        return excludeColumns.includes(key) ? false : JSON.stringify(item[key]).toLowerCase().includes(e.target.value.toLowerCase())
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