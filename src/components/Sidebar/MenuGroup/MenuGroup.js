import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography, Collapse, List } from '@mui/material';
import MenuCollapse from '../MenuCollapse/MenuCollapse'
export default function MenuGroup({ item }) {
    return <Box>
        <Typography sx={{ fontWeight: 500, fontSize: '1em', }}>{item.title}</Typography>
        {item.children.map((value, index) =>
            <MenuCollapse key={value.id} item={value} />
        )}
        <Divider sx={{ mt: 1, mb: 1 }} />
    </Box>;
}