import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Collapse, List } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function MenuIem({ list, open }) {
    return <Collapse in={open} timeout="auto" >
        <List component="div">
            {list.map((value, index) => {
                return <ListItemButton  key={value.id}  sx={{ borderRadius: 2, fontSize: '0.9em', pt: 0.7, pb: 0.7, pl: 7, '&:hover, &:focus': { backgroundColor: 'transparent', color: '#5e35b1' },color: 'rgba(0, 0, 0, 0.54)' }}>
                    <ListItemIcon sx={{ minWidth: '16px' }}>
                        <FiberManualRecordIcon style={{ fontSize: '8px' }} />
                    </ListItemIcon>
                    <ListItemText
                        primary={value.title}
                        primaryTypographyProps={{ fontSize: '0.9em', fontWeight: '400' }}
                        component='li'
                    />
                </ListItemButton>;
            })}
        </List>
    </Collapse>;
}