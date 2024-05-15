import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography, Collapse, List } from '@mui/material';
import MenuIem from '../MenuItem/MenuItem'
export default function MenuGroup({ item }) {

    return <Box>
        <Typography sx={{ fontWeight: 500, fontSize: '1em', }}>{item.title}</Typography>
        {item.children.map((value, index) =>
            <MenuIem item={value} />
        )}

        <Divider sx={{ mt: 1, mb: 1 }} />
    </Box>;
}