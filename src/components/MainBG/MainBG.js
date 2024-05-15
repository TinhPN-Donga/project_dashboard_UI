import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SimpleZoom from '../extended/Transactions1';
const drawerWidth = 240;

export default function MainBG(props) {

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: '15px 20px',
      marginTop: '80px',
      backgroundColor: '#eef2f6',
      borderRadius: '12px',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 20,
      }),
    }),
  );

  return <Box sx={{
    flexGrow: 1, padding: '0', 
    width: !props.open ? 1 : {
      xs: 'calc(100%)', sm: `calc(100% - ${drawerWidth}px)`
    },
  }}>
    <Main open={props.open}>
      {props.children}
      <SimpleZoom/>
    </Main>
  </Box>;
}