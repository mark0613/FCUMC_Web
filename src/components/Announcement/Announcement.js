import React, { useState, useEffect } from 'react';

import 'antd/dist/antd.min.css';
import { 
    Table,
    Tag,
} from 'antd';

import {
    Box,
    Typography,
} from '@mui/material';

import { Page } from '../Layout';
import { Spinner } from '../Spinner';
import { Firebase } from '../Firebase';
import { 
    sourceConfig,
    tagColor,
 } from '../Config';

import './Announcement.css';

const db = new Firebase();
const tableColumns = [
    {
        title: <span style={{ fontSize: "22px" }}>Information</span>,
        dataIndex: "title",
        key: "all",
        render: (text, record, index) => {
            return (
                <>
                    <Box
                        sx={{
                            fontSize: "18px",
                            marginBottom: "10px",
                        }}
                    >
                        {record.title}
                    </Box>
                    <Box
                        sx={{
                            marginBottom: "5px",
                        }}
                    >
                        {record.tags}
                    </Box>
                    <Box>
                        {record.time}
                    </Box>
                </>
            )
        },
        responsive: ["xs"],
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: '60%',
        responsive: ["sm"],
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        width: '20%',
        responsive: ["sm"],
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        width: '20%',
        responsive: ["sm"],
    },
];

function dataSoter(a, b) {
    if (a['time'] > b['time']) {
        return -1;
    }
    else if (a['time'] < b['time']) {
        return 1
    }
    else {
        if (a['title'] > b['title']) {
            return -1;
        }
        else if (a['title'] < b['title']) {
            return 1;
        }
        else {
            return 0
        }
    }
}

function createTable(data) {
    return (
        <Table 
            columns={tableColumns}
            dataSource={data}
            pagination={{ 
                defaultPageSize: '12',
                pageSizeOptions: ['8', '16', '32', '64', '128'],
                position: ['bottomCenter'],
                showSizeChanger: false,
            }}
            onChange={
                _ => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        />
    )
}

export function Announcement(props) {
    let sourceName = props.sourceName;
    let topic = '';
    for (let option of sourceConfig) {
        if (option['key'] === sourceName) {
            topic = option['title'];
            break;
        }
    }
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [table, setTable] = useState(null);

    useEffect(
        () => {
            db.getData(sourceName, (vals)=>{
                let result = [];
                for (let key in vals) {
                    let title = (
                        <a 
                            href={vals[key]['url']} 
                            className='announcement-link' 
                            target='_blank'
                            rel="noreferrer noopener"
                            style={{ fontSize: "16px" }}
                        >
                            {vals[key]['title']}
                        </a>
                    )
                    let tags = vals[key]["tags"].map(
                        tag => <Tag 
                            color={tagColor[vals[key]["class"]]}
                            style={{ fontSize: "15px", padding: "4px" }}
                        >
                            {tag}
                        </Tag>
                    )
                    let time = vals[key]['time'];
                    result.push({
                        key : key,
                        title : title,
                        tags : tags,
                        time : time,
                    })
                }
                result.sort(dataSoter)
                setData( _ => result);
                setTable(_ => createTable(data));
                setIsLoaded(_ => true);
            })
        },
        [isLoaded]
    );

    const content = (
        <>
            <Typography variant='h5' sx={{ display: { xs: 'block', md: 'none' }, marginBottom: '20px' }}>
                {topic}
            </Typography>
            { isLoaded ? table : <Spinner size='150' /> }
        </>
    )
    
    return (
        <Page content={content} />
    )
}