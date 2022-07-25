import './App.css';
import {useState} from 'react'
import lightsStore from "./redux/lights/lightsStore";
import stepStore from './redux/steps/stepStore';
import { Provider } from "react-redux";
import Room from './components/Room';
import Steps from './components/Steps';

function App() {
  const [assignment,setAssignment] = useState('Steps')

  const handleChange=()=>{
    if(assignment==='Steps'){
      setAssignment('Lights')
    }
    else{
      setAssignment('Steps')
    }
  }

  return (
      <div className="App">
      <button onClick={handleChange} className='changeButton'>Switch to {assignment} assignment</button>
      {
       (assignment === 'Steps')?
        <>
          <Provider store={lightsStore}>
            <Room/>
          </Provider>
        </>:
        <>
          <Provider store={stepStore}>
            <Steps/>
          </Provider>
        </>
      } 
      </div>
  );
}

export default App;
