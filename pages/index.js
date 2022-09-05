import styles from '../styles/Layout.module.css'
import stylesIndex from '../styles/Index.module.css'
import Tabs from '../components/Tabs'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image'
import EAImage from '../img/IDs/ID_Team_2.jpg'
import AllProducts from '../img/All Products.png'
import Cardlet from '../components/Cardlet'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    linkImg: {
        '&:hover': {
            cursor: 'pointer',
            color: '#0000C7',
            border: '2px solid #0000C7',
        },
        '&>:only-child':{
            display: 'block',
            margin: '0 auto',
        },
        display: 'block',
        width: 'max-content',
        margin: '0 auto',
        fontSize:' 60px',
        padding: '15px',
        color: '#00B100',
        border: '2px solid #00B100',
        borderRadius: '50%',
    },
    itemCard: {
        marginBottom: '50px',
    },
});

const index = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={styles.root}>
            <Tabs />
            <div className={styles.container}>
                <div>
                    <Box sx={{ width: '100%' }}>
                        <Grid container className={stylesIndex.grid}>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={stylesIndex.item}>
                                <div className={stylesIndex.img}>
                                    <Image
                                        src={EAImage}
                                        alt="Electric Air Img"
                                        width={isMobile ? 350 : 600}
                                        height={isMobile ? 175 :300}
                                        />
                                </div>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={stylesIndex.item}>
                                <div className={isMobile ? stylesIndex.introM : stylesIndex.intro}>
                                    Electric Air is a New Zealand, family owned business based in Hamilton, who have been delivering compressed air and pnuematic solutions to customers in the Waikato.
                                    <br /><br />
                                    We offer a comprehensive range of compressed air and pnuematic solutions and work with our customers to ensure their specific needs are met and to offer the most suitable products to meet their budget and application.
                                    <br /><br />
                                    Electric Air continuously strives to provide our clients the highest possible standard and service. Here, we believe every customer is important.
                                    <br /><br />
                                    We provide a full range of services (<Link href='/services'><strong className={stylesIndex.nostyle}>find out more</strong></Link>) such as design, supply, installation, commissioning as well as servicing and maintenance.
                                    <br /><br />
                                    Electric Air also provide a 24/7 breakdown service and with more than 15 years experience in the industry, our technicians are fully equiped to effeciently repair your equipment with minimal downtime and disruption to your business.
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div className={stylesIndex.services}>
                    <h1>Get Up {'&'} Running</h1>
                    <br /><br />
                    <Box sx={{ width: '100%' }}>
                        <Grid container>
                            <Grid item lg={3} md={3} sm={12} xs={12} className={isMobile ? classes.itemCard : null}>
                                <Cardlet icon={<ion-icon name="sparkles"></ion-icon>} title={'25 Years Experience'} desc={'Our technicians are fully equiped to effeciently repair your equipment with minimal downtime!'} />
                            </Grid>
                            <Grid item lg={3} md={3} sm={12} xs={12} className={isMobile ? classes.itemCard : null}>
                                <Cardlet icon={<ion-icon name="color-filter"></ion-icon>} title={'All Inclusive'} desc={'From Oil Free to Rotary Screw, our technicians can handle the pressure!'} />
                            </Grid>
                            <Grid item lg={3} md={3} sm={12} xs={12} className={isMobile ? classes.itemCard : null}>
                                <Cardlet icon={<ion-icon name="fitness"></ion-icon>} title={'Breakdowns'} desc={'24/7 breakdown service, any time day or night. Our team is ready to support all your compressed air needs!'} />
                            </Grid>
                            <Grid item lg={3} md={3} sm={12} xs={12} className={isMobile ? classes.itemCard : null}>
                                <Cardlet icon={<ion-icon name="thumbs-up"></ion-icon>} title={'Quality Service'} desc={'With the use of quality parts and a team who cares, rest assured your equipment is well looked after!'} />
                            </Grid>
                        </Grid>
                    </Box>
                    {isMobile ? null : <><br /><br /></>}
                    <Link href='/services'>
                        <Button variant="contained" color='secondary' className={stylesIndex.fom}>Find Out More</Button>
                    </Link>
                    <br /><br />
                </div>
                <div className={stylesIndex.products}>
                    <h1>Product Range</h1>
                    <Box sx={{ width: '100%' }}>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={stylesIndex.item}>
                                <div>
                                    {isMobile ? <h3>Electric Air has wide range of products to offer, from Air Compressors to Contruction Equipment and more!</h3> : <h1>Electric Air has wide range of products to offer, from Air Compressors to Contruction Equipment and more!</h1>}
                                    <br /><br />
                                    <Link href='/products'>
                                        <Button variant="contained" color='primary' className={stylesIndex.fom}>Explore Products</Button>
                                    </Link>
                                    <br /><br />
                                </div>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={stylesIndex.item}>
                                <div className={stylesIndex.img2}>
                                    <Image
                                        src={AllProducts}
                                        alt="All Products Img"
                                        width={isMobile ? 350 : 600}
                                        height={isMobile ? 175 :300}
                                        />
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div className={stylesIndex.contact}>
                    <h1>Want To Find Out A Little More?</h1>
                    <p>If you would like more information, please give us a call or send a message!</p>
                    <br /><br />
                    <Link href='/contact'>
                        <Button variant="contained" color='secondary' className={stylesIndex.fom}>Contact Us</Button>
                    </Link>
                    <br /><br />
                    <br /><br />
                </div>
                {isMobile ? null : <Footer />}
            </div>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

export default index
