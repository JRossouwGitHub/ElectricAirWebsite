import styles from '../styles/Layout.module.css'
import stylesServices from '../styles/Services.module.css'
import Tabs from '../components/Tabs'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '../components/ListItem'
import Link from 'next/link'
import Meta from '../components/Meta'

const services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={styles.root}>
            <Meta title={'Services'} />
            <Tabs active={[false, true, false, false]} />
            <div className={styles.container}>
                <Box sx={{ width: '100%'}} className={stylesServices.grid}>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className={stylesServices.item}>
                                <div className={stylesServices.title}>
                                    <h1>Compressed Air</h1>
                                </div>
                                <ListItem text={'Distributor of Ceccato Air Compressors, Refrigerated Air Dryers, Mainline Filters and Genuine Parts.'} />
                                <ListItem text={'Sales, Service and Installation of Air Compressors (Rotary Screw and Piston).'} />
                                <ListItem text={'Sales, Service and Installation of all Compressed Air Accessories.'} />
                                <ListItem text={'Sales, Service and Installation of Pneumatic Equipment.'} />
                                <ListItem text={'Sales, Service and Repair of Airless Spray Equipment.'} />
                                <ListItem text={'Sales, Service and Repair of Air Operated Thrusters (Grundomats).'} />
                                <ListItem text={'Air Leak Testing.'} />
                                <ListItem text={'Air Quality/Micro Testing.'} />
                                <ListItem text={'Air Reticulation/Pipe Work Installation.'} />
                                <ListItem text={'Air and Electrical Tools.'} />
                                <ListItem text={'General Engineering.'} />
                                <ListItem text={'Plant Maintenance.'} />
                                <ListItem text={'24/7 Breakdown Service, Any Time Day or Night.'} />
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className={stylesServices.item}>
                                <div className={stylesServices.title}>
                                    <h1>Small Motors</h1>
                                </div>
                                <ListItem text={'Distributor of Ceccato Air Compressors, Refrigerated Air Dryers, Mainline Filters and Genuine Parts.'} />
                                <ListItem text={'Sales, Service and Installation of Air Compressors (Rotary Screw and Piston).'} />
                                <ListItem text={'Sales, Service and Installation of all Compressed Air Accessories.'} />
                                <ListItem text={'Sales, Service and Installation of Pneumatic Equipment.'} />
                                <ListItem text={'Sales, Service and Repair of Airless Spray Equipment.'} />
                                <ListItem text={'Sales, Service and Repair of Air Operated Thrusters (Grundomats).'} />
                                <ListItem text={'Air Leak Testing.'} />
                                <ListItem text={'Air Quality/Micro Testing.'} />
                                <ListItem text={'Air Reticulation/Pipe Work Installation.'} />
                                <ListItem text={'Air and Electrical Tools.'} />
                                <ListItem text={'General Engineering.'} />
                                <ListItem text={'Plant Maintenance.'} />
                                <ListItem text={'24/7 Breakdown Service, Any Time Day or Night.'} />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <div className={isMobile ? stylesServices.btnM : stylesServices.btn}>
                    <h2>If you would like a service that is not listed, please contact us!</h2>
                    <Link href='/contact'>
                        <Button variant='contained' color='primary'>Contact Us</Button>
                    </Link>
                </div>
                {isMobile ? null : <Footer />}
            </div>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

export default services
