import { Avatar, Box, ButtonBase, Card, Grid, InputAdornment, OutlinedInput, Popper } from '@mui/material';
import { useState, useRef } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Transitions from '../../extended/Transitions';


export default function Notification(props) {
    const [open, setOpen] = useState(true);
    const anchorRef = useRef(null);
    return <>
        <Box >
            <ButtonBase sx={{ borderRadius: '10px', overflow: 'hidden', p: 0 }}>
                <Avatar
                    variant="rounded"
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
                    ref={anchorRef}
                >
                    <NotificationsNoneIcon sx={{ fontSize: "20px" }} />
                </Avatar>
            </ButtonBase >
        </Box>
        <Popper
                placement='bottom-end'
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 20]
                            }
                        }
                    ]
                }}
            >
                <Transitions position='top-right' in={open}>
                </Transitions>

            </Popper>
    </>;
}