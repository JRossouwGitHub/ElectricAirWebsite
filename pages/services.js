import styles from '../styles/Layout.module.css'
import Tabs from '../components/Tabs'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'

const services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={styles.root}>
            <Tabs active={[false, true, false, false]} />
            <div className={styles.container}>
                Services
                {isMobile ? null : <Footer />}
            </div>
        </div>
    )
}

export default services
