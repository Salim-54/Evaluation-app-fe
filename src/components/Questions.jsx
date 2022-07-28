import React, {useState} from "react";
import { List, Typography, TextField, Box, Button, Modal } from "@mui/material";
import QuestionList from "./QuestionsList";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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

const Questions = () => {

  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  return (
<>
<Box width={"100%"}>
  <Typography textAlign={"center"} variant="h6" color="#1c5751">Quiz: THE DEMO QUIZ</Typography>
<Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} my={3} >
            <TextField id="standard-basic" label="Add new question" variant="standard" />
            <Button sx={{bgcolor:"#24c9c2", color:"#fff"}} variant="contained" disableElevation onClick={toggleModal}> 
                Add question
            </Button>

            </Box>
<List sx={{width:"90%"}}>
   {subjects.data.map((item) => <QuestionList key={item.name}  subject={item.name} subSubject={item.subs}/>)}
</List>
</Box>
    <div>
        <Modal
        open={open}
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
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default Questions;
