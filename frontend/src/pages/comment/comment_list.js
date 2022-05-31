import { useEffect, useState } from "react";
import { getCommentList } from "../../services/user.service"
import CommentCard from "./comment_card";

export default function CommentList({thread_id}) {
    const [commentList, setCommentList] = useState();

    useEffect(() => {
        getCommentList(thread_id).then((res) => { setCommentList(res.reverse()) });
    }, []);

    const ParseComments = () => {
        if (!commentList)
            return <h1>Loading...</h1>
        else {
            return commentList.map(item => {
                return <CommentCard 
                            key={item.comment_id} 
                            comment={item.content}
                            username={item.username}
                            comment_id={item.comment_id}
                        />
            });
        }
    };

    return (
        <div><ParseComments/></div>
    )
}