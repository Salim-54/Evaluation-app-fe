import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { Delete, Folder } from "@mui/icons-material"
import {Stack, 
        Box, 
        List, 
        Typography, 
        Button, 
        Container, 
        ListItem,
        ListItemText, 
        ListItemAvatar, 
        IconButton, 
        Avatar ,
        ListItemIcon,
        ListItemButton,
        TextField }  from "@mui/material"
import Lottie from "lottie-react"
import bgog from "../assets/bgog.json";
import Questions from "./Questions";




    const style = {
        height: 600,
        };

    
    function generate(element) {
        return [0, 1, 2,3,4,5,6,7,8,9,].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }
    
const Settings = () => {
    const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
    const navigate = useNavigate();
return (
    <Box>
      <Box height={"75vh"} width={"100%"} position={"relative"} display={"block"}  alignItems={"center"} justifyContent={"center"}>
           <Box position={"absolute"} zIndex={-1} sx={{height:"100%", width:"100%",}}>
           <Lottie  animationData={bgog} 
           style={style} 
           />
           </Box>
            <Box mx={10} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                <Box width={"100%"} p={3}>
            
            <Box border={1} p={5} borderColor={"#24c9c2"} borderRadius={3} my={3}>
              <Typography variant="h6" textAlign={"center"} mb={3} color="#1c5751">Add new Quiz to make cards</Typography>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField
              id="standard-textarea"
              label="Clear description"
              placeholder="Description"
              multiline
              variant="standard"
              sx={{borderColor:"#24c9c2"}}
            />
            <Button sx={{bgcolor:"#24c9c2", color:"#fff"}} variant="contained" disableElevation>
              Start Quizing
          </Button>

            </Box>
            </Box>


                <Typography textAlign={"center"} mb={2} color={"#1c5751"} variant="h6">The list of all quizes</Typography>
                    <List dense={dense}>
              {generate(
                <ListItem>
                  <Avatar sx={{mr:4}}>
                    <Folder/>
                  </Avatar>
                <ListItemButton>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <IconButton aria-label="edit" onClick={()=>{}}>
              <EditIcon sx={{color:"#06a16b"}}/>
              </IconButton>
              <IconButton aria-label="edit" onClick={()=>{}}>
              <Delete sx={{color:"#c72845"}}/>
              </IconButton>
              </ListItem>
              )}
            </List>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} minHeight={"300px"} my={5} sx={{bgcolor:"rgba(82, 238, 226, 0.05)", backdropFilter:"blur(2px)", alignSelf:"self-start" }}>
            {/* <Typography textAlign={"center"} variant="h5" color="#1c5751">Tap any quiz to display list of questions.😋</Typography> */}
            <Questions/>
            </Box>

            </Box>
        </Box>
    </Box>
    );
};

export default Settings;