import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import {Collapse,List} from '@mui/material'


export default function MenuCollapse({ list, open }) {
    return <Collapse in={open} timeout="auto" >
        <List component="div">
            {list.map((value, index) => {
                return <ListItemButton sx={{ borderRadius: 2, fontSize: '0.9em', pl: 5, '&:hover': { backgroundColor: 'transparent', color: '#5e35b1' } }}>
                    <ListItemText
                        primary={value.title}
                        primaryTypographyProps={{ fontSize: '0.9em', fontWeight: '400' }}
                    />
                </ListItemButton>;
            })}

        </List>
    </Collapse>;
}