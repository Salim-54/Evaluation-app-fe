import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import ListCategories from '../components/ListCategories'
import {Stack, Box, List, Typography, Button, Container }  from "@mui/material"
import Lottie from "lottie-react"
import bgog from "../assets/bgog.json";

    const style = {
        height: 600,
        };

    const subjects = {
       data: [
           {
            name: "English",
            subs:[
                "gramma",
                "speakings"
            ]
           },
           {
            name: "Engineering",
            subs:[
                "Robotics",
                "Mechatronics"
            ]
           },
           {
            name: "Development",
            subs:[
                "TypeScript",
                "GraphQL"
            ]
           },

        ]
    };
    
const Welcoming = () => {
    const navigate = useNavigate();
return (
    <Box>
      <Box height={"75vh"} width={"100%"} position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Stack direction="row" spacing={2} alignItems={"center" }justifyContent={"space-between"}>
         
           <Box position={"absolute"} zIndex={-1} sx={{height:"100%", width:"100%",}}>
           <Lottie  animationData={bgog} 
           style={style} 
           />
           </Box>
           <Box flex={1} display={"flex"}  flexDirection={"column"} alignContent={"center"} justifyContent={"center"}>

           
           <Box  sx={{bgcolor:"rgba(82, 238, 226, 0.05)", backdropFilter:"blur(2px)" , p:"50px", marginTop:"100px"}}>
           <Typography mb={10} color={"#1c5751"} variant="h3">The best Flash card</Typography>
           <Typography variant="p" sx={{lineHeight:"30px"}}>This is the best flash card app that tiu would see on internet
           Customers hate complexity and love simplicity, viewing it as a form of good customer service. When you make things simple, you create a smooth customer experience.
           </Typography>
           </Box>
        <Button onClick={() => {navigate('/dashboard')}} disableElevation sx={{marginTop:"50px", color:"white"}} variant="contained">
          Tap to Create yours
        </Button>
           </Box>
           <Box flex={1} sx={{p:"10%"}} >
            <List>
                {subjects.data.map((item) => <ListCategories key={item.name}  subject={item.name} subSubject={item.subs}/>)}

            </List>
        </Box>
        </Stack>
        </Box>
    </Box>
    );
};

export default Welcoming;