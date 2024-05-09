import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { logoPNG } from '../../utils/picture';
import { SVGAttributes } from 'react'
function ResponsiveAppBar() {
    return (
        <Box sx={{width: 1, display: 'flex'}} >
            <Box sx={{ width: '280px',  p:2,pt:1,pb:1, display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{ width: '55%'}}>
                <ButtonBase disableRipple to='dashboard'><img src={logoPNG.logoDongA} alt='logo' width='100%' /></ButtonBase>
            </Box>
            <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            transition: 'all .2s ease-in-out',
                            background: 'white',
                            color: 'gray',
                            '&:hover': {
                                background: 'gray',
                                color: 'white'
                            }
                        }}
                        color="inherit"
                    >
                    </Avatar>
                </ButtonBase>
            </Box>
            <Box sx={{ width: '100%', backgroundColor: 'red' }}>Item 2</Box>
        </Box>
    );
}
export default ResponsiveAppBar;