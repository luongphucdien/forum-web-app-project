import React, { useEffect, useState } from "react";
import styles from './home.module.css'
import Thread from '../thread/thread'
import Your_Thread from "../your_thread/your_thread";

export default function Home() {    
    return (
        <div className={styles.main}>
            <Thread/>
        </div>
    );
}