import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer';
import { useEffect, useState } from 'react';
import DescriptionContainer from './components/DescriptionContainer';
function App() {
const [data,setData] =useState([])
const [modal, setModal]= useState(false)
const [allData,setAlldata]=useState([])
const [descModal, setDescModal] = useState(false)
const [descData, setDescData] = useState()

  // console.log(descData)
  let request = async()=>{
    let req = await fetch('http://localhost:3000/data')
    let res = await req.json()
      setData(res)
      setAlldata(res)
      setDescData(res)
    }

  useEffect(() => {
    request()
    
  },[])
  // console.log(data)
  // completed fetch at 37 minute mark
  
  const seeExercises = () => {
    setModal(!modal)
  }
  return (
    <div className='screen'>
      <div className="leftPane">
        <button className="exerciseButton" onClick={seeExercises}>Exercises</button>
        {
        modal ? <ListContainer descData={descData} setDescData={setDescData} descModal={descModal} setDescModal={setDescModal} allData={allData} setAllData={setAlldata} data={data} setData={setData}/> : null
        }
      </div>
      <div>
        {  
          modal ? <DescriptionContainer descData={descData} setDescData={setDescData} descModal={descModal} setDescModal={setDescModal} allData={allData} setAllData={setAlldata} data={data} setData={setData}/> : null
        }
      </div>
    </div>
  );
}

export default App;
