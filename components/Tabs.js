import styles from '../styles/Tabs.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

const Tabs = ({active}) => {
    const activeH = active[0]
    const activeS = active[1]
    const activeP = active[2]
    const activeC = active[3]

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={styles.root}>
            {isMobile ? null : (<>
                <Link href="/" className={styles.link}>
                    <ListItem className={activeH ? styles.linkBtnActive : styles.linkBtn}>
                        <ListItemIcon className={activeH ? styles.linkImgActive : styles.linkImg}>
                            <ion-icon name="home"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/services" className={styles.link}>
                    <ListItem className={activeS ? styles.linkBtnActive : styles.linkBtn}>
                        <ListItemIcon className={activeS ? styles.linkImgActive : styles.linkImg}>
                            <ion-icon name="construct"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/products" className={styles.link}>
                    <ListItem className={activeP ? styles.linkBtnActive : styles.linkBtn}>
                        <ListItemIcon className={activeP ? styles.linkImgActive : styles.linkImg}>
                            <ion-icon name="pricetags"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/contact" className={styles.link}>
                    <ListItem className={activeC ? styles.linkBtnActive : styles.linkBtn}>
                        <ListItemIcon className={activeC ? styles.linkImgActive : styles.linkImg}>
                            <ion-icon name="call"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
            </>)}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

Tabs.defaultProps = {
    active: [true, false, false, false]
}

export default Tabs
