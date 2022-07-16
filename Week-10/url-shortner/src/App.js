import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShotner from './InputShotner';
import LinkResult from './LinkResult';

function App() {
  const [inputValue,setInputValue] = useState('')
  
  return (
    <div className="container">
      <InputShotner setInputValue={setInputValue}/>
      <BackgroundAnimate/>
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
