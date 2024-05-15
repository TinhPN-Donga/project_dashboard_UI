import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { Divider, Typography, Collapse, List } from '@mui/material';
import MenuGroup from '../MenuGroup/MenuGroup'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
const menuListData = [
    {
        id: 'overview',
        type: 'group',
        title: 'Overview',
        children: [
            {
                id: 'dashboard',
                type: 'item',
                icon: <GridViewOutlinedIcon />,
                title: 'Dashboard'
            }
        ]
    },
    {
        id: 'title MN',
        type: 'group',
        title: 'Title MN',
        children: [
            {
                id: 'Gateway',
                title: 'Gateway',
                type: 'collapse',
                icon: <CellTowerOutlinedIcon/>,
                children: [
                    {
                        id: 'Gateway 1',
                        title: 'Gateway 1',
                        type: 'item',
                        icon: '',
                    },
                    {
                        id: 'Gateway 2',
                        title: 'Gateway 2',
                        type: 'item',
                        icon: '',
                    },
                ]
            },
            {
                id: 'Device',
                title: 'Device',
                type: 'collapse',
                icon: <DevicesOutlinedIcon />,
                children: [
                    {
                        id: 'Device 1',
                        title: 'Device 1',
                        type: 'item',
                        icon: '',
                    },
                    {
                        id: 'Device 2',
                        title: 'Device 2',
                        type: 'item',
                        icon: '',
                    },
                ]
            },
        ]
    },
]

export default function MenuList() {

    return (
        <>
            {menuListData.map((value, index) => <MenuGroup key={value.id} item={value} />)}
        </>
    );
}
