import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Comment() {
    const [comment, setComment] = useState('')

    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.post__container}>
                        <div className={styles.post__author}>
                            AUTHOR
                        </div>
                        <div className={styles.post__content}>
                            CONTENT
                        </div>
                    </div>
                    <div className={styles.post__comment}>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)}
                        type="text" placeholder="What are you thinking..." className={styles.comment} required></textarea>
                    </div>
                    <NavLink to="/comment" className={styles.comment__btn}>Post</NavLink>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}