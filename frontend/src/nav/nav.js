import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { getCurrentUser, getToken, signout } from '../services/auth.service'
import styles from './nav.module.css'



// Note: Need to add link to redirect to home when clicking on navbar brand
export default function Nav() {
    const token = getToken();
    const relative_path = window.location.pathname;
    const [username, setUsername] = useState();

    useEffect(() => {
        if (token)
            setUsername(getCurrentUser().username);
    }, []);

    return(
        <div style={{ display: (relative_path == '/register' || relative_path == '/login') ? 'none' : 'block' }}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <NavLink to="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/1054/1054861.png" alt="logo" className={styles['logo__img']} />
                    </NavLink>
                    <NavLink to="/" className={styles['logo__brand']}>CIRCUS</NavLink>
                </div>

                <div className={styles.create}>
                    <NavLink to ="/creatingpost" className={styles['create__btn']}>Create Post</NavLink>
                </div>

                <div>
                    <div className={styles.account} style={{ display: token ? 'none' : 'flex' }}>
                        <NavLink to="/login" className={styles['account__login']}>Log In</NavLink>
                        <NavLink to="/register" className={styles['account__register']}>Sign Up</NavLink>
                    </div>
                    <div className={styles.account} style={{display: token ? 'flex' : 'none'}}> 
                        <NavLink to={'/' + username}>User Page</NavLink>
                        <button className={styles['account__logout']} onClick={signout} >Log Out</button>
                    </div>

                </div>
            </nav>
        </div>
    )
}