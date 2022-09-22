import './App.css';
import Homepage from './Component/Homepage/index'
import { Routes, Route } from "react-router-dom";
import After10 from './Component/CareerGuidance/index'
import StudyAbroad from './Component/CareerGuidance/StudyAbroad'

function App() {
  return (
    <>
      <Routes>      
      <Route path={'/'} element= {<Homepage />} />
      <Route exact path={'/studyabroad'} element= {<StudyAbroad />} />
      <Route exact path={'/after10'} element= {<After10 />} />
      </Routes>
    </>
  );
}

export default App;
