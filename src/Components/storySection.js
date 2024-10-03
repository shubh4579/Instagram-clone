import React from "react";
import "./storySection.css";

function Story({ profileImg, username }) {
  return (
    <div className="story">
      <div className="storyCircle">
        <img src={profileImg} alt="Profile" className="storyProfileImg" />
      </div>
      <div className="storyUsername">{username}</div>
    </div>
  );
}

const StorySection = () => {
  const stories = [
    { username: "User1", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User2", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User3", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User4", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User5", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User6", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User7", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User8", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User7", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User8", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User7", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User8", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User7", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
    { username: "User8", profileImg: "https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg" },
  ];

  return (
      <div className="storySection">
        {stories.map((story, index) => (
          <Story
            key={index}
            username={story.username}
            profileImg={story.profileImg}
          />
        ))}
      </div>
  );
};

export default StorySection;
