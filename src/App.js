import './App.css';
import Header from './Component/Header/index'
import Homepage from './Component/Homepage/index'
import Accur from "./Component/Accup/index"
import { Routes, Route } from "react-router-dom";
import After10 from './Component/CareerGuidance/index'
import StudyAbroad from './Component/CareerGuidance/StudyAbroad'

function App() {
  return (
    <>
      {/* <Routes> */}
      {/* <div className='App'>
      <Header />
      <Homepage />
      </div>
      <div>
        <Accur />
      </div> */}
      <div>
        {/* <After10 /> */}
        <StudyAbroad />
      </div>
      {/* </Routes> */}
    </>
  );
}

export default App;
