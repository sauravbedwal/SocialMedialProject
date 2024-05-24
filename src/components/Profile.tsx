import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Profile = () => {
  return (
    <div className="container container2">
      <div className="profileFollowersMenuProfile">
        <Link to="/chat">
          <div className="followersButton-back">
            <div className="arrow-icon">
              <ArrowBackIcon />
            </div>
          </div>
        </Link>

        <div className="profileFollowersMenuName">
          <h1>Profile</h1>
        </div>

        <div className="profileMenubutton">
          <FavoriteBorderOutlinedIcon style={{ color: "#585858" }} />
          <SearchOutlinedIcon
            style={{ color: "#585858", margin: "0 0 0 5px" }}
          />
        </div>
      </div>

      <div className="menuSection"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "30vh",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="profileMenuAvatarImage"></div>
        </div>

        <div className="chatFollowersMenuName">
          <div>Tom Cruise</div>
          <p>@tomcruise</p>
        </div>
      </div>

      <div className="profileMenubuttonSocial">
        <div className="profileMenubuttonBorderSocial">
          <FacebookOutlinedIcon
            style={{ width: "40px", height: "30px", color: "#1877F2" }}
          />
          <InstagramIcon
            style={{
              width: "40px",
              height: "30px",
              color: "#E1306C",
            }}
          />
          <PinterestIcon
            style={{ width: "40px", height: "30px", color: "E60023" }}
          />
          <TwitterIcon
            style={{ width: "40px", height: "30px", color: "#1DA1F2" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "255px",
        }}
      >
        <Link
          to={"/notification"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "120px",
              height: "26px",
              border: "1px solid #EEEEEEE",
              borderRadius: "20px",
              boxShadow: "0px 5px 8px 0px #eeeeeeec",
            }}
          >
            <FiberManualRecordIcon style={{ color: "#0f9804" }} />
            <SmsOutlinedIcon />
            <div>Message</div>
          </div>
        </Link>
        <div className="profileFollowersMenuTotalBorder">
          <p>Follow</p>
        </div>
      </div>
      {/* <div className="profileFollowersMenuOptions">
          <div>
            <div className="profileFollowersMenubuttonBorder">
              <div className="profileOnline-icon">
              </div>
              <div className="profileChatMenubutton">
                <div className="profileChatMenubuttonBorder">
                </div>
              </div>
            </div>
          </div>

          <div>
            
          </div>
        </div> */}

      <div className="menuStats2">
        <div className="menuStatsPost">
          <div>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "#1A1B23",
              }}
            >
              6.3k
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#919191",
              }}
            >
              Followers
            </div>
          </div>
        </div>

        {/* <Link to="/followers" style={{ textDecoration: "none" }}> */}
        <div className="menuStatsPost">
          <div>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "#1A1B23",
              }}
            >
              572
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#919191",
              }}
            >
              Post
            </div>
          </div>
        </div>
        {/* </Link> */}

        <div className="menuStatsPost">
          <div>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "#1A1B23",
              }}
            >
              2.5k
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#919191",
              }}
            >
              Following
            </div>
          </div>
        </div>
      </div>

      <div className="menuSection"></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "300px",
        }}
      >
        <div className="profileGroupMenuAvatarImage2"></div>
        <Link to="/followers" style={{ textDecoration: "none" }}>
          <div className="profileGroupMenuAvatarImage2"></div>
        </Link>
        <div className="profileGroupMenuAvatarImage2"></div>
      </div>
    </div>
  );
};

export default Profile;
