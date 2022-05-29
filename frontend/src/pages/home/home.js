import React, { useEffect, useState } from "react";
import styles from './home.module.css'
import {NavLink} from 'react-router-dom'
import Post from "../post/post";
import { getPublicContent, getUserThreads } from '../../services/user.service'

export default function Home() {
    const [content, setContent] = useState([]);
    
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                HOMEPAGE
            </div>
        </div>
    );
}