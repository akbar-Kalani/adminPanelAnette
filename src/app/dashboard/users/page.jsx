"use client";

import Link from "next/link";
import styles from "@/app/ui/Dashboard/user/user.module.css";
import Search from "@/app/ui/Dashboard/search/search";
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/pagination";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [userItems, setUserItems] = useState([]);

  console.log(userItems, "Hello");
  useEffect(() => {
    // Fetch data from the API
    fetch("https://6573b4f7f941bda3f2af176c.mockapi.io/event/UserEvent")
      .then((response) => response.json())
      .then((data) => setUserItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (itemId) => {
    // Make an API call to delete the item
    fetch(
      `https://6573b4f7f941bda3f2af176c.mockapi.io/event/UserEvent/${itemId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          // If deletion is successful, update the UI by filtering out the deleted item
          //اگر حذف موفقیت آمیز بود، با فیلتر کردن مورد حذف شده، رابط کاربری را به روز کنید
          const updatedItems = userItems.filter((item) => item.id !== itemId);
          setUserItems(updatedItems);
        } else {
          console.error("Error deleting item:", response.statusText);
        }
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <ul></ul>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name/L</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Country</td>
            <td>Date</td>
            <td> Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {userItems.map((event, index) => (
            <tr key={event.id}>
              <td >
                {event.name} {event.lastName}
              </td>
              <td>{event.email}</td>
              <td>{event.phone}</td>
              <td>{event.country}</td>
              <td>{event.date}</td>
              <td>{event.description}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/users/test" passHref>
                    <button className={`${styles.btn} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button
                    className={`${styles.btn} ${styles.delete}`}
                    onClick={() => handleDelete(event.id)}
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
  );
};

export default UsersPage;
