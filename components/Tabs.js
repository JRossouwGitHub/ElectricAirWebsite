import styles from '../styles/Layout.module.css'
import stylesTabs from '../styles/Tabs.module.css';
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
        <div className={stylesTabs.root}>
            {isMobile ? null : (<>
                <Link href="/" className={stylesTabs.link}>
                    <ListItem className={activeH ? stylesTabs.linkBtnActive : stylesTabs.linkBtn}>
                        <ListItemIcon className={activeH ? stylesTabs.linkImgActive : stylesTabs.linkImg}>
                            <ion-icon name="home"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/services" className={stylesTabs.link}>
                    <ListItem className={activeS ? stylesTabs.linkBtnActive : stylesTabs.linkBtn}>
                        <ListItemIcon className={activeS ? stylesTabs.linkImgActive : stylesTabs.linkImg}>
                            <ion-icon name="construct"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/products" className={stylesTabs.link}>
                    <ListItem className={activeP ? stylesTabs.linkBtnActive : stylesTabs.linkBtn}>
                        <ListItemIcon className={activeP ? stylesTabs.linkImgActive : stylesTabs.linkImg}>
                            <ion-icon name="pricetags"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/contact" className={stylesTabs.link}>
                    <ListItem className={activeC ? stylesTabs.linkBtnActive : stylesTabs.linkBtn}>
                        <ListItemIcon className={activeC ? stylesTabs.linkImgActive : stylesTabs.linkImg}>
                            <ion-icon name="call"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
            </>)}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

Tabs.defaultProps = {
    active: [true, false, false, false]
}

export default Tabs
