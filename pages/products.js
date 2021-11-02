import styles from '../styles/Layout.module.css'
import stylesProducts from '../styles/Products.module.css'
import Tabs from '../components/Tabs'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { fontSize } from '@mui/system';

const products = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className={styles.root}>
            <Meta title={'Products'} />
            <Tabs active={[false, false, true, false]} />
            <div className={styles.container}>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={isMobile? stylesProducts.listM : stylesProducts.list}
                    >
                    <ListItemButton onClick={handleClick} className={stylesProducts.listItem}>
                        <ListItemText>
                            <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Air Compressors</span>
                        </ListItemText>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} className={stylesProducts.listSubItem}>
                                <ListItemText>
                                    <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Rotary Screw</span>
                                </ListItemText>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} className={stylesProducts.listSubItem}>
                                <ListItemText>
                                    <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Reciprocating</span>
                                </ListItemText>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} className={stylesProducts.listSubItem}>
                                <ListItemText>
                                    <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Oil Free</span>
                                </ListItemText>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} className={stylesProducts.listSubItem}>
                                <ListItemText>
                                    <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Portable</span>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className={stylesProducts.listItem}>
                        <ListItemText>
                            <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Construction Equipment</span>
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton className={stylesProducts.listItem}>
                        <ListItemText>
                            <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Quality Air Solutions</span>
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton className={stylesProducts.listItem}>
                        <ListItemText>
                            <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>Alternate Inline Air Filter Elements</span>
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton className={stylesProducts.listItem}>
                        <ListItemText>
                            <span className={isMobile ? stylesProducts.listItemTextM : stylesProducts.listItemText}>CP Air Tools</span>
                        </ListItemText>
                    </ListItemButton>
                </List>
                {isMobile ? null : <Footer />}
            </div>
        </div>
    )
}

export default products
