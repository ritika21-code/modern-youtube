import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos, ChannelCard} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI'
function ChannelDetail() {
  const [detail, setdetail] = useState(null)
  const [videos, setvideos] = useState([])
  const {id}=useParams();
 
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setdetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    .then((data)=>setvideos(data?.items));
  }, [id])
   console.log(detail);
  return (
    <Box minHeight="95vh">
    <Box>
      <div style={{
        height:'260px',
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
      }} />
      <ChannelCard channelDetail={detail} marginTop="-93px" />
    </Box>
    <Box p={2} display="flex">
    <Box sx={{ mr: { sm: '100px' } }}/>
      <Videos videos={videos} />
    </Box>
  </Box>
  )
}

export default ChannelDetail