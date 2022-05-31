import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { addComment } from "../../services/user.service";
import styles from './comment.module.css'
import CommentList from "./comment_list";

export default function Comment() {
    const [comment, setComment] = useState('')
    const location = useLocation();
    
    const author = location.state.thread.author;
    const content = location.state.thread.content;
    const thread_id = location.state.thread.thread_id;

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(comment, thread_id).then(() => {
            window.location.reload();
        });
    }

    return(
        <form className={styles.main} onSubmit={handleSubmit}>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.post__container}>
                        <div className={styles.post__author}>
                            <div className={styles.author}>{author}</div>
                        </div>
                        <div className={styles.post__content}>
                            {content}
                        </div>
                    </div>
                    <div className={styles.post__comment}>
                        <CommentList thread_id={thread_id}/>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)}
                        type="text" placeholder="What are you thinking..." className={styles.comment} required></textarea>
                    </div>
                    <input className={styles.post__btn} type={'submit'} value='Post'/>
                </div>
                <div className={styles.line}></div>
            </div>
        </form>
    )
}