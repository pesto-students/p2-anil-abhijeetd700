import React, { useState } from 'react'

function InputShotner({setInputValue}) {
  const [value,setValue] = useState('')

  const handleChange=()=>{
    setInputValue(value)
    setValue('')
  }

  const handleKeypress=(e)=>{

    // triggers by pressing the enter key
    if(e.key==='Enter'){
      handleChange()
    }

  }
  
  return (
    <div className='inputContainer'>
        <h1>URL <span>shortner</span></h1>
        <div>
            <input 
                  type='text' 
                  placeholder='Enter the URL to shorten'
                  value={value}
                  onChange={(e)=>setValue(e.target.value)}
                  onKeyPress={handleKeypress}/>
            <button onClick={handleChange}>Shorten</button>
        </div>
    </div>
  )
}

export default InputShotner