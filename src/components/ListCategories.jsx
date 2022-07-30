import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { List, Collapse, ListItemButton, ListItemIcon,  ListItemText , Typography, Container, Button}  from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from "@mui/system";




const ListCategories = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
    setOpen(!open);
    };


  return (
    <div>
        <ListItemButton key={4} onClick={handleClick}>
            <ListItemIcon>
            <CircleIcon style={{color:"rgba(82, 238, 226, 0.3)", }} />
            </ListItemIcon>
            <ListItemText primary={props.subject} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            
            
            {/* <ListItemButton onClick={() => {navigate('/flash-card')}} sx={{ pl: 4 }}>
                <ListItemIcon>
                <SubdirectoryArrowRight style={{color:"rgba(82, 238, 226, 0.7)", }} />
                </ListItemIcon>
                <ListItemText primary='Navigate to Quiz💪' />
            </ListItemButton> */}
            <Box ml={10} maxWidth={400} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>

                <Typography variant="body1" color="initial">Hi this is all about this quiz and I promise is not the best quiz app in the world Hi this is all about this quiz and I promise is not the best quiz app in the world Hi this is all about this quiz and I promise is not the best quiz app in the world</Typography>

            <Button variant="outlined" onClick={() => {navigate('/flash-card')}} endIcon={<DoubleArrowIcon />}>
                Start
            </Button>
            </Box>

        </Collapse>
    </div>
  )
};

export default ListCategories;
