import React, { useState } from "react";
import { useQuery, gql } from '@apollo/client';
import ListCategories from '../components/ListCategories';
import { List, ListSubheader, Typography }  from "@mui/material";



const QUIZ_QUERY = gql`


{
  available {
    id
    name
    description
  }
}
`
const  QuizList = () => {
const { data, loading, error } = useQuery(QUIZ_QUERY);
if(loading) {return <Typography variant="h4" color="initial">Loading . . . </Typography>}
if(error) {return <Typography variant="h4" color="initial">error occured {error.message}</Typography>}
  return (
    <List>
         <ListSubheader disableSticky sx={{bgcolor:"rgba(0, 0, 0, 0)", fontSize:"18px"}} component="h3">The available Quizes</ListSubheader>
         { data.available.map((item) => <ListCategories key={item.id}  subject={item.name} discription={item.description}/>)}
   </List>
  )
}

export default QuizList