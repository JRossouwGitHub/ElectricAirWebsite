import styles from '../styles/Layout.module.css'
import stylesProducts from '../styles/Products.module.css'
import Tabs from '../components/Tabs'
import Meta from '../components/Meta'
import Footer from '../components/Footer'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductItem from '../components/ProductItem';
import OF1 from '../img/Oil Free/of1.PNG'
import OF2 from '../img/Oil Free/of2.PNG'
import OF3 from '../img/Oil Free/of3.PNG'
import OF4 from '../img/Oil Free/of4.PNG'

const oilfree = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'Oil Free'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>Reciprocating</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={OF1} title={'FLOOR MOUNTED ROTARY SCREW'} series={'WIS 40 - 75 Series'} features={['Drive Efficiency', 'Integrated Coolers', 'Quiet Operation', 'Easy Installation', 'Easy Maintenance', 'Up to 30% energy savings', 'Water Cooled', 'Zero Contaminants', 'Oil Free']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={OF2} title={'TANK MOUNTED OIL FREE SCROLL COMPRESSORS + DRYER'} series={'SPR Series'} features={['Oil Free Air', 'Outstanding Reliability', 'Low Maintenance', 'Energy Efficient', 'Simple Start/Stop Control', 'Long Operating Life', 'Low Vibration Levels']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={OF3} title={'FLOOR MOUNTED OIL FREE SCROLL COMPRESSORS'} series={'SPR Series'} features={['Oil Free Air', 'Outstanding Reliability', 'Low Maintenance', 'Energy Efficient', 'Simple Start/Stop Control', 'Long Operating Life', 'Low Vibration Levels', 'Dryer Option Available']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={OF4} title={'FLOOR MOUNTED OIL FREE SCROLL COMPRESSORS'} series={'SPR Series'} features={['Oil Free Air', 'Outstanding Reliability', 'Low Maintenance', 'Energy Efficient', 'Simple Start/Stop Control', 'Long Operating Life', 'Low Vibration Levels', 'Dryer Option']} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default oilfree
