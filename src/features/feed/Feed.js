import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../post/post';

import { fetchTopFeed } from './feedSlice';

export default function Feed() {
  const feed = useSelector(state => state.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopFeed());
  }, [dispatch]);

  return feed.data.map(
    post => (
      <Post post={post} />
    )
  );
}