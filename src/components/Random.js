import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
import { UseGif } from '../hooks/UseGif';

const Random = () => {  

//   const [gifs,setGif]=useState('');
//   const [loading,setLoading]= useState(false);

//   async function fetchData(){
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=hk8kdZc3xTcqQrH5OnR6EWMA10EThkPn&tag=&rating=g`;
//     const {data}= await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false);
//   }
  
//   useEffect(()=>{
//     fetchData();
//   },[])

  const {gifs,loading,fetchData}=UseGif();

  function clickHandler(){
    fetchData();
  }  
  return (
    <div className='w-1/2 bg-green-400 rounded-lg boarder border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Randum Gif</h1>

        {
            loading ?(<Spinner/>):(<img src={gifs} width={450}/>)
        }

        <button onClick={clickHandler}
        className='mb-[20px] w-10/12 bg-yellow-200 text-lg py-2 rounded-lg'>
            Generate
        </button>
    </div>
  )
}

export default Random