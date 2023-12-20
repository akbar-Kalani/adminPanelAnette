import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Anette</div>
        <div className={styles.text}>&copy;: Copyright all rights reserved stjarnhjarta.com </div>
    </div>
  )
}

export default Footer
