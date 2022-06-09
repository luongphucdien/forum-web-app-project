import { NavLink } from "react-router-dom";
import styles from './thread.module.css';
import { getCurrentUser } from "../../services/auth.service";
import { deleteThread } from "../../services/user.service";
import CommentList from "../comment/comment_list";
import { useEffect, useState } from "react";
import { addComment, getCommentList } from "../../services/user.service";


export default function Thread({created_date, content, author, thread_id}){
    const [commentList, setCommentList] = useState();
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
        } else if (now.getMonth() - splitedDate[1] + 1 > 0) {
            remain += (now.getMonth() - splitedDate[1] + 1) + " months ago"
        } else if (now.getDate() - splitedDate[2] > 0) {
            remain += (now.getDate() - splitedDate[2]) + " days ago"
        } else if (now.getHours() - splitedDate[3] > 0) {
            remain += (now.getHours() - splitedDate[3]) + " hours ago"
        } else if (now.getMinutes() - splitedDate[4] > 0) {
            remain += (now.getMinutes() - splitedDate[4]) + " minutes ago"
        } else if (now.getSeconds() - splitedDate[5] > 0) {
            remain += (now.getSeconds() - splitedDate[5]) + " seconds ago"
        }
        else {
            remain += ' 0 second ago';
        }

        return remain;
    }

    useEffect(() => {
        getCommentList(thread_id).then((res) => { setCommentList(res.reverse()) });
    }, []);

    const NumberOfComments = () => {
        if (!commentList)
            return <span>Loading...</span>
        else
            return <span>{commentList.length} {(commentList.length <= 1) ? 'Comment' : 'Comments'}</span>
    };
    
    return(
        <div className={styles.main}>
            <div>
                <NavLink 
                        to={thread_id + '/comment'} 
                        className={styles.content} 
                        state={{
                                thread: {
                                    thread_id: thread_id,
                                    author: author,
                                    content: content
                                }
                        }}>
                    <div className={styles.post}>

                        <div className={styles.post__container}>
                            <div className={styles.post__author}>
                                <div className={styles.author}>
                                    {authorTmp}
                                    <div className={styles.time}>
                                        Posted {remainingTime(created_date)} 
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
                        <div className={styles.comment}>
                            <div className={styles.view__comments}><NumberOfComments/></div>
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
                        
                    </div>

                </NavLink>
                    {/* <div className={styles.line}></div> */}
            </div>
        </div>
    )
}