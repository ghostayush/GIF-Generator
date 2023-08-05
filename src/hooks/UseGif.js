import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

export const UseGif = (tag) => {

    const randomurl=`https://api.giphy.com/v1/gifs/random?api_key=hk8kdZc3xTcqQrH5OnR6EWMA10EThkPn&tag=&rating=g`;
    const tagurl=`https://api.giphy.com/v1/gifs/random?api_key=hk8kdZc3xTcqQrH5OnR6EWMA10EThkPn&tag=${tag}`;


    const [gifs,setGif]=useState('');
    const [loading,setLoading]= useState(false);
  
    async function fetchData(){
      setLoading(true);
      const {data}= await axios.get(tag ? tagurl:randomurl);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
    
    useEffect(()=>{
      fetchData();
    },[])
  
    return{gifs,loading,fetchData}
}
