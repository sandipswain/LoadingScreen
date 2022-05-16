import React from "react";
import "./Post.css";

function Post({ video }) {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img src={video.img} alt="" className="postImg" />
        <span className="postDuration">{video.duration}</span>
      </div>
      <div className="postInfoContainer">
        <img src={video.channel.avatar} alt="" className="postAvatar" />
        <div className="postInfo">
          <span className="postTitle">{video.title}</span>
          <span className="postChannel">{video.channel.name}</span>
          <span className="postDetail">
            {video.views} • {video.date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
