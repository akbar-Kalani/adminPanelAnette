"use client";

import React from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdEventAvailable,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },

      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },

      {
        title: "Event",
        path: "/dashboard/event",
        icon: <MdEventAvailable />,
      },

      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },

  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },

      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },

  {
    title: "User",
    list: [
      {
        title: "Setting",
        path: "/dashboard/setting",
        icon: <MdOutlineSettings />,
      },

      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.user}>
           <Image  className={styles.userImage} src="/usernotfound.png" alt="UserImage" width={50} height={50} /> 
           <div className={styles.userDetail}>
               <span className={styles.userName}>Anette</span>
               <span className={styles.usertitle}>Administrator</span>
           </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
       <button className={styles.logout}>
          <MdLogout/>
           Logout
       </button>
    </div>
  );
};

export default Sidebar;
