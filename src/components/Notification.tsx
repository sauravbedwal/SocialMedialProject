import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { Notifications } from "../constants/type";
import { notificationArray } from "../constants/Constant";

const Notification = () => {
  const [info, setInfo] = useState<Notifications[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setInfo(notificationArray);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px",
        }}
      >
        <Link to="/profile">
          <div
            style={{
              border: "1px solid green",
              borderRadius: "50%",
              padding: "2px",
            }}
          >
            <div className="menuAvatarImage"></div>
          </div>
        </Link>
        <SearchOutlinedIcon />
      </div>
      <div className="notificationProfileFollowersMenuName">
        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "27px",
            color: "#1A1B23",
            margin: "0 10px 0 0",
          }}
        >
          Notification
        </div>
        <div className="notificationMenuTotalBorder">
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "white",
            }}
          >
            35
          </div>
        </div>
      </div>

      <div className="menuSection"></div>

      <div className="notification-span">
        <span style={{ color: "#B4B4B4" }}>Show all</span>
        <span style={{ color: "#8B8B8B" }}>Mark all us read</span>
      </div>

      {info.map((input: Notifications, index: number) => {
        return (
          <div id="notification-info" key={input.name}>
            <div className="notificationMenuOptions">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className={
                    index == 0
                      ? "notificationFollowersMenuAvatarImage1"
                      : index === 1
                      ? "notificationFollowersMenuAvatarImage2"
                      : index === 2
                      ? "notificationFollowersMenuAvatarImage3"
                      : index === 3
                      ? "notificationFollowersMenuAvatarImage4"
                      : index === 4
                      ? "notificationFollowersMenuAvatarImage5"
                      : index === 5
                      ? "notificationFollowersMenuAvatarImage6"
                      : "notificationFollowersMenuAvatarImage1"
                  }
                ></div>
                <div style={{ marginLeft: "10px" }}>
                  <span id="notification-name">{input.name}</span>
                  <span id="notification-msg">{input.noti}</span>
                  <div id="notification-time">{input.time}</div>
                </div>
              </div>
            </div>
            {index === 1 && (
              <button className="notification-tick">
                <DoneOutlinedIcon />
                <div>Read</div>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
