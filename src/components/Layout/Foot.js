import 'antd/dist/antd.min.css';
import { 
    Layout,
    message,
} from 'antd';

import {
    Box,
    IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function clickEmailIcon() {
    navigator.clipboard.writeText('project1618033988@gmail.com');
    message.success('Copied!');
}

function clickGithubIcon() {
    window.location.href = 'https://github.com/mark0613/FCUMC_Web';
}

message.config({
    top: 80,
    duration: 1,
    maxCount: 5,
});
const { Footer } = Layout;

export function Foot() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <Box>
                <Box component='span'>
                    <IconButton 
                        sx={{ fontSize: '40px', color: '#000', margin: '0 10px' }} 
                        onClick={() => clickEmailIcon()}
                    >
                        <EmailIcon fontSize='inherit' />
                    </IconButton>
                </Box>
                <Box component='span'>
                    <IconButton 
                        sx={{ fontSize: '40px', color: '#000', margin: '0 10px' }} 
                        onClick={() => clickGithubIcon()}
                    >
                        <GitHubIcon fontSize='inherit' />
                    </IconButton>
                </Box>
            </Box>
            <br />
            <Box>
                Feng Chia University Message Collector
            </Box>
        </Footer>
    )
}