import React from "react";
import Card from "../ui/Dashboard/card/card";
import styles from "../ui/Dashboard/dashboard.module.css";
import Transaction from "../ui/Dashboard/transactions/transaction";
import Chart from "../ui/Dashboard/chart/chart";
const DashboardPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>

      
    </section>
  );
};

export default DashboardPage;
