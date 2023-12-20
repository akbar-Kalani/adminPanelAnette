import React from "react";
import styles from "@/app/ui/Dashboard/user/addUser/singleUser/singleUser.module.css"
import Image from "next/image";
const singelUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/event.png" alt="image" fill />
        </div>
        Akbar
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">UserName</label>
          <input type="text" name="userName" placeholder="UersName" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="akbarm.web@gmail.com" />
          <label htmlFor="">Phone Number</label>
          <input type="tel" name="phone" placeholder="0782565382" />
          <label htmlFor="">Address</label>
          <input type="text" name="address" placeholder="New York" />
          <label htmlFor="">Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="False">No</option>
          </select>

          <label htmlFor="">Active</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="False">No</option>
          </select>
           <button type="submit">
              Update
           </button>
        </form>
      </div>
    </div>
  );
};

export default singelUserPage;
