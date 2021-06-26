import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../post/post';

import { fetchTopFeed } from './feedSlice';

export default function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector(state => state.feed);
  const {count, limit} = feed;

  useEffect(() => {
    dispatch(fetchTopFeed({count, limit}));
  }, [count, limit, dispatch]);

  return feed.data.map(
    post => (
      <Post post={post} />
    )
  );
}