import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
    primary:{
      main: "#24c9c2",
      light: "skyblue"
    },
    secondary:{
      main: '#24c9c2',
    },
    otherColor:{
      main:"#999"
    },
  },
  typography:{
      button:{
          fontFamily:"Montserrat"
      }
  }
  
})