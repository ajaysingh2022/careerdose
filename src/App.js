import './App.css';
import Header from './Component/Header/index'
import Homepage from './Component/Homepage/index'
import Accur from "./Component/Accup/index"

function App() {
  return (
    <>
      
      <div className='App'>
      <Header />
      <Homepage />
      </div>
      <div>
        <Accur />
      </div>
      
    </>
  );
}

export default App;
