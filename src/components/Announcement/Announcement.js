import React, { useState, useEffect } from 'react';

import 'antd/dist/antd.min.css';
import { 
    Table, 
} from 'antd';

import Typography from '@mui/material/Typography';

import { Page } from '../Layout';
import { Spinner } from '../Spinner';
import { Firebase } from '../Firebase';
import { sourceConfig } from '../Config';

import './Announcement.css';

const db = new Firebase();
const tableColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '80%',
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        width: '20%',
      },
];

export function Announcement(props) {
    let type = props.type;
    let topic = '';
    for (let option of sourceConfig) {
        if (option['key'] === type) {
            topic = option['title'];
            break;
        }
    }
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [table, setTable] = useState(null);

    useEffect(
        () => {
            db.getData(type, (vals)=>{
                for (let key in vals) {
                    let title = (
                        <a 
                            href={vals[key]['url']} 
                            className='announcement-link' 
                            target='_blank'
                            rel="noreferrer noopener"
                        >
                            {vals[key]['title']}
                        </a>
                    )
                    let time = vals[key]['time'];
                    setData(array => [...array, {
                            'key' : key,
                            'title' : title,
                            'time' : time,
                        }]
                    );
                }
                data.sort((a, b) => {
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
                })
                setTable(_ => <Table 
                    columns={tableColumns}
                    dataSource={data}
                    pagination={{ 
                        defaultPageSize: '12',
                        pageSizeOptions: ['8', '16', '32', '64', '128'],
                        position: ['bottomCenter'],
                        showSizeChanger: false,
                    }}
                />)
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