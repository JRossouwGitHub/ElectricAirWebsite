import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        '&:hover': {
            backgroundColor: 'none',
            color: '#0000C7',
        },
        color: '#00B100',
    },
    linkImgActive: {
        '&:hover': {
            cursor: 'pointer',
        },
        '&>:only-child':{
            display: 'block',
            margin: '0 auto',
        },
        display: 'block',
        width: 'max-content',
        margin: '0 auto',
        fontSize: '60px',
        padding: '15px',
        color: '#0000C7',
        border: '2px solid #0000C7',
        borderRadius: '50%',
    },
    linkBtnActive: {
        borderBottom: '4px solid #0000C7',
    },
    linkImg: {
        '&:hover': {
            cursor: 'pointer',
            color: '#0000C7',
            border: '2px solid #0000C7',
        },
        '&>:only-child':{
            display: 'block',
            margin: '0 auto',
        },
        display: 'block',
        width: 'max-content',
        margin: '0 auto',
        fontSize:' 60px',
        padding: '15px',
        color: '#00B100',
        border: '2px solid #00B100',
        borderRadius: '50%',
    },
});

const Tabs = ({active}) => {
    const classes = useStyles();

    const activeH = active[0]
    const activeS = active[1]
    const activeP = active[2]
    const activeC = active[3]

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={classes.root}>
            {isMobile ? null : (<>
                <Link href="/" className={classes.link}>
                    <ListItem className={activeH ? classes.linkBtnActive : classes.linkBtn}>
                        <ListItemIcon className={activeH ? classes.linkImgActive : classes.linkImg}>
                            <ion-icon name="home"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/services" className={classes.link}>
                    <ListItem className={activeS ? classes.linkBtnActive : classes.linkBtn}>
                        <ListItemIcon className={activeS ? classes.linkImgActive : classes.linkImg}>
                            <ion-icon name="construct"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/products" className={classes.link}>
                    <ListItem className={activeP ? classes.linkBtnActive : classes.linkBtn}>
                        <ListItemIcon className={activeP ? classes.linkImgActive : classes.linkImg}>
                            <ion-icon name="pricetags"></ion-icon>
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link href="/contact" className={classes.link}>
                    <ListItem className={activeC ? classes.linkBtnActive : classes.linkBtn}>
                        <ListItemIcon className={activeC ? classes.linkImgActive : classes.linkImg}>
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
