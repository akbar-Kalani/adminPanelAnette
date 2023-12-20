import React from 'react'
  import styles from "@/app/ui/Dashboard/event/singleEvent/singleEvent.module.css"
  import Image from 'next/image'
const EventPags = () => {
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
        <label htmlFor="">Titel</label>
        <input type="text" name="titel" placeholder="Titel" />
        <label htmlFor="">Description</label>
        <input type="file" name="image" placeholder="EventImage" />
         <textarea name="description"  id="" cols="30" rows="10" placeholder='Description'></textarea>
         <button type="submit">
            Update
         </button>
      </form>
    </div>
  </div>
  )
}

export default EventPags
