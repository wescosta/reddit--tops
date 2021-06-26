import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

import { fetchTopFeed } from './feedSlice';

export default function Feed() {
  const feed = useSelector(state => state.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopFeed());
  }, [dispatch]);

  return feed.data.map(
    post => (
      <Card>
        <CardHeader
          title="{post.title}"
          subheader="{post.description}"
          avatar={
            <Avatar atl="{post.name}" src="{post.static_icon_url}" />
          }
        />
        <CardMedia
          image="{post.thumbnail}"
          title="{post.description}"
        />
      </Card>
    )
  );
}