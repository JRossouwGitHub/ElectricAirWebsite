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
import QAS1 from '../img/Quality Air Solutions/qas1.PNG'
import QAS2 from '../img/Quality Air Solutions/qas2.PNG'
import QAS3 from '../img/Quality Air Solutions/qas3.PNG'
import QAS4 from '../img/Quality Air Solutions/qas4.PNG'
import QAS5 from '../img/Quality Air Solutions/qas5.PNG'
import QAS6 from '../img/Quality Air Solutions/qas6.PNG'
import QAS7 from '../img/Quality Air Solutions/qas7.PNG'

const solutions = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'Quality Air Solutions'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>Quality Air Solutions</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container className={stylesProducts.gridContainer}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Refrigerated Air Dryers</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={QAS1} title={'REFRIGERATED AIR DRYERS'} series={'CDX Series'} features={
                                ['Prolonged Life of Pneumatic Tools and Equipment',
                                'Intelligent Automatic Discharger',
                                'Energy Savings Due to Fewer Line Pressure Drops',
                                'Oversized Ports',
                                'R134A',
                                'Package Comes with 2x Filters of Equal Flow',
                                'CDX36-77 now with R410A']
                                } />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Adsorption Dryers</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={QAS2} title={'ADSORPTION DRYERS'} series={'ADS Series'} features={
                                ['European Made',
                                'Included Filtration',
                                'Compact Strong Structure',
                                'Comes with filtration']
                                } />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Air Receivers</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={QAS3} title={'AIR RECEIVERS'} series={'ARS Series'} features={
                                ['Painted Compressed Air Blue',
                                'Italian Made',
                                'High Flow Ports',
                                'Lifting Eye',
                                'Up to 16BAR Available',
                                'Option for Vitroflex to Reduce Contaminants']
                                } />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Auto Drains</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={QAS4} title={'AUTO DRAINS'} series={'LD RANGE'} features={
                                ['IP65 Rated',
                                'Double Mesh Integrated Filter',
                                'Hard Coated Aluminium Collector',
                                'Revolving “Easy Lock” Connection',
                                'No Air Loss',
                                'No Noise',
                                'Energy Savings']
                                } />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Oil Water Separators</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={QAS5} title={'OIL WATER SEPERATORS'} series={'FOD Series'} features={
                                ['Maintenance Indicator',
                                'Environmentally Friendly',
                                'Legal Way to Dispose of Condensate',
                                'Easy to Install']
                                } />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Cyclonic Separators</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={QAS6} title={'CYCLONIC SEPERATORS'} series={'CYS Series'} features={
                                ['Prevents Damaging Particles from Entering the Air and Oil Circuits',
                                'Improves Oil Efficiency',
                                'Prolongs the Life of the Air/Oil Separator Element and Oil Filter']
                                } />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Ceccato Line Filters</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={QAS7} title={'CECCATO LINE FILTERS'} series={'CLF Series'} features={
                                ['P Filter - Oil aerosol & solid particles',
                                'G Filter - Oil aerosol & solid particles/Precede with water separator',
                                'C Filter -Oil aerosol & solid particles/Precede with G',
                                'V Filter - Oil vapour/Precede with G & C',
                                'S Filter - Solid Particles']
                                } />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default solutions
