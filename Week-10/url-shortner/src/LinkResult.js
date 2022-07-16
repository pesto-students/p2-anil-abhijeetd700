import React, { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

const LinkResult = ({inputValue}) => {
   
    const [shortenLink,setShortenLink] = useState('')
    const [copy,setCopy] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
          setCopy(false)
        },1000)
        return(()=>clearTimeout(timer))
    },[copy])

    const fetchData = async ()=>{
        try{
            let res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortenLink(res.data.result.full_short_link)
         }
         catch(e){
            setError(true)
         }
    }

    useEffect(()=>{
        fetchData()
    },[inputValue])

  
    return (
        <>
        {
        shortenLink && 
        <div className='result'>
            <p>{shortenLink}</p>
            <CopyToClipboard 
            text={shortenLink}
            onCopy={()=>setCopy(true)}>
                <button className={copy?'copied':''}>Copy to clipboard</button>
            </CopyToClipboard>
        </div>
        }
        </>
    )
}

export default LinkResult