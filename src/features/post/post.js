import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

export default function Post(props) {
  const { post } = this.props;

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