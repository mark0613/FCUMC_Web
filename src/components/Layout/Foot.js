import 'antd/dist/antd.min.css';
import { Layout } from 'antd';

import {
    Box,
    IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const { Footer } = Layout;

export function Foot() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <Box>
                Feng Chia University Message Collector
            </Box>
            <br />
            <Box>
                <Box component='span'>
                    <IconButton color="primary">
                        <EmailIcon fontSize="inherit" />
                    </IconButton>
                    project1618033988@gmail.com
                </Box>
            </Box>
            <Box>
                <Box component='span'>
                    <IconButton sx={{ color: '#000' }}>
                        <GitHubIcon fontSize="inherit" />
                    </IconButton>
                    https://github.com/mark0613/FCUMC_Web
                </Box>
            </Box>
        </Footer>
    )
}