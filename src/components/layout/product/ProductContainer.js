import { CardMedia, Grid, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axios";
import { AuthContext } from "../../../contexts/AuthContext";
import CreateComment from "../../card/CreateComment";
import MainComment from "../../card/MainComment";
import SubComment from "../../card/SubComment";
import SideBarL from "../sidebar/SideBarL";
import ProductDetail from "./ProductDetail";
import ProductShow from "./ProductShow";

// const product = {
//   id: 1,
//   coverPic:
//     'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
//   name: 'Product 1',
//   externalLink: '',
//   description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//   price: '100.00',
//   hashtag: ['aaa1', 'aaa2', 'aaa3'],
//   createAt: '20-11-2021',
//   User: {
//     username: 'Anna',
//     profilePic:
//       'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
//   },
//   ProductCategory: {
//     name: 'Art'
//   }
// };

// const Comment = [
//   {
//     id: '1',
//     content: 'aaaaa',
//     createAt: '20-11-2021',
//     pic: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
//     User: {
//       profilePic:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
//     }
//   },
//   {
//     id: '2'
//   }
// ];

function ProductContainer() {
  const [product, setProduct] = useState({});
  const [userDetail, setUserDetail] = useState({});
  const [purchasedLists, setPurchasedLists] = useState([]);
  const [followingLists, setFollowingLists] = useState([]);
  const [likeLists, setLikeLists] = useState([]);

  const { user } = useContext(AuthContext);
  const param = useParams();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const callProduct = async () => {
      await axios
        .get(`/product/${param.id}`)
        .then((res) => {
          setProduct({ ...res.data.product });
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    const callUserDetail = async () => {
      await axios
        .get(`/profile/${user.id}`)
        .then((res) => {
          setUserDetail({ ...res.data.user });
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    const callPurchased = async () => {
      await axios
        .get(`/purchased/${param.id}`)
        .then((res) => {
          setPurchasedLists([...res.data.purchased]);
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    const callSubscribed = async () => {
      await axios
        .get(`/following/follower/${user.id}`)
        .then((res) => {
          setFollowingLists([...res.data.following]);
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    const callLike = async () => {
      await axios
        .get(`/like/product/${param.id}`)
        .then((res) => {
          setLikeLists([...res.data.like]);
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    callProduct();
    callUserDetail();
    callPurchased();
    callSubscribed();
    callLike();
  }, [toggle]);

  // console.dir(product);
  // console.dir(followingLists);
  console.dir(likeLists);

  return (
    <Box
      sx={{
        width: "100%",
        // height: '100vh',
        display: "flex",
        backgroundColor: "#EFF1F3",
      }}
    >
      <Grid
        item
        sx={{
          width: { md: "25%", lg: "18%" },
          display: { md: "flex", xs: "none" },
        }}
      >
        <SideBarL />
      </Grid>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#EFF1F3",
          display: "flex",
          justifyContent: "center",
          border: "1px solid red",
          // p: '80px 0px'
        }}
      >
        <Box
          sx={{
            width: { md: "80%", xs: "100%" },
            backgroundColor: "white",
            boxShadow: 2,
            p: { md: "50px", xs: "50px 0px" },
          }}
        >
          <ProductShow product={product} />

          <ProductDetail
            product={product}
            userDetail={userDetail}
            purchasedLists={purchasedLists}
            followingLists={followingLists}
            likeLists={likeLists}
            setToggle={setToggle}
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // border: '1px solid red',
              p: { md: "0px", xs: "20px" },
              justifyContent: "flex-start",
              "& p": {
                m: "20px 50px",
              },
            }}
          >
            <p>comment</p>
            <CreateComment />
            <MainComment />
            <SubComment />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductContainer;
