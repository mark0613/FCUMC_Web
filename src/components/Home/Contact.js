import {
    message
} from 'antd';

import {
    Box,
    Grid,
    Divider,
    IconButton,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

message.config({
    top: 100,
    duration: 1,
    maxCount: 5,
});

function clickEmailIcon() {
    navigator.clipboard.writeText("project1618033988@gmail.com");
    message.success('Copied!');
}

function clickGithubIcon() {
    window.location.href = "https://github.com/mark0613/FCUMC_Web";
}

export function Contact() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: 600 }}
        >
            <Grid item xs={0} lg={1}></Grid>
            <Grid item xs={12} lg={10} sx={{ textAlign: 'center', fontSize: '26px' }}>
                <Box
                    sx={{
                        fontSize: '38px',
                        color: '#3C51B6',
                        fontWeight: 'bold',
                        marginBottom: "40px",
                    }}
                >
                    <Divider>聯絡我們</Divider>
                </Box>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xs={0} lg={2}></Grid>
                    <Grid item xs={12} lg={8}>
                        <Box component='span' sx={{ textAlign: 'center' }}>
                            <Box component='span'>
                                <IconButton sx={{ fontSize: "100px", marginRight: '25px' }} color="primary">
                                    <EmailIcon fontSize="inherit" onClick={() => clickEmailIcon()} />
                                </IconButton>
                            </Box>
                            <Box component='span'>
                                <IconButton sx={{ fontSize: "100px", color: '#000', marginLeft: '25px' }}>
                                    <GitHubIcon fontSize="inherit" onClick={() => clickGithubIcon()} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{ height: 200 }} />
                    </Grid>
                    <Grid item xs={0} lg={2}></Grid>
                </Grid>
            </Grid>
            <Grid item xs={0} lg={1}></Grid>
        </Grid>
    )
}