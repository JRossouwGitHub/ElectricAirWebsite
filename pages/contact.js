import styles from '../styles/Layout.module.css'
import stylesContact from '../styles/Contact.module.css'
import * as React from 'react'
import Tabs from '../components/Tabs'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ID from '../components/ID'
import Lucas from '../img/IDs/ID_Lucas.jpg'
import Jenny from '../img/IDs/ID_Jenny.jpg'
import Fil from '../img/IDs/ID_Fil.jpg'
import Steve from '../img/IDs/ID_Steve.jpg'
import Manie from '../img/IDs/ID_Manie.jpg'

const contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    return (
        <div className={styles.root}>
            <Meta title={'Contact Us'} />
            <Tabs active={[false, false, false, true]} />
            <div className={styles.container}>
                <Box sx={{ width: '100%'}}>
                    <Grid container>
                        {isMobile ? null : (<>
                            <Grid item lg={6} md={6} sm={12} xs={12}>  
                                <h1 className={stylesContact.title}>The Team</h1>
                                <Box sx={{ width: '100%'}} className={stylesContact.grid}>
                                    <Grid container className={stylesContact.item}>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <h3 className={stylesContact.subTitle}>Directors</h3>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <ID ID={Lucas} name={'Luke'} email={'luke@electricair.co.nz'} mobile={'022 166 0780'} />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <ID ID={Jenny} name={'Jenny'} email={'jenny@electricair.co.nz'} mobile={'022 629 1167'} />
                                        </Grid>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <h3 className={stylesContact.subTitle}>Technicians</h3>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <ID ID={Fil} name={'Fil'} email={'fil@electricair.co.nz'} mobile={'022 017 8045'} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </>)}
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <h1 className={stylesContact.title}>Our Details</h1>
                            <div className={stylesContact.details}>
                                <p><strong className={stylesContact.subTitle}>Technical Enquiries:</strong> luke@electricair.co.nz {isMobile ? (<><br /><br /><a href="tel:022 166 0780" id="call">022 166 0780 <ion-icon name="call"></ion-icon></a></>) : '| 022 166 0780'}</p>
                                <p><strong className={stylesContact.subTitle}>Office Enquiries:</strong> admin@electricair.co.nz {isMobile ? (<><br /><br /><a href="tel: 07 260 1177" id="call">07 260 1177 <ion-icon name="call"></ion-icon></a></>) : '| (07) 260 1177'}</p>
                                <p><strong className={stylesContact.subTitle}>Business Hours:</strong></p>
                                <p>Monday - Friday | 8:00am - 5:00pm</p>
                                <p><strong className={stylesContact.subTitle}>Address:</strong></p>
                                <p>143A Clark Road, Ngāruawāhia, Waikato</p>
                                <br />
                                <h2 className={stylesContact.subTitle}>Send Us A Message</h2>
                                <form
                                        id="form"
                                        action="https://formspree.io/f/xzbylekz"
                                        method="POST"
                                        className={stylesContact.form}
                                        onSubmit={() => {
                                            setTimeout(function(){
                                                setName('')
                                                setNumber('')
                                                setEmail('')
                                                setMessage('')
                                            }, 1000);
                                        }}
                                    >
                                        <input name="Name" placeholder="Name... (optional)" value={name} onChange={() => setName(event.target.value)} className={stylesContact.input} /><br />
                                        <input name="Number" type="number" placeholder="Number... (optional)" value={number} onChange={() => setNumber(event.target.value)} className={stylesContact.input} /><br />
                                        <input type="email" name="Email" placeholder="Email... (required)" value={email} onChange={() => setEmail(event.target.value)} className={stylesContact.input} required /><br />
                                        <textarea name="Message" placeholder="Message... (required)" value={message} onChange={() => setMessage(event.target.value)} className={stylesContact.textarea} required></textarea><br /><br />
                                        <Button className={isMobile ? stylesContact.btnM : stylesContact.btn} variant='contained' color='primary' type='submit'>Send</Button>
                                        {isMobile ? (<><br /><br /><br /><br /></>) : null}
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <div className={isMobile ? stylesContact.mapM : stylesContact.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12630.462332251891!2d175.150326!3d-37.6817397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d239973cb0c9f%3A0x8da83356fb908540!2sElectric%20Air%20Ltd!5e0!3m2!1sen!2snz!4v1723719508860!5m2!1sen!2snz" className={isMobile ? stylesContact.iframeM : stylesContact.iframe} allowFullScreen="" loading="lazy"></iframe>
                </div>
                {isMobile ? null : <Footer />}
            </div>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

export default contact
