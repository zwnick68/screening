import './App.css';
import ListContainer from './components/ListContainer';
import { useEffect, useState } from 'react';
import DescriptionContainer from './components/DescriptionContainer';
import ExerciseFilter from './components/ExerciseFilter';

function App() {

  const [data,setData] =useState([])
  const [modal, setModal]= useState(false)
  const [allData,setAlldata]=useState([])
  const [descModal, setDescModal] = useState(true)
  const [descData, setDescData] = useState()
  const [video,setVideo] = useState([])

    let request = async () => {
      let req = await fetch('http://localhost:3000/data')
      let res = await req.json()
        setData(res)
        setAlldata(res)
        setDescData(res)
        setVideo(res[0].video.url)
      }

    useEffect(() => {
      request()
      
    },[])
    
    const seeExercises = () => {
      setModal(!modal)
    }
    return (
      <>
      <div className="bar">
          { !modal ? <video className="backgroundVideo" autoPlay muted loop poster=''>
            <source alt="loading" src="../pullups.mp4" type="video/mp4"></source>
          </video> : null}
        <div className="search">
        { modal ? <ExerciseFilter allData={allData} data={data} setData={setData}/> : null}
        <button className="exerciseButton" onClick={seeExercises}>Exercises</button>
        </div>
        
      </div>
      <div className='screen'>
        <div className={ modal ? "leftPane" : "leftPaneFake"}>    
          {
            modal ? <ListContainer video={video} setVideo={setVideo} descData={descData} setDescData={setDescData} descModal={descModal} setDescModal={setDescModal} allData={allData} setAllData={setAlldata} data={data} setData={setData}/> : null
          }
        </div>
        <div>
          {  
            modal ? <DescriptionContainer video={video} setVideo={setVideo} descData={descData} setDescData={setDescData} descModal={descModal} setDescModal={setDescModal} allData={allData} setAllData={setAlldata} data={data} setData={setData}/> : null
          }
        </div>
      </div>
      </>
    );
  }

export default App;
