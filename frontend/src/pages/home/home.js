import React, { useEffect, useState } from "react";
import styles from './home.module.css'
import Thread from '../thread/thread'
import Your_Thread from "../your_thread/your_thread";
import ThreadList from "../thread/thread list";

export default function Home() {    
    return (
        <div className={styles.main}>
            <div className={styles.thread__list}>
                <ThreadList/>
            </div>
        </div>
    );
}