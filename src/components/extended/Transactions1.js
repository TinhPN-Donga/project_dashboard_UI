import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import { Slide, Grow } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
        <svg>
            <Box
                component="polygon"
                points="0,100 50,00, 100,100"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
            />
        </svg>
    </Paper>
);

export default function SimpleZoom() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ height: 180 }}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            <Box sx={{ display: 'flex' }}>
                <Zoom in={checked}>
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 500 } : {})}
                    >
                        <Slide in={checked}   {...(checked ? { timeout: 500 } : {})}>
                            {icon}
                        </Slide>
                    </Grow>
                </Zoom>
                <Zoom in={checked}>
                    <Slide in={checked}   {...(checked ? { timeout: 500 } : {})}>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}
                        >
                            {icon}
                        </Grow>
                    </Slide>

                </Zoom>

                <Zoom in={checked}>
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000 } : {})}
                    >
                        {icon}
                    </Grow>
                </Zoom>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    {icon}
                </Grow>
            </Box>
        </Box>
    );
}
