import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Post = (props) => {
  const { post } = props;
  const avatarUrl = post.all_awardings[0] && post.all_awardings[0].icon_url;
  const avatarDescription = post.all_awardings[0] && post.all_awardings[0].description;

  return (
    <Card>
      <CardHeader
        title={post.author}
        avatar={
          <Avatar atl={post.author} src={avatarUrl} />
        }
        subheader={
          <Typography variant="body2" color="textSecondary" component="p">
            {avatarDescription}
          </Typography>
        }
      />
      {
        post.is_video ?
          <ReactHlsPlayer
            controls
            width="100%"
            preload="true"
            src={post.media.reddit_video.hls_url}
          />
          : <CardMedia
            alt=""
            width="100%"
            component="img"
            src={post.url_overridden_by_dest}
          />
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default React.memo(Post);