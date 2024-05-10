import { Avatar, Box, ButtonBase, Card, Grid, InputAdornment, OutlinedInput, Popper } from '@mui/material';
import { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
export default function Setting(props) {
    const [open, setOpen] = useState();
    return <>
        <ButtonBase sx={{ borderRadius: '25px', overflow: 'hidden', }}>
            <Box sx={{
                backgroundColor: 'green', p: 1, display: 'flex', alignItems: 'center', transition: 'all .2s ease-in-out', 
                background: '#e7e6f6',
                color: 'rgb(33, 150, 243)',
                '&:hover': {
                    background: '#90caf9',
                    color: 'white',
                }
            }}>
                <Avatar alt="Avatart" sx={{ width: '27px', height: '27px', backgroundColor: 'green', color:'white' }}>
                    ?
                </Avatar>
                <Box sx={{ width: '0.8rem' }} />
                <TuneOutlinedIcon />
            </Box>
        </ButtonBase >
    </>;
}