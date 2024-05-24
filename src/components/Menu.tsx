import React from "react";
import "./style.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <div className="menuProfile">
        <Link
          to={"/signIn"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {/* <div className="menuAvatar"> */}
          <div className="menuAvatarImageBorder">
            <div className="menuAvatarImage"></div>
          </div>
          {/* </div> */}
        </Link>
        <div className="menuName">
          {/* <h1>Morsalin Nur</h1>
          <p>@morsalin.nur</p> */}
          <div
            style={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            Morsalin Nur
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "18px",
              textAlign: "left",
              color: "#919191",
            }}
          >
            @morsalin.nur
          </div>
        </div>
        <div className="menubutton">
          <div className="menubuttonBorder">
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>

      <div className="menuSection"></div>

      <div className="menuStats">
        <div className="menuStatsPost">
          <div
            style={{ fontSize: "25px", fontWeight: "600", color: "#1A1B23" }}
          >
            572
          </div>
          <div
            style={{ fontSize: "12px", fontWeight: "400", color: "#919191" }}
          >
            Post
          </div>
        </div>

        <Link
          to="/followers"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="menuStatsPost">
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
        </Link>

        <div className="menuStatsPost">
          <div
            style={{ fontSize: "25px", fontWeight: "600", color: "#1A1B23" }}
          >
            2.5k
          </div>
          <div
            style={{ fontSize: "12px", fontWeight: "400", color: "#919191" }}
          >
            Following
          </div>
        </div>
      </div>

      <div className="menuSection">
        <div className="menuOptions">
          <div className="menuOptionLeft">
            <span>Notification</span>
            <p>See your recent activity</p>
          </div>
          <div className="menubutton">
            <div className="menubuttonBorder">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>

        <Link
          to="/followers"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="menuOptions">
            <div className="menuOptionLeft">
              <span>Friends</span>
              <p>Friendlist totals</p>
            </div>
            <div className="menubutton">
              <div className="menubuttonBorder">
                <KeyboardArrowRightIcon />
              </div>
            </div>
          </div>
        </Link>

        <div className="menuOptions">
          <div className="menuOptionLeft">
            <span>Messages</span>
            <p>Message your friends</p>
          </div>

          <div className="menubutton">
            <div className="menubuttonBorder">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>

        <div className="menuOptions">
          <div className="menuOptionLeft">
            <span>Albums</span>
            <p>Save or post your albums</p>
          </div>
          <div className="menubutton">
            <div className="menubuttonBorder">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>

        <div className="menuOptions">
          <div className="menuOptionLeft">
            <span>Favorites</span>
            <p>Friends you love</p>
          </div>
          <div className="menubutton">
            <div className="menubuttonBorder">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="menuOptions">
        <div className="menuOptionLeft">
          <span>Privacy Policy</span>
          <p>Protect your privacy</p>
        </div>
        <div className="menubutton">
          <div className="menubuttonBorder">
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
      <div className="secondary-btn">
        <button className="white-logoutbtn">Log out</button>
      </div>
    </div>
  );
};

export default Menu;
