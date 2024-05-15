
import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Typography, Collapse, List } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '../MenuItem/MenuItem';
import { useState } from 'react';

export default function MenuCollapse({ item }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClick = () => {
        setOpen(!open);
        console.log('selected: ', selected);
        console.log('item: ', item);
        setSelected(!selected ? item.id : null);
    }


    return <>
        <ListItemButton
            selected={selected === item.id}
            onClick={handleClick}
            key={item.id}
            sx={{ minHeight: 28, fontWeight: '400', '&:hover': { color: '#5e35b1', fontWeight: 600, backgroundColor: '#ede7f6' }, transition: '0.4s', pl: 2, borderRadius: 3, color: 'rgba(0, 0, 0, 0.54)', display: 'flex', }}
        >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40, margin: '5px 0' }}>
                {item.icon}
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
        {item.children ? <MenuItem list={item.children} open={open} /> : <></>}
    </>;
}