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
import LT1 from '../img/Construction Equipment/Light Towers/lt1.PNG'
import LT2 from '../img/Construction Equipment/Light Towers/lt2.PNG'
import PG1 from '../img/Construction Equipment/Portable Generators/pg1.PNG'
import PG2 from '../img/Construction Equipment/Portable Generators/pg2.PNG'
import PG3 from '../img/Construction Equipment/Portable Generators/pg3.PNG'
import PG4 from '../img/Construction Equipment/Portable Generators/pg4.PNG'
import PG5 from '../img/Construction Equipment/Portable Generators/pg5.PNG'
import PG6 from '../img/Construction Equipment/Portable Generators/pg6.PNG'
import PG7 from '../img/Construction Equipment/Portable Generators/pg7.PNG'
import PG8 from '../img/Construction Equipment/Portable Generators/pg8.PNG'

const construction = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'Construction Equipment'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>Construction Equipment</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container className={stylesProducts.gridContainer}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Light Towers</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={LT1} title={'LIGHT TOWER'} series={'CPLT Series'} features={
                                ['User friendly controls',
                                'Long fuel autonomy',
                                'Easy transport',
                                'Bright, reliable light',
                                'Quick light positioning',
                                'Heavy-duty construction',
                                'Easy service access',
                                'Spillage-free frame',
                                'Hydraulic mast (V15 model has manual mast)',
                                '340 - 360 degree rotation',
                                'Able to withstand up to 80km winds']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={LT2} title={'LIGHT TOWER'} series={'CPLB Series'} features={
                                ['User friendly controls',
                                'Long fuel autonomy',
                                'Easy transport',
                                'Bright, reliable light',
                                'Quick light positioning',
                                'Heavy-duty construction',
                                'Easy service access',
                                'Spillage-free frame',
                                'Hydraulic mast (V15 model has manual mast)',
                                '340 - 360 degree rotation',
                                'Able to withstand up to 80km winds']
                                } />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h1 className={stylesProducts.gridItemTitle}>Portable Generators</h1>    
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG1} title={'PORTABLE GENERATORS'} series={'CPPG Series'} features={
                                ['User-friendly controls',
                                'A large fuel tank guarantees an extended runtime',
                                'Built for durability with strong, sturdy components',
                                'Easy handling',
                                'Safety features that protect operators and tools',
                                'High quality CP gasoline engine',
                                'Stable electrical output',
                                '50hz frequency']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG2} title={'PORTABLE GENERATORS'} series={'CPPG Series'} features={
                                ['User-friendly controls',
                                'A large fuel tank guarantees an extended runtime',
                                'Built for durability with strong, sturdy components',
                                'Easy handling',
                                'Safety features that protect operators and tools',
                                'High quality CP gasoline engine',
                                'Stable electrical output']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG3} title={'PORTABLE GENERATORS'} series={'CPPG Series'} features={
                                ['User-friendly controls',
                                'Top of the line, built for durability with strong, sturdy components',
                                'Extended service life',
                                'Easy handling',
                                'Safety features that protect operators and tools',
                                'Reliable in tough environments',
                                'Stable electrical output']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG4} title={'PORTABLE GENERATORS'} series={'CPPG Series'} features={
                                ['User-friendly controls',
                                'Top of the line, built for durability with strong, sturdy components',
                                'Sound proofed - perfect for areas with noise restrictions',
                                'Easy handling',
                                'Safety features that protect operators and tools',
                                'Reliable in tough environments']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG5} title={'PORTABLE GENERATORS'} series={'CPSG Series'} features={
                                ['Advanced control panel - enables users to control and operate it remotely',
                                'Galvanized canopy',
                                'Built for tough 24/7 conditions',
                                'Safety features that protect operators and tools',
                                'Easy drainage/cleaning to prevent damage from contaminants',
                                'Soundproofed structure']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG6} title={'PORTABLE GENERATORS'} series={'CPSG Series'} features={
                                ['Advanced control panel - enables users to control and operate it remotely',
                                'Galvanized canopy',
                                'Built for tough 24/7 conditions',
                                'Safety features that protect operators and tools',
                                'Easy drainage/cleaning to prevent damage from contaminants',
                                'Soundproofed structure']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG7} title={'PORTABLE GENERATORS'} series={'CPDG Series'} features={
                                ['User-friendly analogue control',
                                'Galvanized canopy, built for durability with strong, sturdy components',
                                'Lifting Beam',
                                'Spillage free frame with forklift slots',
                                'Robust terminal board that is suitable for connection with or without clamps',
                                'Reliable in tough environments']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={PG8} title={'PORTABLE GENERATORS'} series={'CPDG Series'} features={
                                ['User-friendly analogue control',
                                'Galvanized canopy, built for durability with strong, sturdy components',
                                'Lifting Beam',
                                'Spillage free frame with forklift slots',
                                'Robust terminal board that is suitable for connection with or without clamps',
                                'Reliable in tough environments']
                                } />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default construction
