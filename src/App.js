import "./App.css";
import React from "react";
import SideBar from "./Components/leftSide";
import ContentView from "./Components/ContentView";
import ProfileSect from "./Components/profileSect";

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <SideBar />
      </div>
      <div className="middleSide">
        <ContentView />
        <ProfileSect />
      </div>
    </div>
  );
}

export default App;
