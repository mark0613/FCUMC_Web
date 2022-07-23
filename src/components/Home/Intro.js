import {
    Box,
    Grid,
} from '@mui/material';

const intro = [
    {
        key : 'why',
        title : '開發目的',
        content : '鑒於學校資訊分散，因此我們開發這個網站用於彙整逢甲大學相關資訊。',
        color: '#E9F0F7'
    },
    {
        key : 'what',
        title : '網站內容',
        content : '為資訊傳達的正確性，僅將資料來源的文章「標題、連結、發布時間」抓取並整理，點擊標題即可前往來源文章。',
        color: '#EFF6E9'
    },
    {
        key : 'where',
        title : '資訊來源',
        content : (
            <>
                <p>來自MyFCU、Facebook、Instagram。</p>
                <p>詳細可參考：<a href="#source">詳細來源</a></p>
            </>
        ),
        color: '#FFDBEB'
    },
    {
        key : 'how',
        title : '相關技術',
        content : '使用爬蟲撈取個網頁資料後存到資料庫，再以本網頁顯示資料庫內容。',
        color: '#FFF7E0'
    },
];

export function Intro() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ height: 600 }}
        >
            <Grid item xs={0} lg={1} />
            <Grid item xs={12} lg={10}>
                <Box
                    sx={{
                        fontSize: '38px',
                        color: '#3C51B6',
                        fontWeight: 'bold',
                        marginBottom: "20px",
                    }}
                >
                    網站簡介
                </Box>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    {intro.map(item => (
                    <Grid 
                        item 
                        xs={12} md={6} lg={3}
                    >
                        <Box
                            bgcolor={item.color}
                            sx={{
                                height: 300,
                                width: 300,
                                padding: '40px',
                                borderRadius: '100%'
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '26px',
                                    color: '#3C51B6',
                                    fontWeight: 'bold',
                                    marginBottom: "20px",
                                }}
                            >
                                {item.title}
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '18px'
                                }}
                            >
                                {item.content}
                            </Box>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            <Grid item xs={0} lg={1} />
        </Grid>
    )
}
