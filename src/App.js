import './App.css';
import Homepage from './Component/Homepage/index'
import { Routes, Route } from "react-router-dom";
import After10 from './Component/CareerGuidance/index'
import StudyAbroad from './Component/CareerGuidance/StudyAbroad'
import Afterstudy from './Component/CareerGuidance/Afterstudy'
import Hiring from './Component/More/Hiring/index'
import Contact from './Component/More/Contact/index'

function App() {
  return (
    <>
      <Routes>      
      <Route path={'/'} element= {<Homepage />} />
      <Route exact path={'/studyabroad'} element= {<StudyAbroad />} />
      <Route exact path={'/after10'} element= {<After10 />} />
      <Route exact path={'/studyabroad/submission'} element= {<Afterstudy />} />
      <Route exact path={'/hiring'} element= {<Hiring />} />
      <Route exact path={'/contact'} element= {<Contact />} />




      </Routes>
    </>
  );
}

export default App;
