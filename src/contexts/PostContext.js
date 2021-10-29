import { createContext, useState, useEffect } from 'react';
import axios from '../config/axios';

// ประกาศ Context
const PostContext = createContext();

function PostContextProvider({ children }) {
  //useState Product
  const [post, setpost] = useState([]);

  // use Effect
  useEffect(() => {
    const getpost = async () => {
      try {
        const res = await axios.get('/post');
        const resPost = res.data.post;
        //==========================
        // console.log(resProducts);
        //==========================
        setpost(resPost);
      } catch (err) {
        console.log(err);
      }
    };
    getpost();
  }, []);

  //ส่ง prop
  return <PostContext.Provider value={{ post, setPost }}>{children}</PostContext.Provider>;
}

// export ออกไป
export { post, setPost };
