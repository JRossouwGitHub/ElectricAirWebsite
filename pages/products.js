import styles from '../styles/Layout.module.css'
import Tabs from '../components/Tabs'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'

const products = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={styles.root}>
            <Meta title={'Products'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                Products
                {isMobile ? null : <Footer />}
            </div>
        </div>
    )
}

export default products
