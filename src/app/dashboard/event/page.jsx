"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/Dashboard/search/search";
import Pagination from "@/app/ui/Dashboard/pagination/pagination";
import styles from "@/app/ui/Dashboard/event/event.module.css";
const eventItems = [
  {
    id: 1, // You can add a unique identifier if needed
    eventName: "pervist",
    description: "Lorem ipsum dolor sit,",
    status: "12/08/2023",
  },
  // Add more objects if you have additional events
];
const EventPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Search placeholder="Search for a event" />
          <Link href="/dashboard/event/add">
            <button className={styles.addBtn}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>

              <td>Created at</td>

              <td>Action</td>
            </tr>
          </thead>
          <tbody>
  {eventItems.map((event, index) => (
    <tr key={event.id}>
      <td>
        <div className={styles.event}>
          <Image
            src="/event.png"
            className={styles.eventImage}
            width={40}
            height={40}
            alt="Event Image"
          />
          {event.eventName}
        </div>
      </td>
      <td>{event.description}</td>
      <td>{event.status}</td>
      <td>
        <div className={styles.buttons}>
          <Link href="/dashboard/event/test" passHref>
            <button className={`${styles.btn} ${styles.view}`}>
              View
            </button>
          </Link>
          <button
            className={`${styles.btn} ${styles.delete}`}
           
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default EventPage;
