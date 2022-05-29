import React, { useEffect, useState } from "react";
import { getPublicContent } from '../../services/user.service'

export default function Home() {
    const [content, setContent] = useState();

    useEffect(() => {
        setContent(getPublicContent);
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <div className="mt-5">
                <h1>Homepage</h1>
            </div>
        </div>
    );
}