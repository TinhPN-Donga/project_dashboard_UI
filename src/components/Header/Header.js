import * as React from 'react';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { logoPNG } from '../../utils/picture';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './right/Search';
import Notification from './right/Notification';
import Setting from './right/Setting';


function Header(props) {
    return (
        <Box sx={{ width: 1, display: 'flex', p: 1 }} >
            <Box sx={{ width: '290px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ width: '50%' }}>
                    <ButtonBase disableRipple to='dashboard'><img src={logoPNG.logoDongA} alt='logo' width='100%' /></ButtonBase>
                </Box>
                <Box>
                    <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden', p: 0 }} onClick={() => props.handleOpen()}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                transition: 'all .2s ease-in-out',
                                background: 'green',
                                color: 'white',
                                '&:hover': {
                                    background: "#4fd172",
                                    color: 'white'
                                }
                            }}
                            color="inherit"
                        >
                            <MenuIcon />
                        </Avatar>
                    </ButtonBase >
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Search />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Notification />
                    <Box sx={{width: '1rem'}}/>
                    <Setting />
                </Box>
            </Box>
        </Box>
    );
}
export default Header;