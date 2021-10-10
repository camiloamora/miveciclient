import React, { useEffect, useState } from 'react'
import '@styles/Feed.scss'
import PostItem from '@components/PostItem'
import axios from 'axios'

const API = 'https://miveciapi.vercel.app/api/post'

const Feed = () => {
  const [posts, setPosts ] = useState([]);

  useEffect(async () => {
    const response = await axios(API)
    console.log(response)
    setPosts(response.data.body)
  }, []);

  return (
    <div className="Feed">
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Feed;
