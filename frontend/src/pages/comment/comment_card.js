import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../../services/auth.service';
import { deleteComment } from '../../services/user.service';
import styles from './comment.module.css';

export default function CommentCard({comment, username, comment_id, comment_card}) {
    const user = getCurrentUser();
    let authorTmp = username;

    if (username === user.username) {
        authorTmp = 'You'
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteComment(e.target.value).then(() => {
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
        } else if (now.getHours() - splitedDate[3] > 0) {
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
        <div className={styles.comment__main}>
            <div>
                <div className={styles.content}>

                    <div className={styles.comment}>

                        <div className={styles.comment__container}>
                            <div className={styles.comment__author}>
                                {authorTmp}
                                <div className={styles.time}>
                                    Posted {remainingTime(comment_card.create_date)} 
                                </div>
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