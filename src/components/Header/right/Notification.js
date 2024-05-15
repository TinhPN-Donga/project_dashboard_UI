import { Avatar, Box, ButtonBase, Card, Grid, InputAdornment, OutlinedInput, Popper, ClickAwayListener } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Transitions from '../../extended/Transitions';
import CardDrawer from '../../CardDrawer/CardDrawer';

export default function Notification(props) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const handleClick = (event) => {
        setOpen(!open);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return <>
            <Box sx={{position: 'relative'}}>
                <ButtonBase sx={{ borderRadius: '10px', overflow: 'hidden', p: 0 }}>
                    <Avatar
                        variant="rounded"
                        ref={anchorRef}
                        sx={{
                            width: '35px',
                            height: '35px',
                            transition: 'all .2s ease-in-out',
                            background: "#90caf9",
                            color: 'white',
                            '&:hover': {
                                background: '#5e35b1',
                                color: 'white',
                            }
                        }}
                        color="inherit"
                        onClick={handleClick}
                    >
                        <NotificationsNoneIcon sx={{ fontSize: "20px" }} />
                    </Avatar>
                </ButtonBase >
                <CardDrawer open={open} handleClose={handleClose}>

                </CardDrawer>
            </Box>
            
    </>;
}