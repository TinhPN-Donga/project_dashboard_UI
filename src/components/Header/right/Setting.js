import { Avatar, Box, ButtonBase, Typography, Stack, Divider} from '@mui/material';
import { useState, useRef } from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import LogoutIcon from '@mui/icons-material/Logout';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ListComponent from '../../List/ListComponent'
import CardDrawer from '../../CardDrawer/CardDrawer';
import {
    useNavigate,
  } from "react-router-dom";

export default function Setting(props) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setOpen(!open);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const ButtonDrop = ({ title, onPressed, backgroundColor = 'transparent', color = '#364152', colorHover = '#5e35b1', backgroundColorHover = 'transparent', icon = <LogoutIcon /> }) => {
        return <ButtonBase sx={{ borderRadius: '7px', overflow: 'hidden', margin: '3px 0' }}>
            <Box sx={{
                p: '10px 16px', width: 1, textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                transition: '0.3s all ease',
                backgroundColor: backgroundColor,
                color: color,
                flexDirection: 'row', '&:hover': {
                    backgroundColor: backgroundColorHover,
                    color: colorHover,
                }
            }} onClick={onPressed}>
                {icon}
                <Typography variant="subtitle2" component='p' sx={{ marginLeft: '16px' }}>{title}</Typography>
            </Box>
        </ButtonBase>;
    }

    const handleLogout = () =>{
        localStorage.removeItem('access_token');
        navigate('/login');
    }
    return <>
        <Box sx={{ position: 'relative' }}>
            <ButtonBase sx={{ borderRadius: '25px', overflow: 'hidden', }}>
                <Box sx={{
                    backgroundColor: 'green', p: 1, display: 'flex', alignItems: 'center', transition: 'all .2s ease-in-out',
                    background: '#e7e6f6',
                    color: 'rgb(33, 150, 243)',
                    '&:hover': {
                        background: '#90caf9',
                        color: 'white',
                    }
                }}
                    ref={anchorRef}
                    onClick={handleClick}
                >
                    <Avatar alt="Avatart" sx={{ width: '27px', height: '27px', backgroundColor: 'gray', color: 'white' }} ref={anchorRef}>
                        ?
                    </Avatar>
                    <Box sx={{ width: '0.8rem' }} />
                    <TuneOutlinedIcon />
                </Box>
            </ButtonBase>
            <CardDrawer open={open} handleClose={handleClose}>
                <Box sx={{ pb: 1, pl: 2, pr: 2 }}>
                    <Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#121926' }}>Good Morning,</Typography>
                            <Typography component="span" sx={{ fontWeight: 400, fontSize: '0.9rem', color: '#121926' }}>
                                Admin
                            </Typography>
                        </Stack>
                        <Typography variant="subtitle2" sx={{ fontSize: '0.7rem', color: '#697586' }}>Project Admin</Typography>
                    </Stack>
                </Box>
                <Divider />
                <Box >
                    <SimpleBar style={{
                        height: '100%',
                        maxHeight: 'calc(100vh - 200px)',
                        overflowX: 'hidden',

                    }}>
                        <Box sx={{ pl: 2, pr: 2 }}>
                            <ListComponent />
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <Box sx={{ height: '10px', }} />
                                <Divider />
                                <Box sx={{ height: '10px', }} />
                                <ButtonDrop onPressed={handleLogout} title='Đăng xuất' colorHover='#5e35b1' backgroundColorHover='#ede7f6' />
                                <ButtonDrop icon={<SettingsSuggestOutlinedIcon />} onPressed={() => { }} title='Setting' colorHover='#5e35b1' backgroundColorHover='#ede7f6' />
                            </Box>
                        </Box>
                    </SimpleBar>
                </Box>
            </CardDrawer>
        </Box >
    </>;
}