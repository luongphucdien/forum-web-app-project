import React, { useState } from "react";
import styles from './home.module.css'
import {NavLink} from 'react-router-dom'
import Post from "../post/post";
// import { getPublicContent } from '../../services/user.service'

export default function Home() {
    // const [content, setContent] = useState();

    // useEffect(() => {
    //     setContent(getPublicContent);
    // }, []);


    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h1>Homepage</h1>
            </div>
            <NavLink to="/creatingpost" className={styles.create__btn} >Creating post</NavLink>
        </div>
    );
}