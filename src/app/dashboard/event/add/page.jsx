"use client";

import React, { useState } from "react";
import styles from "@/app/ui/Dashboard/event/addEvent/addEvent.module.css";
const AddEventPage = () => {
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
          description:""
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
          placeholder="title"
          value={data.title}
          name="title"
          required
        />
      
      
        <input
          onChange={changeHandler}
          type="file"
          accept="image/*"
          placeholder="imageSrc"
          name="image"
          required
            className="bg-none"
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

export default AddEventPage;

/* https://6573b4f7f941bda3f2af176c.mockapi.io/event/eventData */



{/* <select
onChange={changeHandler}
className={`${styles.select} 
bg-[#182237]`}
value={data.cat}
name="cat"
id=" cat"
>
<option className="text-[#182237]" value="Stress  release">
  {" "}
  Choose A Category{" "}
</option>

<option className="text-[#182237]" value="Stress  release">
  Stress release
</option>
<option className="text-[#182237]" value="Body Processes">
  Body Processes
</option>
<option className="text-[#182237]" value="physical ">
  physical{" "}
</option>
<option className="text-[#182237]" value="Be more Do less">
  Be more Do less
</option>
<option value="Access Energetic Facelift" className="text-[#182237]">
  Access Energetic Facelift
</option>
<option
  className="text-[#182237]"
  value="Healing and Quantum Physics"
>
  Healing and Quantum Physics
</option>
</select> */}