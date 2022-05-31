import { NavLink } from "react-router-dom";
import styles from './thread.module.css';
import React, { useEffect, useState } from "react";
import { getPublicContent } from "../../services/user.service";
import { getCurrentUser } from "../../services/auth.service";
import { deleteThread } from "../../services/user.service";

export default function Thread(){
    const [threadList, setThreadList] = useState([]);
    const user = getCurrentUser();
    console.log(user)


    useEffect(() => {
        getPublicContent().then((res) => {
            setThreadList(res.data);
        });
    }, []);

    function handleDeleteThread(thread_id) {
        deleteThread(thread_id).then(() => {
            window.location.reload();
        });
    }
    

    const listThreads = () => {
        const arr = [];

        for (let i = threadList.length-1; i>=0; i--) {
            const item = threadList[i];
            console.log(item.thread_id)

            arr.push(
                <div className={styles.content}>

                    <div className={styles.post}>

                        <div className={styles.post__container}>
                            <div className={styles.post__author}>
                                AUTHOR: {item.username}
                                <button className={styles.delete__btn} onClick={handleDeleteThread(item.thread_id)} style={{display: (user.username == item.username) ? 'block' : 'none'}}>DELETE</button>
                            </div>
                            <div className={styles.post__content}>
                                CONTENT: {item.content}
                            </div>
                        </div>
                        <NavLink 
                            to={item.thread_id + '/comment'} 
                            className={styles.comment__btn}
                            state={{
                                thread: {
                                    author: item.username,
                                    content: item.content,
                                    thread_id: item.thread_id
                                }
                            }}
                        >Post Comment</NavLink>
                        
                    </div>
                    <div className={styles.line}></div>

                </div>
            )
        }

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