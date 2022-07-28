import React from 'react';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


const CoolDashboard = () => {
  return (
    <Box flexDirection={"column"} display={"flex"} alignItems={"center"} p={4} justifyContent={"center"}>
        <Typography variant="h5" color="#fcfcfc">The Quiz discription</Typography>
        <Typography variant="subtitle2" my={3} color="#fcfcfc" textAlign={"center"} fontWeight={300}>Lorem, ipsum dolor sit amet
         consectetur
         adipisicing elit. Nesciunt unde architecto 
         ut magnam sapiente ipsa iusto 
         velit officia aut, ad dignissimos recusandae nulla commodi
         perspiciatis doloribus enim voluptatum beatae temporibus?</Typography>
        <Typography mb={4} variant="h5" color="#fcfcfc">The Quiz Over view</Typography>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        <Typography variant="h5" mt={4} color="#fcfcfc">The total Results</Typography>

        <Box display={"flex"} my={4} bgcolor={"#fcfcfc"} minWidth={"200px"} borderRadius={"5px"} minHeight={"50px"}>
        </Box>

    </Box>
  )
}
export default CoolDashboard;