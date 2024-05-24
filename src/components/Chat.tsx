import React from "react";
import "./style.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";

const Chat = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "300px",
          justifyContent: "space-between",
          height: "10vh",
        }}
      >
        <Link to="/followers">
          <div className="followersButton-back">
            <div className="arrow-icon">
              <ArrowBackIcon />
            </div>
          </div>
        </Link>
        <Link
          to={"/profile"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <FiberManualRecordIcon style={{ color: "#0f9804" }} />
              <div>@tomcruise</div>
            </div>
            <div style={{ fontSize: "small" }}>Last active: 10 sec ago</div>
          </div>
        </Link>

        <div className="chatMenubutton">
          <LocalPhoneOutlinedIcon
            style={{
              color: "#4dd969",
              background: "#e8fded",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
        </div>
      </div>
      <div className="menuSection"></div>

      <div className="chatUser">
        <div className="chatOwner">
          <p>Hey! How are you? It's been a while. How is your travel to UK?</p>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatOwnerAvatarImage"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatFriend">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatFriendAvatarImage"></div>
              </div>
            </div>
          </div>
          <p>Hey too!</p>
        </div>

        <div className="chatOwner">
          <p>Hey! How are you? It's been a while. How is your travel to UK?</p>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatOwnerAvatarImage"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatFriend">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatFriendAvatarImage"></div>
              </div>
            </div>
          </div>
          <p>
            {" "}
            Its great, UK is awesome, espesially London. New job is good so far!
            How about you?
          </p>
        </div>
        <div className="chatOwner">
          <p>Hey! How are you? It's been a while. How is your travel to UK?</p>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatOwnerAvatarImage"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatFriend">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatFriendAvatarImage"></div>
              </div>
            </div>
          </div>
          <p>
            {" "}
            Its great, UK is awesome, espesially London. New job is good so far!
            How about you?
          </p>
        </div>
        <div className="chatOwner">
          <p>Hey! How are you? It's been a while. How is your travel to UK?</p>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatOwnerAvatarImage"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="chatFriend">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatFriendAvatarImage"></div>
              </div>
            </div>
          </div>
          <p>Hey too!</p>
        </div>

        <div className="chatFriendRepeat">
          <p>
            Its great, UK is awesome, espesially London. New job is good so far!
            How about you?
          </p>
        </div>

        <div className="chatOwner">
          <p>
            {" "}
            I'm fine, i'm thinking about new project. I want to open an online
            store
          </p>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatOwnerAvatarImage"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatOwnerRepeat">
          <p>
            But I don't know what to sell. Maybe I will sell stones and water
          </p>
        </div>

        <div className="chatFriend">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatFriendAvatarImage"></div>
              </div>
            </div>
          </div>
          <p>
            Yeah it's great idea, you know - everyone needs water, I dont know
            about stones xD
          </p>
        </div> */}
      </div>
      <div className="chatmsgsender">
        <div>
          <div className="secondary-btn">
            <input
              className="chatWhite-btn"
              type="text"
              placeholder="Say something"
            />
          </div>
        </div>

        <div>
          <div className="chatMenubutton">
            {/* <div className="chatMenuAvatar"> */}
            {/* </div> */}
            <div>
              <SendIcon
                style={{
                  color: "#4dd964",
                  transform: "rotate(-40deg)",
                  background: "#e8fded",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
