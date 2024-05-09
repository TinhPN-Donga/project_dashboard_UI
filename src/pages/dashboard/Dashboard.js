import MiniDrawer from '../../components/Header/Header'
import { useTheme } from '@mui/material/styles';

export default function Dashboard(){
    const theme = useTheme();
    return <>
        <MiniDrawer />
    </>;
}