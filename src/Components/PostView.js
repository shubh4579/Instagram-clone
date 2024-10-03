import React from "react";
import "./postView.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PostInteraction from "../Components/postInteraction";

const PostView = () => {
  const Post = (props) => {
    const profile_pic_src = `${props.profile_pic}`;
    const post_pic_src = `${props.post_pic}`;
    return (
      <div className="post">
        <div className="postInfo">
          <img className="postInfoImg" src={profile_pic_src} alt="srk" />
          <div className="username">{props.username}</div>
          <div className="timingInfo">{props.time_passed}</div>
          <div className="moreInfo">
            <MoreHorizIcon />
          </div>
        </div>
        <div className="postImg">
          <img className="image" src={post_pic_src} alt="post" />
          <div className="interaction">
            <PostInteraction username={props.username} status={props.status} />
          </div>
        </div>
      </div>
    );
  };

  const posts = [
    {
      name: "Sharukh khan",
      time: "36 m",
      profile_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      post_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",
      status: "ferfwaef",
    },
    {
      name: "Sharukh khan",
      time: "36 m",
      profile_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      post_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      status: "ferfwaef",
    },
    {
      name: "Sharukh khan",
      time: "36 m",
      profile_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      post_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      status: "ferfwaef",
    },
    {
      name: "Sharukh khan",
      time: "36 m",
      profile_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      post_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      status: "ferfwaef",
    },
    {
      name: "Sharukh khan",
      time: "36 m",
      profile_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      post_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      status: "ferfwaef",
    },
    {
      name: "Sharukh khan",
      time: "36 m",
      profile_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      post_pic:
        "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg",
      status: "ferfwaef",
    },
  ];

  return (
    <>
      <div className="postSection">
        {posts.map((post) => {
          return (
            <Post
              username={post.name}
              time_passed={post.time}
              profile_pic={post.profile_pic}
              post_pic={post.post_pic}
              status={post.status}
            />
          );
        })}
      </div>
    </>
  );
};

export default PostView;
