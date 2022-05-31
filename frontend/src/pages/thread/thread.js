import { NavLink } from "react-router-dom";
import styles from './thread.module.css';
import { getCurrentUser } from "../../services/auth.service";
import { deleteThread } from "../../services/user.service";

export default function Thread({thread, content, author, thread_id}){
    const user = getCurrentUser();

    const handleDeleteThread = (e) => {
        e.preventDefault();
        deleteThread(e.target.value).then(() => {
            window.location.reload();
        });
    }
    
    return(
        <div className={styles.main}>
            <div>
                <div className={styles.content}>

                    <div className={styles.post}>

                        <div className={styles.post__container}>
                            <div className={styles.post__author}>
                                <div className={styles.author}>{author}</div>
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
                            <div>
                                Date: {thread.created_date}
                            </div>
                        </div>
                        <NavLink 
                            to={thread_id + '/comment'} 
                            className={styles.comment__btn}
                            state={{
                                thread: {
                                    author: author,
                                    content: content,
                                    thread_id: thread_id
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