import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  Button
} from '@mui/material';
import { Box, typography } from '@mui/system';
import Slider from 'react-slick';
import { useContext, useEffect, useRef, useState } from 'react';
import { CarouselWrapper } from 'react-pretty-carousel';
import { CenterTypography } from '../../../style';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Carousel3D from '../carousels/Carousel3D';
import CarouselSlide from '../carousels/CarouselSlide';

import axios from '../../../config/axios';
import { createdAgo } from '../../../services/getTimeService';
import { ProductFilterContext } from '../../../contexts/ProductFilterContext';
import MarketplaceProductItem from './MarketplaceProductItem';
import { useLocation } from 'react-router';

function MarketplaceContent({ title }) {
  const location = useLocation();

  const [allProducts, setAllProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [trendingCreators, setTrendingCreators] = useState([]);
  const { currentPrice, currentCategory } = useContext(ProductFilterContext);
  const navUseRefArt = useRef(null);
  const navUseRefMusic = useRef(null);
  const navUseRefOther = useRef(null);
  const navUseRefAllItem = useRef(null);

  // console.log(currentPrice, currentCategory);

  useEffect(() => {
    try {
      const fetch = async () => {
        const allFetched = await axios.get('/marketplace/all');
        // console.log(allFetched.data.allProducts);
        setAllProducts(allFetched.data.allProducts);
        // setFilteredProducts(allFetched.data.allProducts.filter(

        // ));
        const trendingFetched = await axios.get('marketplace/trending');
        setTrendingCreators(trendingFetched.data.trendingCreators);
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      if (location.state === 'Art') {
        navUseRefArt.current.scrollIntoView();
      } else if (location.state === 'Music') {
        navUseRefMusic.current.scrollIntoView();
      } else if (location.state === 'Other') {
        navUseRefOther.current.scrollIntoView();
      } else {
        navUseRefAllItem.current.scrollIntoView();
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  function sortByPrice(a, b) {
    if (+a.price > +b.price) {
      return 1;
    }
    if (+a.price < +b.price) {
      return -1;
    }
    return 0;
  }

  const filteredProducts = allProducts
    .filter(
      item =>
        (item.categoryId === currentCategory.id || currentCategory.id === 4) &&
        (+item.price <= +currentPrice.to || currentPrice.to === '>1000') &&
        +item.price >= +currentPrice.from
    )
    .sort(sortByPrice);

  // console.log(currentPrice.from);

  // console.log("all", allProducts);
  // console.log("trend", trendingCreators);

  function sortByLikeCount(a, b) {
    if (a.Likes < b.Likes) {
      return 1;
    }
    if (a.Likes > b.Likes) {
      return -1;
    }
    return 0;
  }

  return (
    <>
      <Carousel3D trendingCreators={trendingCreators} />
      <div ref={navUseRefArt}>
        <CarouselSlide title="Art" products={allProducts.filter(item => item.categoryId === 1).sort(sortByLikeCount)} />
      </div>
      <div ref={navUseRefMusic}>
        <CarouselSlide
          title="Music"
          products={allProducts.filter(item => item.categoryId === 2).sort(sortByLikeCount)}
        />
      </div>
      <div ref={navUseRefOther}>
        <CarouselSlide
          title="Other"
          products={allProducts.filter(item => item.categoryId === 3).sort(sortByLikeCount)}
        />
      </div>
      <br />

      <Box
        sx={{
          width: '100%'
          // border: "1px solid navy",
        }}
      >
        <div ref={navUseRefAllItem}></div>
        <Typography variant="h5" ml="5%">
          {title ?? 'All Products'}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Grid container spacing={6} sx={{ width: '100%', p: '1rem' }}>
            {filteredProducts.map((item, idx) => (
              <MarketplaceProductItem item={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default MarketplaceContent;
