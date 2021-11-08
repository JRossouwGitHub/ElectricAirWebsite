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
import P1 from '../img/Portable/p1.PNG'
import P2 from '../img/Portable/p2.PNG'
import P3 from '../img/Portable/p3.PNG'
import P4 from '../img/Portable/p4.PNG'
import P5 from '../img/Portable/p5.PNG'
import P6 from '../img/Portable/p6.PNG'
import P7 from '../img/Portable/p7.PNG'
import P8 from '../img/Portable/p8.PNG'

const portable = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'Portable'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>Portable</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container className={stylesProducts.gridContainer}>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P1} title={'PORTABLE COMPRESSORS'} series={'CPS Red Rock Series'} features={
                                ['Kubota V 1505 T Engine',
                                'User friendly instrument panel',
                                'Reduced fuel consumption',
                                'Easy access to components',
                                'Removable fuel tank',
                                'Air venting system',
                                'Spillage free frame',
                                'Efficient air/fuel filtration',
                                'Red Rock polythene canopy',
                                'Low cost of ownership',
                                'Ease of operation',
                                'Low transportation costs']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P2} title={'PORTABLE COMPRESSORS'} series={'CPS Series'} features={
                                ['Kubota Engine',
                                '250 hr service intervals',
                                'Galvanized canopy',
                                'User friendly instrument panel',
                                'Low noise',
                                'Low cost of ownership',
                                'Increase uptime',
                                'Robust, impact resistant',
                                'Ease of operation',
                                'Able to work in noise sensitive areas']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P3} title={'PORTABLE COMPRESSORS'} series={'CPS Series'} features={
                                ['Deutz Engine',
                                '250 hr service intervals',
                                'Galvanized canopy',
                                'User friendly instrument panel',
                                'Low noise',
                                'Low cost of ownership',
                                'Increase uptime',
                                'Robust, impact resistant',
                                'Ease of operation',
                                'Able to work in noise sensitive areas',
                                'Factory Fitted After cooler']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P4} title={'PORTABLE COMPRESSORS'} series={'CPS Series'} features={
                                ['Deutz Engine',
                                '250 hr service intervals',
                                'Galvanized canopy',
                                'User friendly instrument panel',
                                'Low noise',
                                'Low cost of ownership',
                                'Increase uptime',
                                'Robust, impact resistant',
                                'Ease of operation',
                                'Able to work in noise sensitive areas',
                                'Factory Fitted After cooler']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P5} title={'PORTABLE COMPRESSORS'} series={'CPS Series'} features={
                                ['Deutz Engine',
                                'Efficient screw element',
                                'Efficient air/fuel filtration',
                                'Galvanized powder coated canopy',
                                'User friendly instrument panel',
                                'Low noise level',
                                'Worldwide support, high up time',
                                'Low cost of ownership',
                                'Protection from engine damage',
                                'Robust, impact resistant',
                                'Ease of operation',
                                'Able to work in noise sensitive areas',
                                'Low transportation costs',
                                'Factory Fitted After cooler']
                                } />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P6} title={'PORTABLE COMPRESSORS'} series={'CPS Series'} features={
                                ['Cummins Engine',
                                'Efficient screw element',
                                'Efficient air/fuel filtration',
                                'Galvanized powder coated canopy',
                                'User friendly instrument panel',
                                'Low noise level',
                                'Worldwide support, high up time',
                                'Low cost of ownership',
                                'Protection from engine damage',
                                'Robust, impact resistant',
                                'Ease of operation',
                                'Able to work in noise sensitive areas',
                                'Low transportation costs',
                                'Factory Fitted After cooler',
                                'CPS 400-14 Deutz engine']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P7} title={'PORTABLE COMPRESSORS'} series={'CPS Series'} features={
                                ['Cummins Engine',
                                'Efficient screw element',
                                'Efficient air/fuel filtration',
                                'Galvanized powder coated canopy',
                                'User friendly instrument panel',
                                'Low noise level',
                                'Worldwide support, high up time',
                                'Low cost of ownership',
                                'Protection from engine damage',
                                'Robust, impact resistant',
                                'Ease of operation',
                                'Able to work in noise sensitive areas',
                                'Low transportation costs',
                                'Factory Fitted After cooler']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={P8} title={'PORTABLE COMPRESSORS'} series={'CPS Series'} features={
                                ['Cummins Engine',
                                'Efficient screw element',
                                'Efficient air/fuel filtration',
                                'Galvanized powder coated canopy',
                                'User friendly instrument panel',
                                'Low noise level',
                                'Worldwide support, high up time',
                                'Low cost of ownership',
                                'Protection from engine damage',
                                'Robust, impact resistant',
                                'Ease of operation',
                                'Able to work in noise sensitive areas',
                                'Low transportation costs',
                                'Factory Fitted After cooler']
                                } />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default portable
