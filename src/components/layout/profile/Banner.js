import { border, Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import axios from '../../../config/axios';
import CheckIcon from '@mui/icons-material/Check';
import { AuthContext } from '../../../contexts/AuthContext';
import AddIcon from '@mui/icons-material/Add';
import { useParams, useHistory } from 'react-router-dom';
import { Button, IconButton, Typography } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
function Banner() {
  const Name = styled('div')(({ theme }) => ({
    fontSize: '1.5rem',
    color: 'white',
    padding: theme.spacing(2, 0)
  }));
  const history = useHistory();
  let { user } = useContext(AuthContext);
  const [followingLists, setFollowingLists] = useState([]);
  const [ownedCommunity, setOwnedCommunity] = useState([]);
  const [isCommunityMember, setIsCommunityMember] = useState({});
  const [toggle, setToggle] = useState(false);
  const [getUser, setGetUser] = useState([]);
  const param = useParams();

  console.log(getUser);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const res = await axios.get(`/profile/${param.id}`);
        const res = await axios.get(`/profile/banner/${param.id}`);
        const resUser = res.data.user;
        console.log(res.data);
        setGetUser(resUser);

        const callSubscribed = async () => {
          await axios
            .get(`/following/followed/${param.id}`)
            .then(res => {
              setFollowingLists([...res.data.following]);
            })
            .catch(err => {
              console.dir(err);
            });
        };
        callSubscribed();

        if (res.data.user.Members !== null) {
          const checkUserCommunityMember = async () => {
            const result = await axios.get(`/community/isMember/${user.id}/${res.data.user.Members.communityId}`);
            // console.log(result.data.isCommunityMember);
            setIsCommunityMember(result.data.isCommunityMember);
          };
          checkUserCommunityMember();
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [toggle]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(`/community/${param.id}`);
      console.log(result.data);
      setOwnedCommunity(result.data.ownedCommunity);
    };
    fetch();
  }, []);

  console.log(`communityIds`, ownedCommunity);
  console.log(ownedCommunity);
  console.log(ownedCommunity.length === 0);

  // const product = 1;
  // console.log(followingLists);

  ///////////////set is following and following array////////////////////////
  let isFollowing = false;
  let filteredLikeList = [];
  followingLists.forEach(item => {
    if (item.followedId === +param.id && item.followerId === user.id) {
      if (item.status) {
        isFollowing = true;
      }
      filteredLikeList.push(item);
    }
  });

  ///////////////////////////////////////////////////////////////

  const handleClickFollow = async () => {
    if (filteredLikeList.length === 0) {
      axios.post('/following', { followedId: param.id }).then(res => {
        setToggle(curr => !curr);
      });
    } else {
      axios.put(`/following/${filteredLikeList[0].id}`, { isSubscribed: !filteredLikeList[0].status }).then(res => {
        setToggle(curr => !curr);
      });
    }
  };

  /////////////////////////////////////////////////////////////\
  //community handler
  // router.post("/community/:id/join", passport.authenticate("jwt", { session: false }), communityController.createMember);
  // router.put("/community/:id/update", passport.authenticate("jwt", { session: false }), communityController.updateMember);

  console.log('ismember', isCommunityMember);

  const handleJoinCommunity = async () => {
    if (isCommunityMember === null) {
      axios.post(`/community/${getUser.Members.communityId}/join`, { userId: user.id }).then(res => {
        setToggle(curr => !curr);
      });
    } else {
      axios
        .put(`/community/${getUser.Members.communityId}/update`, {
          isMember: isCommunityMember === null ? true : false
        })
        .then(res => {
          setToggle(curr => !curr);
        });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', height: '50vh', backgroundColor: '#232836' }}
    >
      <Stack display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <Avatar sx={{ width: 120, height: 120 }} src={getUser?.profilePic} />
        <Name>{getUser?.username}</Name>
        <Box width="100%" display="flex" justifyContent="center">
          {+user.id !== +param.id && (
            <>
              {!isFollowing ? (
                <Button
                  sx={{ width: '20ch', textTransform: 'none', marginRight: '0.5rem' }}
                  variant="gradient"
                  aria-label="add to favorites"
                  onClick={handleClickFollow}
                >
                  <AddIcon sx={{ fontSize: '1.5rem', color: '#242A38' }} />
                  <Typography sx={{ color: '#242A38' }}>Follow User</Typography>
                </Button>
              ) : (
                <Button
                  sx={{ width: '20ch', textTransform: 'none', marginRight: '0.5rem' }}
                  variant="gradient"
                  aria-label="add to favorites"
                  onClick={handleClickFollow}
                  // onClick={handleClickUnFollow}
                >
                  <CheckIcon sx={{ fontSize: '1.5rem', color: '#242A38' }} />
                  <Typography sx={{ color: '#242A38' }}>Following User</Typography>
                </Button>
              )}
            </>
          )}

          {+user.id !== +param.id ? (
            ownedCommunity.length === 0 ? (
              <Button
                sx={{
                  // outline: "1px solid #708198",
                  width: '20ch',
                  textTransform: 'none',
                  marginLeft: '0.5rem'
                }}
                variant="outlined"
                aria-label="add to favorites"
              >
                <AddIcon sx={{ fontSize: '1.5rem', color: '#708198' }} />
                <Typography sx={{ color: 'text.primary' }}>No Community</Typography>
              </Button>
            ) : isCommunityMember !== null ? (
              <Button
                sx={{ width: '20ch', textTransform: 'none', marginLeft: '0.5rem' }}
                variant="gradient"
                aria-label="add to favorites"
                onClick={() => history.push(`/community/${ownedCommunity[0].communityId}`)}
              >
                <ForumIcon sx={{ fontSize: '1.5rem', color: '#242A38' }} />
                <Typography sx={{ color: '#242A38' }}>Visit Community</Typography>
              </Button>
            ) : (
              <Button
                sx={{ width: '20ch', textTransform: 'none', marginLeft: '0.5rem' }}
                variant="gradient"
                aria-label="add to favorites"
                onClick={handleJoinCommunity}
              >
                <AddIcon sx={{ fontSize: '1.5rem', color: '#242A38' }} />
                <Typography sx={{ color: '#242A38' }}>Join Community</Typography>
              </Button>
            )
          ) : ownedCommunity.length === 0 ? (
            <Button
              sx={{
                // outline: "1px solid #708198",
                width: '20ch',
                textTransform: 'none',
                marginLeft: '0.5rem'
              }}
              variant="outlined"
              aria-label="add to favorites"
            >
              <AddIcon sx={{ fontSize: '1.5rem', color: '#708198' }} />
              <Typography sx={{ color: 'text.primary' }}>No Community</Typography>
            </Button>
          ) : (
            <Button
              sx={{ width: '20ch', textTransform: 'none', marginLeft: '0.5rem' }}
              variant="gradient"
              aria-label="add to favorites"
              onClick={() => history.push(`/community/${ownedCommunity[0].communityId}`)}
            >
              <ForumIcon sx={{ fontSize: '1.5rem', color: '#242A38' }} />
              <Typography sx={{ color: '#242A38' }}>Visit Community</Typography>
            </Button>
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default Banner;
