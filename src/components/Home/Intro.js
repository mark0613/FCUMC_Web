import React from 'react';

import { Collapse } from 'antd';

import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordions = [
    {
        key : "why",
        summary : "開發目的",
        detail : "鑒於學校資訊分散，因此我們開發這個網站用於彙整逢甲大學相關資訊。",
    },
    {
        key : "what",
        summary : "網站內容",
        detail : "為了達到資訊傳達的正確性，我們僅僅將資料來源的文章「標題、連結、發布時間」抓取下來並整理成表格，點擊標題即可前往來源文章。",
    },
    {
        key : "where",
        summary : "資訊來源",
        detail : "來自MyFCU、Facebook、Instagram。",
    },
    {
        key : "how",
        summary : "相關技術",
        detail : "使用爬蟲撈取個網頁資料後存到資料庫，再以本網頁顯示資料庫內容。",
    },
    {
        key : "who",
        summary : "聯絡我們",
        detail : (
            <>
                <p>Email: project1618033988@gmail.com</p>
                <p>Github: </p>
            </>
        ),
    },
]

const { Panel } = Collapse;

export function Intro(props) {
    const result = [];
    for (let acc of accordions) {
        result.push(
            // <Accordion expanded={props.expanded === acc.key} onChange={props.handleChange(acc.key)} sx={{ textAlign: 'left' }}>
            //     <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            //         <Typography variant='h6' sx={{ width: '33%', flexShrink: 0 }}>
            //             {acc.summary}
            //         </Typography>
            //     </AccordionSummary>
            //     <AccordionDetails>
            //         <Typography>
            //             {acc.detail}
            //         </Typography>
            //     </AccordionDetails>
            // </Accordion>
            
            <Panel header={acc.summary} key={acc.key}>
                <p>{acc.detail}</p>
            </Panel>
        )
        
    }
    let text = "Hello"
    return (
        <Collapse accordion>
            {result}
        </Collapse>

    );

}