import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { getToken } from '../services/auth.service'
import styles from './nav.module.css'



// Note: Need to add link to redirect to home when clicking on navbar brand
export default function Nav() {
    const token = getToken();
    const navigate = useNavigate();
    const relative_path = window.location.pathname;

    return(
        <div style={{ display: (relative_path == '/register' || relative_path == '/login') ? 'none' : 'block' }}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1054/1054861.png" alt="logo" className={styles['logo__img']} />
                    <p className={styles['logo__brand']}>CIRCUS</p>
                </div>

                <div className={styles.search}>
                    <i className={'fa-solid fa-magnifying-glass ' + styles['search__btn']}></i>
                    <input type="text" placeholder='Search...' className={styles['search__input']} />
                </div>

                <div className={styles.account} style={{ display: token ? 'none' : 'block' }}>
                    <NavLink to="/login" className={styles['account__login']}>Log In</NavLink>
                    <NavLink to="/register" className={styles['account__register']}>Sign Up</NavLink>
                </div>
            </nav>
        </div>
    )
}