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
import CP1 from '../img/CP Air Tools/cat1.PNG'
import CP2 from '../img/CP Air Tools/cat2.PNG'
import CP3 from '../img/CP Air Tools/cat3.PNG'
import CP4 from '../img/CP Air Tools/cat4.PNG'
import CP5 from '../img/CP Air Tools/cat5.PNG'
import CP6 from '../img/CP Air Tools/cat6.PNG'
import CP7 from '../img/CP Air Tools/cat7.PNG'
import CP8 from '../img/CP Air Tools/cat8.PNG'
import CP9 from '../img/CP Air Tools/cat9.PNG'
import CP10 from '../img/CP Air Tools/cat10.PNG'
import CP11 from '../img/CP Air Tools/cat11.PNG'
import CP12 from '../img/CP Air Tools/cat12.PNG'
import CP13 from '../img/CP Air Tools/cat13.PNG'
import CP14 from '../img/CP Air Tools/cat14.PNG'
import CP15 from '../img/CP Air Tools/cat15.PNG'
import CP16 from '../img/CP Air Tools/cat16.PNG'
import CP17 from '../img/CP Air Tools/cat17.PNG'
import CP18 from '../img/CP Air Tools/cat18.PNG'
import CP19 from '../img/CP Air Tools/cat19.PNG'
import CP20 from '../img/CP Air Tools/cat20.PNG'
import CP21 from '../img/CP Air Tools/cat21.PNG'
import CP22 from '../img/CP Air Tools/cat22.PNG'
import CP23 from '../img/CP Air Tools/cat23.PNG'
import CP24 from '../img/CP Air Tools/cat24.PNG'
import CP25 from '../img/CP Air Tools/cat25.PNG'
import CP26 from '../img/CP Air Tools/cat26.PNG'
import CP27 from '../img/CP Air Tools/cat27.PNG'
import CP28 from '../img/CP Air Tools/cat28.PNG'
import CP29 from '../img/CP Air Tools/cat29.PNG'
import CP30 from '../img/CP Air Tools/cat30.PNG'
import CP31 from '../img/CP Air Tools/cat31.PNG'
import CP32 from '../img/CP Air Tools/cat32.PNG'
import CP33 from '../img/CP Air Tools/cat33.PNG'
import CP34 from '../img/CP Air Tools/cat34.PNG'
import CP35 from '../img/CP Air Tools/cat35.PNG'
import CP36 from '../img/CP Air Tools/cat36.PNG'

