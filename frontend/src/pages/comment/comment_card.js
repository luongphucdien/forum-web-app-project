import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../../services/auth.service';
import { deleteComment } from '../../services/user.service';
import styles from './comment.module.css';

export default function CommentCard({comment, username, comment_id}) {
    const user = getCurrentUser();

    const handleDelete = (e) => {
        e.preventDefault();
        deleteComment(e.target.value).then(() => {
            window.location.reload();
        });
    }
    
    return(
        <div className={styles.comment__main}>
            <div>
                <div className={styles.content}>

                    <div className={styles.comment}>

                        <div className={styles.comment__container}>
                            <div className={styles.comment__author}>
                                {username}
                                <button 
                                    className={styles.delete__comment__btn} 
                                    onClick={handleDelete} 
                                    style={{display: (user.username === username) ? 'block' : 'none'}}
                                    value={comment_id}
                                >DELETE</button>
                            </div>
                            <div className={styles.comment__content}>
                                {comment}
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}