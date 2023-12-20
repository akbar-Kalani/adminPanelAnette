"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/ui/Dashboard/user/user.module.css";
import Image from "next/image";
import Link from "next/link";
const Transaction = () => {
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://6573b4f7f941bda3f2af176c.mockapi.io/event/UserEvent")
      .then((response) => response.json())
      .then((data) => setUserItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name/L</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Country</td>
            <td>Date</td>
            <td> Description</td>
          </tr>
        </thead>
        <tbody>
          {userItems.map((event, index) => (
            <tr key={event.id}>
              <td>
                <Image
                  className={styles.userImage}
                  src="/usernotfound.png"
                  alt="UserImage"
                  width={40}
                  height={40}
                />
                {`${event.name} /`} {event.lastName}
              </td>
              <td>{event.email}</td>
              <td>{event.phone}</td>
              <td>{event.country}</td>
              <td>{event.date}</td>
              <td>{event.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
