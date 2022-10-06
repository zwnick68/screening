import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer';
import { useEffect, useState } from 'react';
function App() {
const [data,setData] =useState([])

  let request = async()=>{
    let req = await fetch('http://localhost:3000/data')
    let res = await req.json()
      setData(res)
    }

  useEffect(() => {
    request()
  },[])
  console.log(data)
  // completed fetch at 37 minute mark
  return (
   <div>
   <ListContainer data={data} setData={setData}/>
    </div>
  );
}

export default App;
