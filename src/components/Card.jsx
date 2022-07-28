import { useState } from "react";
import './Card.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const FlashCard = () => {
  
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip)
  }
  return (
    <Card elevation={5} sx={{ minWidth: 400, minHeight:100 , borderTopRightRadius: "15px", borderTopLeftRadius: "15px"}}  >
      <CardContent className={`card ${flip ? 'flip' : ''}`}>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-around"} className="front">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          The question
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          How do you feel about immigrating to Europe
        </Typography>
        </Box>

        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-evenly"} className="back">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          The answer 
        </Typography>
        <Typography textAlign={"center"} variant="h5" component="div">
          I'll live and die here in Africa💗💗  I'll live and die here in Africa💗💗 I'll live and die here in Africa💗💗 
        </Typography>
        <Button sx={{mt:6}} variant="contained" color="primary">
          Next Question
        </Button>
        </Box>

      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Learn More</Button> 
      </CardActions>
    </Card>
  )
} 

export default FlashCard;


