import { NavLink } from "react-router-dom";
import styles from './thread.module.css'

export default function Thread(){
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
                    <NavLink to="/comment" className={styles.comment__btn}>Post Comment</NavLink>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}