import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer';
import { useEffect, useState } from 'react';
function App() {
const [data,setData] =useState([])
const [modal, setModal]= useState(false)
const [allData,setAlldata]=useState([])

  let request = async()=>{
    let req = await fetch('http://localhost:3000/data')
    let res = await req.json()
      setData(res)
      setAlldata(res)
    }

  useEffect(() => {
    request()
  },[])
  console.log(data)
  // completed fetch at 37 minute mark

  const seeExercises = () => {
    setModal(!modal)
  }
  return (
   <div>
    <button onClick={seeExercises}>Exercises</button>
    {
     modal ? <ListContainer allData={allData} setAllData={setAlldata} data={data} setData={setData}/> : null
    }
    </div>
  );
}

export default App;
