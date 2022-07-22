import React from 'react';

import { 
    List,
    Card,
} from 'antd';

import {
    Typography,
} from '@mui/material';

import { sourceConfig } from '../Config/source';

export function Source() {
    return (
        <>
            <Typography variant='h4' sx={{ margin: "20px" }}>
                資訊來源
            </Typography>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={sourceConfig}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>Card content</Card>
                </List.Item>
                )}
            />
        </>
    )
}