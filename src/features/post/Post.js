import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const Post = (props) => {
  const { post } = props;
  const avatarUrl = post.all_awardings[0] && post.all_awardings[0].icon_url;

  return (
    <Card>
      <CardHeader
        title={post.author}
        avatar={
          <Avatar atl={post.author} src={avatarUrl} />
        }
      />
      <CardMedia
        alt=""
        component="img"
        src={post.url_overridden_by_dest}
      />
    </Card>
  );
}

export default React.memo(Post);