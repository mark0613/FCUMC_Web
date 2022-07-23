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
                <Box component='span' sx={{ textAlign: 'center' }}>
                    <Box>Email : </Box>
                    <Box>Github : </Box>
                </Box>
                <Box sx={{ height: 200 }} />
            </Grid>
            <Grid item xs={0} lg={3}></Grid>
        </Grid>
    )
}