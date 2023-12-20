


import React from "react";
import Sidebar from "../ui/Dashboard/sidebar/sidebar";
import Navbar from "../ui/Dashboard/navbar/navbar";
import styles from "@/app/ui/Dashboard/dashboard.module.css"
import Footer from "../ui/Dashboard/footer/footer";
const Layout = ({ children }) => {
  
  return (
    <div className={styles.container}>
  
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.contant}>
          <Navbar />
          {children}  
          <Footer/>
        </div>
     
    </div>
  );
};

export default Layout;
