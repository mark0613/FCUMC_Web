import 'antd/dist/antd.min.css';
import { Layout } from 'antd';

import { Box } from '@mui/material';

import { Navbar } from '../Layout';
import { Topic } from './Topic';
import { Intro } from './Intro';
import { Source } from './Source';


const { Content } = Layout;

export function Home() {
    return (
        <Layout>
            <Navbar style={{ position: 'fixed', zIndex: 1, width: '100%' }} />

            <Content className="site-layout" style={{ marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: "0 24px", minHeight: 600, textAlign: "center" }}>
                    <Topic />
                    <Intro />
                    <Source />
                </div>
            </Content>
            <Box sx={{ height: "60px", bgcolor: "#FFFFFF" }} />
        </Layout>
    )
}
