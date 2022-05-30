import React, { useEffect, useState } from "react";
import styles from './home.module.css'
import Thread from '../thread/thread'

export default function Home() {    
    return (
        <div className={styles.main}>
            <Thread/>
        </div>
    );
}