import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme } from "@material-ui/core";
import lotro from '../img/lotro.png'

export default function ButtonAppBar() {

    const theme = createTheme({
        palette: {
           primary: {
              main: "#000000" 
                     },
           secondary: {
              main: "#ffcc80" 
                      }
                 },
          
           
     });

  return (
    <>

    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{ p: 2 }}  theme={theme} position="static">
      <img id="SvgjsSvg3254"style={{ width: '30%', margin: 'auto', display: 'block' }}
 src={lotro} alt='logo' />

      </AppBar>
    </Box>
    </>
  );
}
