import styles from './register.module.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import { signup } from '../../services/auth.service';


function Register() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const useValidate = (event) => {
        event.preventDefault();
        console.log(name, password);
        // Add auth service here when backend is done
        signup(name, 'test', password);
    }

    return (
        // Need email, username and re-type password fields
        <div className={styles.main}>
            <form action="" method="POST" className={styles.form} id="form-1" autoComplete='off' onSubmit={useValidate}>
                <h2 className={styles.heading}>Sign up</h2>
                <p className={styles.desc}>WELCOME TO CIRCUS</p>
            
            <div className={styles.spacer}></div>

            <div className={styles['form-group']}>
                <label htmlFor="fullname" className={styles['form-label']}>Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}id="fullname" type="text" name="fullname" placeholder="Ex: Happy Clown" className={styles['form-control']} required />
            </div>

            <div className={styles['form-group']}>
                <label htmlFor="password" className={styles['form-label']}>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" name="password" placeholder="Enter your password" className={styles['form-control']} required />
            </div>

            <button className={styles['form-submit']} onSubmit={useValidate}>Register</button> 
                Already a clown? <NavLink to='/login' className={styles['form-message']}>LOG IN</NavLink>     
            </form>
        </div>
    )
}

export default Register