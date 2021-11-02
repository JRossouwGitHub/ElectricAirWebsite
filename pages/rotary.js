import styles from '../styles/Layout.module.css'
import stylesProducts from '../styles/Products.module.css'
import Tabs from '../components/Tabs'
import Meta from '../components/Meta'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductItem from '../components/ProductItem';
import RS1 from '../img/Rotary Screw/rs1.png'
import RS2 from '../img/Rotary Screw/rs2.png'
import RS3 from '../img/Rotary Screw/rs3.png'
import RS4 from '../img/Rotary Screw/rs4.png'
import RS5 from '../img/Rotary Screw/rs5.png'
import RS6 from '../img/Rotary Screw/rs6.png'

const rotary = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'Rotary Screw'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>Rotary Screw</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={RS1} title={'FLOOR & TANK MOUNTED'} series={'CSM MINI / MAXI Series'} features={['ES 4000 Controller', '100% continuous duty cycle', 'Lower Service costs and extended service intervals', 'Reduced Power Consumption', 'Very low vibration and noise level', 'Easy installation & maintenance', 'Robust and efficient compressor elements']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={RS2} title={'FLOOR & TANK MOUNTED ROTARY SCREW'} series={'DRA Series'} features={['ES 4000 Controller', 'High quality and heavy duty WEG motor', 'Very low noise level', 'Low energy consumption', 'Energy stop', 'IP 54 electrical cubicle', 'Air tank with forklift bars', 'Danfoss converter', 'One pressure varient covers all applications', 'Dryer Unit Optional']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={RS3} title={'FLOOR MOUNTED GEAR DRIVEN ROTARY SCREW'} series={'DRB Series'} features={['Innovative Design', 'Low Noise Levels', 'Long Lifetime', 'Full Automatic control', 'Low Energy Consumption', 'Dryer Unit Optional']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={RS4} title={'FLOOR MOUNTED GEAR DRIVEN ROTARY SCREW'} series={'DRC Series'} features={['Large Service Accessibility', 'ES4000 Controller', 'Low Noise Levels', 'Simple Installation and Maintenance', 'High Quality Design', 'User-Friendly Operation', 'Dryer Unit Optional']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={RS5} title={'FLOOR MOUNTED GEAR DRIVEN ROTARY SCREW'} series={'DRD Series'} features={['Large Service Accessibility', 'ES4000 Controller', 'Low Noise Levels', 'Simple Installation and Maintenance', 'High Quality Design', 'User-Friendly Operation', 'Dryer Unit Optional']} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={RS6} title={'FLOOR MOUNTED GEAR DRIVEN ROTARY SCREW'} series={'DRE Series'} features={['Large Service Accessibility', 'ES4000 Controller', 'Low Noise Levels', 'Simple Installation and Maintenance', 'High Quality Design', 'User-Friendly Operation']} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default rotary
