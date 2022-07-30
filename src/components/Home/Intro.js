import {
    Box,
    Grid,
    Button,
    Divider,
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
                <p>可參考：
                    <Button 
                        variant='text'
                        disableRipple={true}
                        onClick={
                            _ => document
                                .getElementById('source')
                                .scrollIntoView({ behavior: 'smooth' })
                        }
                        sx={{
                            fontSize: '18px',
                            textDecoration: 'underline',
                            '&:hover' : {
                                bgcolor: 'transparent',
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        詳細來源
                    </Button>
                </p>
            </>
        ),
        color: '#FFDBEB'
    },
    {
        key : 'how',
        title : '相關技術',
        content : <p>爬蟲撈取各個網頁資料並儲存至資料庫，再以本網站整理並顯示撈取結果。</p>,
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
            sx={{ minHeight: 600 }}
        >
            <Grid item xs={0} lg={1} />
            <Grid item xs={12} lg={10}>
                <Box
                    sx={{
                        fontSize: '38px',
                        color: '#3C51B6',
                        fontWeight: 'bold',
                        marginBottom: '100px',
                    }}
                >
                    <Divider>網站簡介</Divider>
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
                        xs={12} sm={6} md={6} lg={3}
                    >
                        <Box
                            bgcolor={item.color}
                            sx={{
                                height: 300,
                                width: 300,
                                padding: '40px 48px 40px 52px',
                                borderRadius: '100%'
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '26px',
                                    color: '#3C51B6',
                                    fontWeight: 'bold',
                                    marginBottom: '20px',
                                }}
                            >
                                {item.title}
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '18px',
                                    textAlign: 'left',
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
