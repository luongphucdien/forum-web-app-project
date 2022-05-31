import { useEffect, useState } from "react";
import { getPublicContent } from "../../services/user.service";
import Thread from "./thread";

export default function ThreadList() {
    const [allThreads, setAllThreads] = useState();

    useEffect(() => {
        getPublicContent().then(res => { return setAllThreads(res.data.reverse()) });
    }, []);

    const ParseThreads = () => {
        if (!allThreads) {
            return <h1>Loading...</h1>
        }
        else {
            return allThreads.map(item => {
                return <Thread thread={item} content={item.content} author={item.username} thread_id={item.thread_id} key={item.thread_id}/>
            });
        }
    };
    
    return (
        <div>{<ParseThreads/>}</div>
    );
}