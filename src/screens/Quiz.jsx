import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import {Typography, Box, Fab} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import bgog from "../assets/bgog.json";
import Lottie from "lottie-react"
import Flashcard from '../components/Card';
import CoolDashboard from '../components/CoolDashboard';



const QUIZ_QUERY = gql`


{
  available {
    name
    description
  }
}


`





const style = {
  height: 600,
  };
const Quiz= () => {

  const { data } = useQuery(QUIZ_QUERY);
  const navigate = useNavigate()
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box flex={1} height={"100vh"} bgcolor={"#24c9c2"}>
        <CoolDashboard/>
        </Box>
        <Box position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"center"} flex={3} height={"100vh"} bgcolor={"#fafcfc"}>
        <Box zIndex={2}><Flashcard/></Box>
        <Fab
          color="primary"
          aria-label=""
          sx={{position:"absolute", zIndex:"5",bottom:"50px", right:"50px"}}
          onClick={()=>{
            // console.log(data);;
            navigate("/");}}
        >
          <HomeIcon />
        </Fab>
        <Box position={"absolute"} width={"100%"} zIndex={1} sx={{ top:0, left:0}}>
        <Lottie  animationData={bgog} 
           style={style} 
           />
        </Box>
        
    </Box>


    </Box>
  )
}

export default Quiz;