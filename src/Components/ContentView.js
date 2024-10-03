import React from "react";
import "./contentView.css"
import StorySection from "./storySection";
import PostView from "./PostView";
import ProfileSect from "./profileSect";


const ContentView = () => {
  return (
    <>
      <div className="storyAndPostContainer">
        <StorySection />
        <div className="postContainer">
          <PostView />
        </div>
      </div>
      <div>
        <ProfileSect/>
      </div>
    </>
  );
};

export default ContentView;
