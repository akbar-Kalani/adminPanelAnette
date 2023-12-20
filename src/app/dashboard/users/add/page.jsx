"use client";

import React, { useState } from "react";
import styles from "@/app/ui/Dashboard/user/addUser/adduser.module.css";
 import { countries } from "@/app/ui/Dashboard/countries/counteres";
const AddPage = () => {
  const [data, setData] = useState({
    title: "",
    image: "",

    description: "", // Corrected the typo in the state variable name
  });

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onclick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://6573b4f7f941bda3f2af176c.mockapi.io/event/eventData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Data submitted successfully");
        // Reset the form after successful submission if needed
        setData({
          title: "",
          image: "",
          description: "",
        });
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      alert("Error submitting data:", error);
    }
  };
  return (
    <div className={styles.container}>
      <form action="" onSubmit={onclick} className={styles.form}>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Name"
          value={data.name}
          name="name"
          required
        />
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Last Name"
          value={data.lastName}
          name="lastName"
          required
        />
        <input
          onChange={changeHandler}
          type="email"
          placeholder="Email"
          value={data.email}
          name="email"
          required
        />
        <input
          onChange={changeHandler}
          type="tel"
          placeholder="Phone"
          value={data.phone}
          name="phone"
        />
        <select
          onChange={changeHandler}
          className={`${styles.select} 
          bg-[#182237]`}
          value={data.countery}
          name="countery"
          id=" country"
        >
            <option className="" value=""></option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
          
         
        </select>
        <input
          onChange={changeHandler}
          type="date"
          placeholder="date"
          value={data.date}
          name="date"
        
        />

        {/* <input type="text" placeholder="color" name="color" required />
      <input type="text" placeholder="size" name="size" required /> */}
        <textarea
          onChange={changeHandler}
          value={data.description}
          name="description"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button> Submit</button>
      </form>
    </div>
  );
};

export default AddPage;
