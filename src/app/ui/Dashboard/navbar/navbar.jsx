 "use client"

import React from 'react'
import { usePathname } from 'next/navigation'
 import styles from "./navbar.module.css"
import {MdOutlineChat, MdNotifications, MdPublic , MdSearch } from 'react-icons/md'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
       <div className={styles.title}>{pathname.split("/").pop()}</div>

        <div className={styles.menu}>
           <div className={styles.search}>
            <MdSearch size={20}/>
              <input type="text" placeholder='Search... ' className={styles.input} />
           </div>
            
            <div className={styles.icon}>
            <MdOutlineChat size={20} />
      <MdNotifications size={20} />
      <MdPublic size={20} />

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
