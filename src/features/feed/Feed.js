import { Button, Container, List, ListItem } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../post/Post';

import { fetchTopFeed } from './feedSlice';

export default function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector(state => state.feed);

  const [count, setCount] = useState(0);
  const [limit] = useState(50);

  useEffect(() => {
    dispatch(fetchTopFeed({ count, limit }));
  }, [count, limit, dispatch]);

  const posts = feed.data.map(
    ({ data }) => (
      <ListItem key={data.id}>
        <Post post={data} />
      </ListItem>
    )
  );

  return (
    <Container>
      <List>
        {posts}
      </List>

      <Button fullWidth onClick={() => setCount(count + limit)}>
        Load more
      </Button>
    </Container>
  );
}