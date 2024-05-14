import React from 'react'
import styles from "../styles/loadingRing.module.css"

export default function LoadingRing() {

  return (
    <div className={styles.overlay}>
    <div className={styles.ring}>
        loading
    {/* <img src="logo/logo.png" className="w-10 h-14"/> */}
    <span className={styles['ring-span']}></span>
    </div>                
    </div>
  )
}
