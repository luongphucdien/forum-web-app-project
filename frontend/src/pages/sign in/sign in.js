import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, signin } from '../../services/auth.service';
import styles from './signin.module.css'

export default function SignIn() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (token)
            navigate('/');
    }, []);

    const handleSignIn = (e) => {
        e.preventDefault();
        signin(username, password).then(() => {
            window.location.reload();
        });
    }

    return (
        <div className={styles.main}>
            <form action="" method="POST" className={styles.form} id="form-1" autoComplete='off' onSubmit={handleSignIn}>
                <h2 className={styles.heading}>Log in</h2>
                <p className={styles.desc}>WELCOME TO CIRCUS</p>
            
            <div className={styles.spacer}></div>

            <div className={styles['form-group']}>
                <label htmlFor="username" className={styles['form-label']}>Username</label>
                <input onChange={(e) => setUsername(e.target.value)}id="username" type="text" name="fullname" placeholder="Ex: Happy Clown" className={styles['form-control']} required />
            </div>

            <div className={styles['form-group']}>
                <label htmlFor="password" className={styles['form-label']}>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" name="password" placeholder="Enter your password" className={styles['form-control']} required />
            </div>

            <button className={styles['form-submit']} onSubmit={handleSignIn}>Log in</button> 
            </form>
        </div>
    );
}