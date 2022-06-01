import styles from './post.module.css'
import {useState} from "react"
import { post } from '../../services/user.service'
import { useNavigate } from 'react-router-dom';


export default function Post () {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handlePost = (e) => {
        e.preventDefault()
        post(input);
        window.location.href = '/';
    }

    return (
        <>
            <form className={styles.main} onSubmit={handlePost}>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder = "What are you thinking..." className={styles.input} required/>
                <div className={styles.btn}>
                    <input className={styles.post__btn} type='submit' value={'Create Thread'}/>
                </div>
            </form>
        </>
    )
}