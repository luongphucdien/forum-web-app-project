import { NavLink } from "react-router-dom";
import styles from './thread.module.css';
import React, { useEffect, useState } from "react";
import { getPublicContent } from "../../services/user.service";

export default function Thread(){
    const [threadList, setThreadList] = useState([]);


    useEffect(() => {
        getPublicContent().then((res) => {
            setThreadList(res.data);
        });
    }, []);
    

    const listThreads = () => {
        const arr = [];

        for (let i = threadList.length-1; i>=0; i--) {
            const item = threadList[i];

            arr.push(
                <div className={styles.content}>

                    <div className={styles.post}>

                        <div className={styles.post__container}>
                            <div className={styles.post__author}>
                                AUTHOR: {item.username}
                            </div>
                            <div className={styles.post__content}>
                                CONTENT: {item.content}
                            </div>
                        </div>
                        <NavLink to="/comment" className={styles.comment__btn}>Post Comment</NavLink>
                        
                    </div>
                    <div className={styles.line}></div>

                </div>
            )
        }

        console.log(arr);
        return arr;
    }

    return(
        <div className={styles.main}>
            <div>
                {listThreads()}
            </div>
        </div>
    )
}