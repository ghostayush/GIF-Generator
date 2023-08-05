import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
import { UseGif } from '../hooks/UseGif';

const Tag = () => {  

  const [tag,setTag]= useState('');
  const {gifs,loading,fetchData}=UseGif(tag);
//   const [gifs,setGif]=useState('');
//   const [loading,setLoading]= useState(false);

//   async function fetchData(){
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=hk8kdZc3xTcqQrH5OnR6EWMA10EThkPn&tag=${tag}`;
//     const {data}= await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false);
//   }
  
//   useEffect(()=>{
//     fetchData();
//   },[])

  function clickHandler(){
    fetchData();
  }  

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className='w-1/2 bg-blue-400 rounded-lg boarder border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Randum {tag} Gif</h1>

        {
            loading ?(<Spinner/>):(<img src={gifs} width={450}/>)
        }
        
        <input
            className='w-10/12 text-lg py-2 rounded-lg'
            onChange={changeHandler}
            value={tag}
        />
        <button onClick={clickHandler}
        className='mb-[20px] w-10/12 bg-yellow-200 text-lg py-2 rounded-lg'>
            Generate
        </button>
    </div>
  )
}

export default Tag