import styles from '../styles/Layout.module.css'
import Meta from '../components/Meta'
import Tabs from '../components/Tabs'
import NavBar from '../components/NavBar'
import ScrollToTop from './ScrollToTop'
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Layout = (props) => {
    return (
        <>
            <Meta />
            <NavBar />
            <ScrollToTop {...props} className={styles.zindex}>
                <Fab color="primary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon fontSize='large' />
                </Fab>
            </ScrollToTop>
            <main>{ props.children }</main>
        </>
    )
}

export default Layout
