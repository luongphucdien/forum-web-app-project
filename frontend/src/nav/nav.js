import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'


// Note: Need to add link to redirect to home when clicking on navbar brand
function Nav() {
    return(
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1054/1054861.png" alt="logo" className={styles['logo__img']} />
                    <p className={styles['logo__brand']}>CIRCUS</p>
                </div>

                <div className={styles.search}>
                    <i className={'fa-solid fa-magnifying-glass ' + styles['search__btn']}></i>
                    <input type="text" placeholder='Search...' className={styles['search__input']} />
                </div>

                <div className={styles.account}>
                    <NavLink to="/sign-in" className={styles['account__login']}>Log In</NavLink>
                    <NavLink to="/register" className={styles['account__register']}>Sign Up</NavLink>
                </div>
            </nav>
        </div>
    )
}