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
                '&:first-letter': {
                    textDecoration: 'underline',
                    color: '#3C51B6',
                    fontSize: '60px',
                }
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
            sx={{ height: 600 }}
        >
            <Grid item xs={0} lg={1} />
            <Grid item xs={8} lg={5}>
                <img src='logo512.png' />
            </Grid>
            <Grid item xs={8} lg={5}>
                <Box
                    sx={{
                        textAlign: 'left',
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