const tools = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <Meta title={'CP Air Tools'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <div className={stylesProducts.headingBG}>
                    <strong className={stylesProducts.headingTitle}>CP Air Tools</strong>
                </div>
                <Box sx={{ width: '100%'}}>
                    <Grid container className={stylesProducts.gridContainer}>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP1} title={'3/8" IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['Durable',
                                'Light Weight Composite Housing',
                                'Full Teasing Trigger',
                                'Low Noise']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP2} title={'1/2" IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['Durable',
                                'High Power: 922 ft/lb in Reverse (CP7748 / CP7748-2)',
                                'Rated for Industrial Maintenance',
                                'Lightweight Composite Housing',
                                'Full Teasing Trigger',
                                'Low Noise',
                                'TL Torque Limited in forward - for use in automotive']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP3} title={'3/4" IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['High Power: 1200 ft/lb in Reverse',
                                'Compact Size / Lightweight at 3.5 - 6kg',
                                'Powerful Motor and Clutch',
                                'Low Noise',
                                'Combines Power Regulator with Fwd & Rev']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP4} title={'1" IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['Pinless Rocking Dog Mechanism',
                                '1/2” Hose Inlet',
                                'Integrated Regulator With 3 Settings',
                                'Full Teasing Trigger',
                                'Superior Handling',
                                'Lightweight Option CP7780']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP5} title={'INDUSTRIAL 3/4" IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['Super Industrial - Multi-Purpose',
                                'Powerful & Easy to Control',
                                'Durable Clutch',
                                'Composite Body (CP8272-D)',
                                'Aluminium Body (CP6060 Series)']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP6} title={'INDUSTRIAL 1" IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['Pinless Rocking Dog Mechanism',
                                'Aluminium Body & Clutch Housing',
                                '4 Position Regulator',
                                '1” Medium Duty Versatile Wrench',
                                'Hole Bail for Balancer']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP7} title={'1/4” RATCHET WRENCHES'} series={'CP Air Tool Series'} features={
                                ['Easy Speed Control',
                                'Compact and Lightweight',
                                'Easy touch Variable Trigger',
                                'Ideal For Confined Areas']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP8} title={'3/8” RATCHET WRENCHES'} series={'CP Air Tool Series'} features={
                                ['Progressive Tease Throttle',
                                'Compact and Lightweight',
                                'Easy touch Variable Trigger',
                                'Ideal For General Maintenance and Repair',
                                'Super Duty',
                                'High Speed']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP9} title={'1/2” RATCHET WRENCHES'} series={'CP Air Tool Series'} features={
                                ['Tri Spring Anti Slip Head (CP Patent)',
                                'Highest Torque on the Market',
                                'Lightweight & Well Balanced',
                                'Easy touch Variable Trigger',
                                'Ideal For General Maintenance and Repair',
                                'Super Duty']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP10} title={'6mm (1/4”) DRILL'} series={'CP Air Tool Series'} features={
                                ['Industrial Quality Jacobs Chuck',
                                'Handle Exhaust',
                                'Durable Gearbox',
                                'Ergonomic Handle']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP11} title={'10mm (3/8”) DRILLS'} series={'CP Air Tool Series'} features={
                                ['Powerful Motor',
                                'Reversible',
                                'Ergonomic Grip',
                                'Industrial Quality Jacobs Chuck',
                                'Handle Exhaust',
                                'Fast & Efficient']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP12} title={'13mm (1/2”) DRILLS'} series={'CP Air Tool Series'} features={
                                ['Side Handle',
                                'Ergonomic Grip',
                                'Industrial Quality Jacobs Chuck',
                                'Handle Exhaust',
                                'Powerful and Resistant to Stalls']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP13} title={'10mm (3/8”) INDUSTRIAL DRILL'} series={'CP Air Tool Series'} features={
                                ['Industrial Quality Jacobs Chuck',
                                'Handle Exhaust',
                                'Durable Gearbox',
                                'Ergonomic Handle',
                                'Low Vibrations',
                                'Best Power to Weight Ratio']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP14} title={'13mm (1/2”) INDUSTRIAL DRILLS'} series={'CP Air Tool Series'} features={
                                ['Option for Keyless Chuck (KL)',
                                'Ergonomic Handle',
                                'Low Vibrations',
                                'Best Power to Weight Ratio']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP15} title={'13mm (1/2”) PISTOL DRILL'} series={'CP Air Tool Series'} features={
                                ['Teasing Throttle',
                                'Industrial Quality Jacobs Chuck',
                                'Durable Gearbox',
                                'Ergonomic Grip',
                                'Side Handle']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP16} title={'3mm (1/8”) DIE GRINDER'} series={'CP Air Tool Series'} features={
                                ['Great Power to Weight Ratio',
                                'Very Low Noise',
                                'Easy to Handle',
                                'Compact and Lightweight Pencil Grinder']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP17} title={'6mm (1/4”) DIE GRINDERS'} series={'CP Air Tool Series'} features={
                                ['Built-in Air Regulator',
                                'Swivel Air Inlet',
                                'Rear Exhaust',
                                'Low Noise Level']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP18} title={'ANGLE GRINDERS'} series={'CP Air Tool Series'} features={
                                ['Adjustable Protective Guard',
                                'Aluminium Alloy Housing',
                                'Spiral Bevel Gears',
                                'Ergonomic Handle']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP19} title={'SCREWDRIVERS'} series={'CP Air Tool Series'} features={
                                ['Directional Quick Change',
                                'External Cushion Clutch Adjustment',
                                'High Torque',
                                'Super Duty']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP20} title={'CHIPPING HAMMERS'} series={'CP Air Tool Series'} features={
                                ['Directional Quick Change',
                                'External Cushion Clutch Adjustment',
                                'High Torque',
                                'Super Duty']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP21} title={'NEEDLE SCALER'} series={'CP Air Tool Series'} features={
                                ['General Purpose Needle Scaler',
                                'Power and Precision',
                                'Ideal for Surface Work',
                                'Durable']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP22} title={'ENGRAVING PEN'} series={'CP Air Tool Series'} features={
                                ['Standard Fine Point Engraving Pen',
                                'Compact and Lightweight',
                                'Cushion Finger Grip',
                                'Low Air Consumption']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP23} title={'RANDOM ORBITAL SANDERS'} series={'CP Air Tool Series'} features={
                                ['Powerful 0.28hp Motor',
                                'Ergonomic Tear Drop Design',
                                'Low Noise & Vibration',
                                '5/16-24” Spindle Thread',
                                'Shut-off & Speed Control Switch']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP24} title={'DUAL ACTION SANDER'} series={'CP Air Tool Series'} features={
                                ['General Purpose Sander',
                                'PSA Sanding Pad',
                                'Power Regulator for Precise Control',
                                'Insulated Grip']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP25} title={'BELT SANDERS'} series={'CP Air Tool Series'} features={
                                ['Quick-Change Belt Replacement',
                                'Adjustable Sanding Arm',
                                'Handle Exhaust and Swivel Air Inlet',
                                'Handle Exhaust']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP26} title={'ROTARY SANDING KIT'} series={'CP Air Tool Series'} features={
                                ['Compact & Lightweight',
                                'Rubber Molded Pistol Grip',
                                'Silent Handle Exhaust',
                                'Adjustable Power Regulator']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP27} title={'NIBBLER'} series={'CP Air Tool Series'} features={
                                ['Heavy Duty',
                                'Optional Cutting Positions',
                                'Lever Throttle',
                                'Easy to Control']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP28} title={'BODY SAW'} series={'CP Air Tool Series'} features={
                                ['Rugged Construction',
                                'Adjustable Guard Line',
                                'Comfortable Rubber Grip',
                                'Included Saw Blades CP881 - (1) 32T / CP7900 (1) 18T, 28T, 32T']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP29} title={'SHEARS'} series={'CP Air Tool Series'} features={
                                ['Powerful & Efficient 0.5hp Motor',
                                'Cuts up to 18 Gauge Metal',
                                'Triple Idler Planetary Gearing',
                                'Ergonomic Handle Design']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP30} title={'RIVETER'} series={'CP Air Tool Series'} features={
                                ['Compact Size, Lightweight & Strong',
                                'For Aluminium, Copper & Softer Materials',
                                'Transparent Container',
                                'Includes Nose Pieces for 2.4, 3.2, 4 & 4.8mm Rivets',
                                'Low Vibrations and Low Noise Level']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP31} title={'CORDLESS - 1/4” IMPACT DRIVER'} series={'CP Air Tool Series'} features={
                                ['Ultra Compact',
                                'Lightweight',
                                'Full teasing trigger',
                                '1.5Ah battery']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP32} title={'CORDLESS - 1/2” IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['Powerful',
                                'Efficient',
                                'Full teasing trigger',
                                '4Ah battery']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP33} title={'CORDLESS - 1/2” HAMMER DRILL DRIVER'} series={'CP Air Tool Series'} features={
                                ['Compact',
                                'Versatile',
                                'Full teasing trigger',
                                '4Ah battery']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP34} title={'CORDLESS - 3/8” DRILL DRIVER'} series={'CP Air Tool Series'} features={
                                ['Ultra compact',
                                'Lightweight',
                                'Electronic trigger with variable speed',
                                '1.5Ah battery']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP35} title={'CORDLESS - 3/8” IMPACT WRENCH'} series={'CP Air Tool Series'} features={
                                ['Compact',
                                'Versatile',
                                'Full teasing trigger',
                                '4Ah battery']
                                } />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className={stylesProducts.gridItem}>
                            <ProductItem image={CP36} title={'TYRE BUFFER'} series={'CP Air Tool Series'} features={
                                ['Low speed tire buffer',
                                'Adjustable speed control',
                                'Quick change slip chuck',
                                'Lock-off lever to prevent accidental start-up',
                                'Rear exhaust']
                                } />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default tools
