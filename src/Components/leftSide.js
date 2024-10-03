import "./leftSide.css";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import instagramlogo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import MovieIcon from "@mui/icons-material/Movie";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GestureIcon from "@mui/icons-material/Gesture";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function SideBarOpt(props) {
  return (
    <div className="navLink">
      <props.icon sx={{ fontSize: "30px", margin: "0 20px  0 0" }} />
      <div className="navName">{props.optionName}</div>
    </div>
  );
}
const SideBar = () => {
  return (
    <>
      <div className="logoPart">
        <img className="logoImg" src={instagramlogo} alt="instagram" />
      </div>
      <div className="sideBarOptContainer">
      <div>
        <SideBarOpt optionName={"Home"} icon={HomeIcon} />
        <SideBarOpt optionName={"Search"} icon={SearchIcon} />
        <SideBarOpt optionName={"Explore"} icon={ExploreIcon} />
        <SideBarOpt optionName={"Reels"} icon={MovieIcon} />
        <SideBarOpt optionName={"Messages"} icon={MailOutlineIcon} />
        <SideBarOpt optionName={"Notifications"} icon={FavoriteBorderIcon} />
        <SideBarOpt optionName={"Create"} icon={AddCircleOutlineIcon} />
        <SideBarOpt optionName={"Profile"} icon={AccountCircleIcon} />
      </div>
      <div className="navLinkPart">

        <div className="belowPart">
          <SideBarOpt optionName={"Thread"} icon={GestureIcon} />
          <SideBarOpt optionName={"More"} icon={DensityMediumIcon} />
        </div>
      </div>
      </div>
    </>
  );
};

export default SideBar;
