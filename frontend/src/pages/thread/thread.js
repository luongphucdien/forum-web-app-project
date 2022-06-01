import { NavLink } from "react-router-dom";
import styles from './thread.module.css';
import { getCurrentUser } from "../../services/auth.service";
import { deleteThread } from "../../services/user.service";
import { useEffect } from "react";

export default function Thread({thread, content, author, thread_id}){
    const user = getCurrentUser();
    let authorTmp = author;

    if (author === user.username) {
        authorTmp = 'You'
    }

    const handleDeleteThread = (e) => {
        e.preventDefault();
        deleteThread(e.target.value).then(() => {
            window.location.reload();
        });
    }

    function remainingTime(date) {
        const now = new Date();
        let remain = "";
        let splitedDate = date.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);

        if (now.getFullYear() - splitedDate[0] > 0) {
            remain += (now.getFullYear() - splitedDate[0]) + " years ago" 
            return remain;
        } else if (now.getMonth() - splitedDate[1] + 1 > 0) {
            remain += (now.getMonth() - splitedDate[1] + 1) + " months ago"
            return remain;
        } else if (now.getDate() - splitedDate[2] > 0) {
            remain += (now.getDate() - splitedDate[2]) + " days ago"
            return remain;
        } else if (now.getHours - splitedDate[3] > 0) {
            remain += (now.getHours() - splitedDate[3]) + " hours ago"
            return remain;
        } else if (now.getMinutes() - splitedDate[4] > 0) {
            remain += (now.getMinutes() - splitedDate[4]) + " minutes ago"
            return remain;
        } else if (now.getSeconds() - splitedDate[5] > 0) {
            remain += (now.getSeconds() - splitedDate[5]) + " seconds ago"
            return remain;
        }
    }
    
    return(
        <div className={styles.main}>
            <div>
                <div className={styles.content}>

                    <div className={styles.post}>

                        <div className={styles.post__container}>
                            <div className={styles.post__author}>
                                <div className={styles.author}>
                                    {authorTmp}
                                    <div className={styles.time}>
                                        Posted {remainingTime(thread.created_date)} 
                                    </div>
                                </div>
                                <button 
                                    className={styles.delete__btn} 
                                    onClick={handleDeleteThread} 
                                    style={{display: (user.username === author) ? 'block' : 'none'}}
                                    value={thread_id}
                                >DELETE</button>
                            </div>
                            <div className={styles.post__content}>
                               {content}
                            </div>
                           
                        </div>
                        <NavLink 
                            to={thread_id + '/comment'} 
                            className={styles.comment__btn}
                            state={{
                                thread: {
                                    thread_id: thread_id,
                                    author: author,
                                    content: content
                                }
                            }}
                        >Post Comment</NavLink>
                        
                    </div>
                    <div className={styles.line}></div>

                </div>
            </div>
        </div>
    )
}