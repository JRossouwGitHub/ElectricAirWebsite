import styles from '../styles/NavBar.module.css';
import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import Footer from '../components/Footer';
import EALogo from '../img/Icons/EA Symbol.png'

const useStyles = makeStyles({
    button: {
      '&:hover': {
          backgroundColor: '#7114bc',
          color: 'white',
      },
      fontSize: 'large',
    },
  });

const NavBar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List className={styles.linkM}>
                <Link href="/">
                    <ListItem button>
                        <ListItemIcon className={styles.linkImg}>
                            <ion-icon name="home"></ion-icon>
                        </ListItemIcon>
                        <ListItemText primary="Home" className={styles.linkM} />
                    </ListItem>
                </Link>
                <Link href="/services">
                    <ListItem button>
                        <ListItemIcon className={styles.linkImg}>
                            <ion-icon name="construct"></ion-icon>
                        </ListItemIcon>
                        <ListItemText primary="Services" className={styles.linkM} />
                    </ListItem>
                </Link>
                <Link href="/products">
                    <ListItem button>
                        <ListItemIcon className={styles.linkImg}>
                            <ion-icon name="pricetags"></ion-icon>
                        </ListItemIcon>
                        <ListItemText primary="Products" className={styles.linkM} />
                    </ListItem>
                </Link>
                <Link href="/contact">
                    <ListItem button>
                        <ListItemIcon className={styles.linkImg}>
                            <ion-icon name="call"></ion-icon>
                        </ListItemIcon>
                        <ListItemText primary="Contact" className={styles.linkM} />
                    </ListItem>
                </Link>
          </List>
          <Divider />
          <Footer />    
        </Box>
    );

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='neutral'>
                    <Toolbar id="back-to-top-anchor">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer('left', true)}
                    >
                        {isMobile ? (<><MenuRoundedIcon fontSize="large" color="primary" /></>) : null}
                    </IconButton>
                    <Link href="/">
                        <a className={styles.logo}>
                            <Image
                                src={EALogo}
                                alt="Electric Air Logo"
                                width={isMobile ? 75 : 100}
                                height={isMobile ? 75 : 100}
                                className={styles.logo}
                                />
                            <div className={styles.header}>
                                <span className={isMobile ? styles.ElinkM : styles.Elink}>Electric</span> <span className={isMobile ? styles.AlinkM : styles.Alink}>Air</span>
                                <br />
                                <span className={isMobile ? styles.SlinkM : styles.Slink}>Air Compressor Sales {'&'} Service</span>
                            </div>
                        </a>
                    </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

export default NavBar
