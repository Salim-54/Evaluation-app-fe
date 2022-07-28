import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'
import LandingPage from './screens/LandingPage';
import Quiz from './screens/Quiz';
import Dashboard from './screens/Dashboard';


 const Router = () => {
  return (
<BrowserRouter>
    <Box sx={{height:"100vh"}} display={"flex"} flexDirection={"column"}>
        <Routes>
            <Route exact path='/' element={<LandingPage/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>

            <Route exact path='/flash-card' element={<Quiz/>}></Route>
        </Routes>
        </Box>
</BrowserRouter>
  )
};
export default Router;