import React, { useState } from "react";
import { List, Collapse, ListItemButton, ListItemIcon,  ListItemText }  from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {SubdirectoryArrowRight} from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';




const ListCategories = (props) => {
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
            <List component="div" disablePadding>
            {
            
            /* <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary={props.subSubject} />
            </ListItemButton> */}
            {props.subSubject.map((sub) => 
            
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <SubdirectoryArrowRight style={{color:"rgba(82, 238, 226, 0.7)", }} />
                </ListItemIcon>
                <ListItemText key={sub} primary={sub} />
            </ListItemButton>)}
            </List>
        </Collapse>
    </div>
  )
};

export default ListCategories;
