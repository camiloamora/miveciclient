import React, { useEffect, useState } from 'react'
import PostItem from '@components/PostItem'

const API = 'https://miveciapi.vercel.app/api/post'

const Feed = () => {
  return (
    <PostItem />
  );
}

export default Feed;
