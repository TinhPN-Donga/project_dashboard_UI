import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';

const drawerWidth = 270;



export default function MainBG(props) {

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: '15px 20px',
      marginTop: '70px',
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
        marginLeft: 0,
      }),
    }),
  );

  return <Box sx={{flexGrow: 1, padding: props.open ? '12px 0' : '12px', width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
    <Main open={props.open}>
      {props.children}
    </Main>
  </Box>;
}