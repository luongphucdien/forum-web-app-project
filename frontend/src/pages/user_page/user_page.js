import styles from '../thread/thread.module.css';
import React, { useEffect, useState } from "react";
import { getUserThreads } from "../../services/user.service";
import Thread from "../thread/thread";

export default function UserPage(){
    const [threadList, setThreadList] = useState([]);

    useEffect(() => {
        getUserThreads().then((res) => {
            return setThreadList(res.reverse());
        });
    }, []);
    
    const ParseThreads = () => {
        if (!threadList)
            return <h1>Loading...</h1>
        else {
            if (threadList.length === 0) {
                return <h1>Looks like you haven't posted anything, yet.</h1>
            }
            return threadList.map(item => {
                return <Thread
                    key={item.thread_id}
                    author={item.username}
                    content={item.content}
                    created_date={item.created_date}
                    thread_id={item.thread_id}
                />
            });
        }
    };

    return(
        <div className={styles.main}>
            <div>
                <ParseThreads/>
            </div>
        </div>
    )
}