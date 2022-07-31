import React, { useState, useEffect } from 'react';

import 'antd/dist/antd.min.css';
import { 
    Table,
    Tag,
} from 'antd';

import {
    Box,
    Grid,
    Typography,
} from '@mui/material';

import { Page } from '../Layout';
import { Spinner } from '../Spinner';
import { Firebase } from '../Firebase';
import { TagSelector } from '../TagSelector';
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
var source = [];

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

function generateOptions() {
    const optionClass = [];
    const options = [];
    for (let item of source) {
        if (!optionClass.includes(item.class)) {
            optionClass.push(item.class);
            options.push({
                label: item.class,
                options: [],
            })
        }
        let index = optionClass.indexOf(item.class);
        options[index].options.push({
            label: item.title,
            value: item.title,
            id: `${options[index].label}-${item.title}`,
        })
    }
    return options;
}

function getCookies() {
    let tmp = document.cookie.split("; ").map(item => item.split("="));
    let cookies = {};
    for (let cookie of tmp) {
        cookies[cookie[0]] = cookie[1];
    }
    return cookies;
}

function getDefaultValue() {
    let customTag = [];
    let cookies = getCookies();
    if (!cookies.hasOwnProperty("tags") || cookies.tags === undefined) {
        customTag.push("一般");
    }
    else {
        customTag = cookies.tags.split(",");
    }
    console.log(customTag);

    const defaultValue = [];
    for (let item of source) {
        for (let tag of customTag) {
            if (tag === item.class || tag === item.title) {
                defaultValue.push(item.title);
                break;
            }
        }
    }
    return defaultValue;
}

export function Announcement(props) {
    let sourceName = props.sourceName;
    let topic = '';
    for (let item of sourceConfig) {
        if (item.key === sourceName) {
            topic = item.title;
            source = item.data;
            break;
        }
    }
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [table, setTable] = useState(null);
    const [tagFilter, setTagFilter] = useState([]);

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
                setTagFilter(_ => getDefaultValue());
            })
        },
        [isLoaded]
    );
    useEffect(
        () => {
            let filteredData = [];
            for (let d of data) {
                for (let tag of d["tags"]) {
                    if (tagFilter.includes(tag.props.children)) {
                        filteredData.push(d);
                        break;
                    }
                }
            }
            if (filteredData.length === 0) {
                filteredData = data;
            }
            setTable(_ => createTable(filteredData));
        },
        [JSON.stringify(tagFilter)]
    )

    const content = (
        <>
            <Typography variant='h5' sx={{ display: { xs: 'block', md: 'none' }, marginBottom: '20px' }}>
                {topic}
            </Typography>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <Grid item xs={1} lg={8} />
                <Grid item xs={10} lg={4}>
                    {
                        isLoaded ? 
                        <TagSelector 
                            sourceName={props.sourceName}
                            options={generateOptions()}
                            onChange={(options) => {
                                setTagFilter(_ => options);
                                document.cookie=`tags=${options.join(",")}`;
                            }}
                            defaultValue={tagFilter}
                        /> :
                        <></>
                    }
                </Grid>
                <Grid item xs={1} lg={0} />
            </Grid>
            <br />
            { isLoaded ? table : <Spinner size='150' /> }
        </>
    )
    
    return (
        <Page content={content} />
    )
}