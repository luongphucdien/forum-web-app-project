import React, { useEffect, useState } from "react";
import { getPublicContent } from '../../services/user.service'

export default function Home() {
    const [content, setContent] = useState();

    useEffect(() => {
        setContent(getPublicContent);
    }, []);

    return (
        <div>
            <p>Homepage</p>
            <div>${ content }</div>
        </div>
    );
}