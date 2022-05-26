import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../services/auth.service';


export default function SignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSignIn = (e) => {
        e.preventDefault();
        signin(username, password);
    }

    const test = () => {
        navigate('/');
    };

    return (
        <div className='d-flex mt-5'>
            <div className='m-auto col-10 col-md-5 p-3'>
                <form onSubmit={handleSignIn} method='post'>
                    <h2 className='text-center mb-4'>Sign in</h2>

                    <div className='mb-3 form-floating'>
                        <input 
                            type={'text'} 
                            className='form-control' 
                            id='username' 
                            name='username' 
                            placeholder='test'
                            onChange={e => {setUsername(e.target.value)}}
                            required
                        />
                        <label htmlFor='username'>Username</label>
                    </div>

                    <div className='mb-5 form-floating'>
                        <input 
                            type={'password'} 
                            className='form-control' 
                            id='password' 
                            name='password' 
                            placeholder='test'
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor='password'>Password</label>
                    </div>

                    <div className='text-center'>
                        <input 
                            type={'submit'} 
                            className='btn btn-primary btn-lg col-7' 
                            value={'Sign In'}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}