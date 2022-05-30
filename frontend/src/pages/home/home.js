import React, { useEffect, useState } from "react";
import styles from './home.module.css'
import Thread from '../thread/thread'
import {NavLink} from 'react-router-dom'
import Post from "../post/post";
import { getPublicContent, getUserThreads } from '../../services/user.service'

export default function Home() {    
    return (
        <div className={styles.main}>
            <Thread/>
            <Thread/>
            <Thread/>
            <Thread/>
        </div>
    );
}