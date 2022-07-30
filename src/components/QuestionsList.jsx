import React, { useState } from "react";
import { List, Collapse, ListItemButton, ListItemIcon, TextField, ListItemText, ListItem, IconButton, Button, Modal, Box, Typography, FormControl, Select, MenuItem, InputLabel }  from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Delete, SubdirectoryArrowRight} from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  
  
  
  const QuestionList = (props) => {
      const [modal, setModal] = useState(false);
      const [open, setOpen] = useState(false);
      const [age, setAge] = useState(false);

        const handleChange = (event) => {
            setAge(event.target.value);
        };


      const toggleModal = () =>  setModal(!modal)
      const handleClick = () => {
      setOpen(!open);
      };

  return (
    <div>
        <ListItem>
            <ListItemIcon>
            <CircleIcon style={{color:"rgba(82, 238, 226, 0.3)", }} />
            </ListItemIcon>
        <ListItemButton key={4} onClick={handleClick}>
            <ListItemText primary={props.subject} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <IconButton aria-label="add" onClick={toggleModal}>
          <AddIcon/>
        </IconButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {props.subSubject.map((sub) => 
            <ListItem>
                <ListItemIcon sx={{ml:4}}>
                <SubdirectoryArrowRight style={{color:"rgba(82, 238, 226, 0.7)", }} />
                </ListItemIcon>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText key={sub} primary={sub} />
            </ListItemButton>
            <Button sx={{mr:5}} disabled >False</Button>
            <IconButton aria-label="delete" onClick={() =>{}}>
              <Delete sx={{color:"#c72845"}}/>
            </IconButton>
            </ListItem>)}
            </List>
        </Collapse>

        <div>
        <Modal
        open={modal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} my={3} >
         <TextField id="standard-basic" label="Add new question" variant="standard" />
            
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
        //   defaultValue={false}
          onChange={handleChange}
        >
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{bgcolor:"#24c9c2", color:"#fff"}} variant="contained" disableElevation onClick={()=>{}}> 
              Add
    </Button>
    </Box>

  </Box>
</Modal>
    </div>
    </div>
  )
};

export default QuestionList;