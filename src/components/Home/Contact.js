import {
    Box,
    Grid,
} from '@mui/material';

export function Contact() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: 600 }}
        >
            <Grid item xs={0} lg={3}></Grid>
            <Grid item xs={12} lg={6} sx={{ textAlign: 'center', fontSize: '26px' }}>
                <Box
                    sx={{
                        fontSize: '38px',
                        color: '#3C51B6',
                        fontWeight: 'bold',
                        marginBottom: "20px",
                    }}
                >
                    聯絡我們
                </Box>
                <Box component='span' sx={{ textAlign: {xs: 'center', lg: 'left'} }}>
                    <Box>Email : project1618033988@gmail.com</Box>
                    <Box>
                        Github :&nbsp;
                        <a href="https://github.com/mark0613/FCUMC_Web" style={{ textDecoration: 'underline' }}>
                            https://github.com/mark0613/FCUMC_Web
                        </a>
                    </Box>
                </Box>
                <Box sx={{ height: 200 }} />
            </Grid>
            <Grid item xs={0} lg={3}></Grid>
        </Grid>
    )
}