import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import MenuList from './MenuList/MenuList';
const drawerWidth = 240;

export default function Sidebar({ open }) {
  const theme = useTheme();

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
            top: 64,
            height: 'calc(100vh - 60px)',
            pl:2,
            pt: 3
          },
        }}
        ModalProps={{ keepMounted: true }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <MenuList/>
      </Drawer>
    </Box>
  );
}
