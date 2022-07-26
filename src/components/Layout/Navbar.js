import React from 'react';

import PropTypes from 'prop-types';

import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { sourceConfig } from '../Config';

import './Navbar.css';


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
  
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const currentPageClass = window.location.href.split("/").filter(_ => _ !== "").slice(-1)[0];
    
    return (
        <ElevationScroll>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton aria-label="logo" href={process.env.PUBLIC_URL} disableRipple={true}>
                            <img src={`${process.env.PUBLIC_URL}/logo192.png`} height={40} width={40} alt="logo" />
                        </IconButton>
                        <Typography sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {sourceConfig.map((page) => (
                                <Button
                                    href={`${process.env.PUBLIC_URL}/${page["key"]}`}
                                    key={page["key"]}
                                    onClick={handleCloseNavMenu}
                                    sx={{ 
                                        my: 2,
                                        display: 'block',
                                        textAlign: 'center',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        margin: '0 7px !important',
                                    }}
                                    className={currentPageClass===page["key"] ? "nav-menu nav-active" : "nav-menu"}
                                >
                                    {page["title"]}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {sourceConfig.map((page) => (
                                    <MenuItem key={page["key"]} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link 
                                                href={`${process.env.PUBLIC_URL}/${page["key"]}`}
                                                underline="none"
                                                sx={{
                                                    color: '#000',
                                                }}
                                            >
                                                {page["title"]}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

