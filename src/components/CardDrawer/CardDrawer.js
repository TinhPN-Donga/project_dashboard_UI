import { Box, Card,ClickAwayListener} from '@mui/material';
import { Grow} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import 'simplebar-react/dist/simplebar.min.css';

export default function CardDrawer(props){
    return <Grow in={props.open}>
                <Box>
                    <ClickAwayListener onClickAway={props.handleClose}>
                        <Grow in={props.open} {...(props.open ? { timeout: 600 } : {})}>
                            <Card sx={{
                                display: props.open ? 'block' : 'none',
                                position: "absolute", width: props.width ? props.width: 300, right: 5, borderRadius: 3, boxShadow: 3, top: 50,
                                boxShadow: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                pt: 2, pb: 2
                            }}>
                                {props.children}
                            </Card>
                        </Grow>
                    </ClickAwayListener>
                </Box>
            </Grow >;
}