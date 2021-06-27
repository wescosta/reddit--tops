import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const Post = (props) => {
  const { post } = props;

  return (
    <Card>
      <CardHeader
        title={post.title}
        subheader={post.description}
        avatar={
          <Avatar atl={post.name} src={post.static_icon_url} />
        }
      />
      <CardMedia
        image={post.thumbnail}
        title={post.description}
      />
    </Card>
  );
}

export default React.memo(Post);