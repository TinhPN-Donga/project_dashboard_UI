import { Avatar, Box, ButtonBase, Card, Grid, InputAdornment, OutlinedInput, Popper } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NearMeIcon from '@mui/icons-material/NearMe';

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
    width: 360,
    marginLeft: 36,
    paddingLeft: 10,
    paddingRight: 10,
    '& input': {
        background: 'transparent !important',
        paddingLeft: '4px !important',
        paddingTop: '12px',
        paddingBottom: '12px',
        color: '#121926',
        fontWeight: '500',
        fontSize: '14px'
    },
    borderRadius: '10px',
    backgroundColor: '#F8FAFC',
}));

export default function Search(props) {
    const [value, setValue] = useState('');
    const theme = useTheme();
    return <>
        <Box sx={{ display: { xs: 'none', md: 'block', borderRadius: '10px'} }}>
            <OutlineInputStyle
                id="input-search-header"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon size="0.7rem" color={theme.palette.grey[500]} />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <Box >
                            <ButtonBase sx={{ borderRadius: '10px', overflow: 'hidden', p: 0 }}>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        width: '32px',
                                        height: '32px',
                                        transition: 'all .2s ease-in-out',
                                        background: "#90caf9",
                                        color: 'white',
                                        '&:hover': {
                                            background: '#5e35b1',
                                            color: 'white', 
                                        }
                                    }}
                                    color="inherit"
                                >
                                    <NearMeIcon sx={{fontSize: "16px"}}/>
                                </Avatar>
                            </ButtonBase >
                        </Box>
                    </InputAdornment>
                }
                aria-describedby="search-helper-text"
                inputProps={{ 'aria-label': 'weight' }}
            />
        </Box>
    </>;
} 