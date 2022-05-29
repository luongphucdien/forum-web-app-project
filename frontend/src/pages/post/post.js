import styles from './post.module.css'
import {useState} from "react"
import { post } from '../../services/post.service'


export default function Post () {
    const [input, setInput] = useState('')

    const handlePost = (e) => {
        e.preventDefault()
        console.log(input)
        post(input)
    }

    return (
        <>
            <form className={styles.main}>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder = "What are you thinking..." className={styles.input} />
                <div className={styles.btn}>
                    <button onClick={handlePost} className={styles.post__btn}>Post</button>
                </div>
            </form>
        </>
    )
}