import styles from '../styles/Layout.module.css'
import Tabs from '../components/Tabs'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'

const contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={styles.root}>
            <Tabs active={[false, false, false, true]} />
            <div className={styles.container}>
                Contact
                {isMobile ? null : <Footer />}
            </div>
        </div>
    )
}

export default contact
