import {
    Box,
    Grid,
    Typography,
} from '@mui/material';

function wrap(str) {
    return str.split(' ').map(text => (
        <Box 
            component='span' 
            sx={{ 
                marginRight: '15px',
                display: 'inline-block',
                fontWeight: 'bold',
                fontSize: { xs: '25px', sm: '37px', md: '50px' },
                '&:first-letter': {
                    textDecoration: 'underline',
                    color: '#3C51B6',
                    fontSize: { xs: '30px', sm: '42px', md: '60px' },
                },
            }}
        >
            {text}
        </Box>
    ));
    
}

export function Topic() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: 600 }}
        >
            <Grid item xs={0} lg={1} />
            <Grid item xs={12} lg={5}>
                <Box
                    component='img'
                    alt='logo'
                    src='logo512.png'
                    sx={{
                        border: 'solid 3px #3C51B6',
                        borderRadius: "100%",
                        maxHeight: { xs: '250px', sm: '300px', md: '400px', lg: '450px' },
                    }}
                >
                </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
                <Box
                    sx={{
                        textAlign: {xs: 'center', lg: 'left'},
                    }}
                >
                    <Typography variant='h3'>
                        {wrap('Feng Chia University')}
                    </Typography>
                    <br />
                    <Typography variant='h3'>
                        {wrap('Message Collector')}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={0} lg={1} />
        </Grid>
    )
}