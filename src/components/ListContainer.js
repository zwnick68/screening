import React from "react"
import List from "./List"
// created list container at 32 min in
const ListContainer = ({data, setData}) => {
    return ( 
    <div>
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