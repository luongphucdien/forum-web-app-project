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
        <div className={styles.main}>
            <div>
                <div className={styles.content}>

                    <div className={styles.post}>

                        <div className={styles.post__container}>
                            <div className={styles.post__author}>
                                USER: {username}
                                <button 
                                    className={styles.delete__btn} 
                                    onClick={handleDelete} 
                                    style={{display: (user.username === username) ? 'block' : 'none'}}
                                    value={comment_id}
                                >DELETE</button>
                            </div>
                            <div className={styles.post__content}>
                                COMMENT<br/>{comment}
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}