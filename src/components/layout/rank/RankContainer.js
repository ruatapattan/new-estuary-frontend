import React, { useEffect, useRef, useState } from 'react';
import axios from '../../../config/axios';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import RankList from './RankList';
import { Grid } from '@mui/material';
import SideBarL from '../sidebar/SideBarL';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const buttonStyle = {
  color: 'white',
  width: '25%',
  p: { md: '15px', sm: '15px 10px', xs: '15px 10px' },
  fontSize: { md: 'default', xs: '10px' }
};

const Search = styled('div')(({ theme }) => ({
  border: '1px solid gray',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  width: '25%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(3),
    width: '25%'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(3),
    p: '0px 0px 0px 16px'
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 1, 2, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '60%'

    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(2, 1, 2, 5)
    //   // width: '60%',
    //   // fontSize: 'default'
    // },
    // [theme.breakpoints.up('xs')]: {
    //   // padding: theme.spacing(2, 1, 2, 4)
    //   // width: '60%',
    //   // fontSize: '10px'
    // }
  }
}));

function RankContainer() {
  const [rankListsByLike, setRankListsByLike] = useState([]);
  const [rankListsByCategory, setRankListsByCategory] = useState([]);
  const [rankListsByCategoryPastWeek, setRankListsByCategoryPastWeek] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isFilterByPastWeek, setIsFilterByPastWeek] = useState(false);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedName, setSelectedName] = useState('all');

  useEffect(() => {
    const callRankbyLike = async () => {
      await axios
        .get(`/rank/like`)
        .then(res => {
          setRankListsByLike([...res.data.result]);
          console.dir(res.data.result);
        })
        .catch(err => {
          console.dir(err);
        });
    };

    const callRankbyCategoryPassWeek = async () => {
      await axios
        .get(`/rank/like/pastweek/category/${selectedIndex}`)
        .then(res => {
          setRankListsByCategoryPastWeek([...res.data.result]);
        })
        .catch(err => {
          console.dir(err);
        });
    };

    const callRankbyCategory = async () => {
      await axios
        .get(`/rank/like/category/${selectedIndex}`)
        .then(res => {
          setRankListsByCategory([...res.data.result]);
        })
        .catch(err => {
          console.dir(err);
        });
    };

    const callCategory = async () => {
      await axios
        .get('/category')
        .then(res => {
          setCategory([...res.data.categorys]);
        })
        .catch(err => {
          console.dir(err);
        });
    };

    callRankbyLike();
    callRankbyCategoryPassWeek();
    callRankbyCategory();
    callCategory();
  }, [searchText, selectedIndex, isFilterByPastWeek]);

  // console.dir(category);
  console.dir(rankListsByLike);

  ///////////////Category////////////////////////
  // const options = ['CATEGORY', 'ART', 'MUSIC', 'OTHER'];

  const handleClick = () => {
    console.info(`You clicked ${category[selectedIndex]?.name}`);
  };

  const handleMenuItemClick = (id, name) => {
    setSelectedIndex(id);
    setSelectedName(name);
    setOpen(false);
  };
  // console.log('id', selectedIndex);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  ///////////////Search////////////////////////
  console.log(selectedName);
  const arr = isFilterByPastWeek
    ? rankListsByCategoryPastWeek
    : selectedName === 'all'
    ? rankListsByLike
    : rankListsByCategory;

  const filterBySearch = arr.filter(item => item?.username?.toLowerCase().includes(searchText.toLowerCase()));
  console.dir(filterBySearch);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        backgroundColor: '#EFF1F3'
      }}
    >
      <Grid item sx={{ width: { md: '25%', lg: '18%' }, display: { md: 'flex', xs: 'none' } }}>
        <SideBarL />
      </Grid>

      <Box
        sx={{
          // border: '1px solid blue',
          right: '0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: '80px',
          '& > *': {
            mb: '50px'
          }
        }}
      >
        <h1>Trending Creators</h1>

        <Box
          sx={{
            // border: '1px solid red',
            width: { md: '80%', sm: '90%', xs: '90%' },
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {!isFilterByPastWeek && (
            <Button onClick={() => setIsFilterByPastWeek(curr => !curr)} variant="gradient" sx={buttonStyle}>
              past week
            </Button>
          )}

          {isFilterByPastWeek && (
            <Button onClick={() => setIsFilterByPastWeek(curr => !curr)} variant="gradient" sx={buttonStyle}>
              all time
            </Button>
          )}

          <React.Fragment>
            <ButtonGroup
              variant="gradient"
              sx={{ width: { md: '25%', xs: '35%' } }}
              ref={anchorRef}
              aria-label="split button"
            >
              <Button onClick={handleClick} sx={{ width: '100%' }}>
                <Button
                  sx={{
                    color: 'white',
                    width: '100%',
                    p: { md: '0 15%', md: '0 10%', xs: '0 8%' },
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: { md: 'default', xs: '10px' }
                  }}
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  {selectedName}
                  {/* {category[selectedIndex]?.name ? category[selectedIndex]?.name : 'ssss'} */}
                  <ArrowDropDownIcon />
                </Button>
              </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" sx={{ width: { md: '12vw', xs: '22vw' } }}>
                        <MenuItem>CATEGORY</MenuItem>

                        {category.map(item => (
                          <MenuItem
                            key={item.name}
                            sx={{ fontSize: { md: 'default', xs: '10px' } }}
                            selected={item.id}
                            onClick={() => handleMenuItemClick(item.id, item.name)}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </React.Fragment>

          {!isSearch && (
            <Button variant="gradient" sx={buttonStyle} onClick={() => setIsSearch(true)}>
              Search
            </Button>
          )}

          {isSearch && (
            <Search sx={{ borderRadius: '30px' }} onFocus={() => setIsSearch(true)} onBlur={() => setIsSearch(false)}>
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: { lg: '20px', md: '20px', xs: '10px' } }} />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={e => setSearchText(e.target.value)}
                sx={{ spacing: { md: (2, 1, 2, 5), xs: (2, 1, 2, 4) }, fontSize: { md: 'default', xs: '10px' } }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}
        </Box>

        <Box
          sx={{
            width: { md: '80%', sm: '90%', xs: '90%' },
            boxShadow: 2
          }}
        >
          {filterBySearch.map((item, index) => (
            <>
              {index % 2 === 0 ? <RankList color={'white'} item={item} /> : <RankList color={'#EFF1F3'} item={item} />}
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default RankContainer;
