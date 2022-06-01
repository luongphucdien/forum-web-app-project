import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { addComment, getCommentList } from "../../services/user.service";
import styles from './comment.module.css'
import CommentList from "./comment_list";

export default function Comment() {
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState();

    const location = useLocation();
    
    const author = location.state.thread.author;
    const content = location.state.thread.content;
    const thread_id = location.state.thread.thread_id;

    useEffect(() => {
        getCommentList(thread_id).then((res) => { setCommentList(res.reverse()) });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(comment, thread_id).then(() => {
            window.location.reload();
        });
    }

    const NumberOfComments = () => {
        if (!commentList)
            return <span>Loading...</span>
        else
            return <span>{commentList.length} {(commentList.length <= 1) ? 'comment' : 'comments'}</span>
    };

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
                    <div>
                        <div className={styles.post__comment}>
                            <textarea value={comment} onChange={(e) => setComment(e.target.value)}
                            type="text" placeholder="What are you thinking..." className={styles.comment__input} required></textarea>
                            <input className={styles.post__btn} type={'submit'} value='Post'/>
                        </div>
                        <div className={styles.lines}></div>
                        <div>
                        <p className={styles.view__comments}><NumberOfComments/></p>
                        </div>
                        <div className={styles.comment__list}>
                            <CommentList list={commentList}/>
                        </div>
                    </div>

                </div>
                <div className={styles.line}></div>
            </div>
        </form>
    )
}