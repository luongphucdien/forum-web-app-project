import './Register.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useState} from 'react'

import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";


function Register() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const useValidate = (event) => {
        event.preventDefault();
        console.log(name, password)
        navigate('/login')
        let obj = {
            name: name,
            password:password,
        }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }



    return (
        <div className="main">
            <form action="" method="POST" className="form" id="form-1" autoComplete='off' onSubmit={useValidate}>
                <h2 className="heading">Sign up</h2>
                <p className="desc">WELCOME TO CIRCUS</p>
            
            <div className="spacer"></div>

            <div className="form-group">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}id="fullname" type="text" name="fullname" placeholder="Ex: Happy Clown" className="form-control" required />
            </div>

            <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" name="password" placeholder="Enter your password" className="form-control" required />
            </div>

            <button className="form-submit" onSubmit={useValidate}>Register</button> 
                Already a clown? <NavLink to='/login' className="form-message">LOG IN</NavLink>     
            </form>
        </div>
    )
}

export default Register