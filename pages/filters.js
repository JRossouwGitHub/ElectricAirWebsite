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

const filters = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'Alternate Inline Air Filter Elements'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>Alternate Inline Air Filter Elements</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container className={stylesProducts.gridContainer}>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem title={'Alternate Inline'} series={'Solutions'} features={
                                ['Breathable Air Units',
                                'Cross Over’s for Atlas',
                                'Comp Air',
                                'IR',
                                'Kaeser',
                                'Dominick Hunter',
                                'Ultrafilter']
                                } />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default filters
