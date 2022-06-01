import { useEffect, useState } from "react";
import { getCommentList } from "../../services/user.service"
import CommentCard from "./comment_card";

export default function CommentList({list}) {   
    const ParseComments = () => {
        if (!list)
            return <h1>Loading...</h1>
        else {
            return list.map(item => {
                return <CommentCard 
                            key={item.comment_id} 
                            comment={item.content}
                            username={item.username}
                            comment_id={item.comment_id}
                            comment_card={item}
                        />
            });
        }
    };

    return (
        <div><ParseComments/></div>
    )
}