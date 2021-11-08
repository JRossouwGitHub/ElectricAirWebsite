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
import TP1 from '../img/Reciprocating/3 Phase/3p1.PNG'
import PD1 from '../img/Reciprocating/Petrol Diesel/pd1.PNG'
import PD2 from '../img/Reciprocating/Petrol Diesel/pd2.PNG'
import SP1 from '../img/Reciprocating/Single Phase/sp1.PNG'
import SP2 from '../img/Reciprocating/Single Phase/sp2.PNG'

const reciprocating = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'Reciprocating'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>Reciprocating</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container className={stylesProducts.gridContainer}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Single Phase</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={SP1} title={'SINGLE PHASE DIRECT DRIVE'} series={'Piston Series'} features={['Light Weight', 'Portable', 'Cast Iron Barrel']} suitable={['Air Guns', 'Tyre Inflator', 'Light Duty']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={SP2} title={'SINGLE STAGE BELT DRIVE'} series={'Piston Series'} features={['Safe & Robust', 'Movability', 'Lower Air Temperature', 'Simultaneous Use', 'User Friendly', 'Inbuilt Tank - PRO']} suitable={['Industrial Applications', 'Low Noise Level - Areas with a noise restriction']} />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>3 Phase</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={TP1} title={'SINGLE STAGE BELTAIR PRO'} series={'Piston Series'} features={['Cast Iron Cylinder', 'Stainless Steel Valve Plates', 'Stationary and Wheeled Models', 'Finned After Cooler & Intercooler']} suitable={['Industrial Applications', 'Low Noise Level - Areas with a noise restriction']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Petrol / Diesel</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PD1} title={'PETROL / DIESEL DRIVEN'} series={'EA Series'} features={['Large Pneumatic Wheels', 'Roll Bars Available', 'Honda / Lombardini Engines', 'Isolated Top Plates']} suitable={['Remote Applications']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PD2} title={'PETROL DRIVEN (NZ)'} series={'B6000 Series'} features={['Low Profile Design', 'Genuine Honda Motor', 'NZ Made Tank', 'NZ Assembled', 'High Quality Belt Guard', 'Italian Pump']} suitable={['Tyre Trucks & Utes']} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default reciprocating
