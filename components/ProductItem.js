import stylesProducts from '../styles/Products.module.css'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EADot from '../img/Icons/EA Symbol.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ProductItem = ({image, title, series, features}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <div className={isMobile ? stylesProducts.productImgM : stylesProducts.productImg}>
                <Box sx={{ width: '100%'}}>
                    <Grid container className={stylesProducts.productContainer}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className={stylesProducts.img}>
                                <Image
                                    src={image}
                                    alt={title + ' Img'}
                                    width={265}
                                    height={265}
                                    />
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className={stylesProducts.productDetails}>
                                <h2>{title}</h2>
                                <h3>{series}</h3>
                                <br />
                                <strong>Features:</strong><br />
                                {features.map((item, i) => 
                                    (<div key={i} className={stylesProducts.productDiv}>
                                        <Image
                                            src={EADot}
                                            alt={title + ' Img'}
                                            width={15}
                                            height={15}
                                            />
                                        <span className={stylesProducts.productFeatures}>{item}</span>
                                        <br />
                                    </div>)
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default ProductItem
