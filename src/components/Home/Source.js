import { 
    List,
    Tag,
} from 'antd';

import {
    Box,
    Grid,
    Divider,
} from '@mui/material';

import { sourceConfig } from '../Config';
import { tagColor } from '../Config';


const source = [];
for (let item of sourceConfig) {
    let title = <Box style={{ fontSize: "26px" }}>{item.title}</Box>;
    let description = []
    for (let data of item.data) {
        description.push(
            <Tag 
                color={tagColor[data.class]}
                style={{
                    fontSize: "18px",
                    padding: "8px"
                }}
            >
                <a href={data.link} style={{ color: 'inherit' }}>{data.title}</a>
            </Tag>
        )
    }
    source.push(
        {
            title: title,
            description: description,
        }
    )
}

export function Source() {
    return (
        <Grid 
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: 600 }}
        >
            <Grid item xs={0} lg={1} />
            <Grid item xs={12} lg={10}>
                <Box id="source" height={64} />
                <Box
                    sx={{
                        fontSize: '38px',
                        color: '#3C51B6',
                        fontWeight: 'bold',
                        marginBottom: "20px",
                    }}
                >
                    <Divider>詳細來源</Divider>
                </Box>
                <List
                    itemLayout="horizontal"
                    dataSource={source}
                    style={{
                        textAlign: "left",
                    }}
                    renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                        title={item.title}
                        description={item.description}
                        />
                    </List.Item>
                    )}
                />
            </Grid>
            <Grid item xs={0} lg={1} />
        </Grid>
    )
}
