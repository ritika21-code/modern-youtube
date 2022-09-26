
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import {fetchFromAPI} from '../utils/fetchFromAPI'
function SearchFeed() {
  const [videos, setvideos] = useState([])
 const {searchterm} =useParams();
  useEffect(()=>{
   
    fetchFromAPI(`search?part=snippet&q=${searchterm}`)
      .then((data) => setvideos(data.items))
    }, [searchterm]);
    return (
      
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }} > Search Results for <span style={{ color: '#F31503' }}>{searchterm}</span> videos
        </Typography>
       <Videos videos={videos}/>
      </Box>
   
  )
}

export default SearchFeed;
