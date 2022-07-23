import 'antd/dist/antd.min.css';
import { Layout } from 'antd';

import { Navbar } from './Navbar';

import './Page.css';


const { Content, Footer } = Layout;

export function Page(props) {
    return (
        <Layout>
            <Navbar style={{ position: 'fixed', zIndex: 1, width: '100%' }} />

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 600, textAlign: "center" }}>
                    {props.content}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Feng Chia University Message Collector
            </Footer>
        </Layout>
    )
}