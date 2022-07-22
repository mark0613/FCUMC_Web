import React, {useState} from 'react';

import 'antd/dist/antd.min.css';
import { 
    Layout,
    List,
    Card,
} from 'antd';

import {
    Grid,
    Typography,
    Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar } from '../Layout';
import { Intro } from './Intro';
import { Source } from './Source';


const { Content, Footer } = Layout;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export function Home() {
    const [expanded, setExpanded] = useState(false);
    const handleChange =
        (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    
    return (
        <Layout>
            <Navbar style={{ position: 'fixed', zIndex: 1, width: '100%' }} />

            <Content className="site-layout" style={{ marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: "0 24px", minHeight: 600, textAlign: "center" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: 650 }}
                    >
                        <Grid item xs={6}>
                            <Typography variant='h4'>
                                Feng Chia University
                            </Typography>
                            <br />
                            <Typography variant='h4'>
                                Message Collector
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Intro expanded={expanded} handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        // sx={{ height: 600 }}
                    >
                        <Grid item xs={12}>
                            <Source />
                        </Grid>
                    </Grid>
                    
                    
                </div>
            </Content>
        </Layout>
    )
}