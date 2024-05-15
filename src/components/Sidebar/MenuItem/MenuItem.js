import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Typography, Collapse, List } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuCollapse from '../MenuCollapse/MenuCollapse';
import { useState } from 'react';

export default function MenuIem({ item }) {
    const [open, setOpen] = useState(false);

    return <>
        <ListItemButton
            onClick={() => setOpen(!open)}
            key={item.id}
            sx={{ minHeight: 32, fontWeight: '400', '&:hover, &:focus': { color: '#5e35b1', fontWeight: 600 }, transition: '0.4s', pl: 2, borderRadius: 3, color: 'rgba(0, 0, 0, 0.54)', display: 'flex', }}
        >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40, margin: '5px 0' }}>
                <GridViewOutlinedIcon />
            </ListItemIcon>
            <ListItemText
                primary={item.title}
                primaryTypographyProps={{ fontSize: '0.9em' }}
            />
            <Box sx={{ flexGrow: 1 }}></Box>
            {item.children ? <KeyboardArrowDown
                sx={{
                    mr: -1,
                    opacity: 1,
                    transform: open ? 'rotate(0)' : 'rotate(-180deg)',
                    '&:focus': { transform: 'rotate(0)' },
                    transition: '.0.4s all ease',
                }}
            /> : <></>}
        </ListItemButton>
        {item.children ? <MenuCollapse list={item.children} open={open} /> : <></>}
    </>;
}