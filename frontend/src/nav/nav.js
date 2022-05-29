import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return(
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/1054/1054861.png" alt="logo" className="logo__img" />
                    <p className="logo__brand">CIRCUS</p>
                </div>

                <div className="search">
                    <i className="fa-solid fa-magnifying-glass search__btn"></i>
                    <input type="text" placeholder='Search...' className='search__input' />
                </div>

                <div className="account">
                    <NavLink to="/login" className="account__login">Log In</NavLink>
                    <NavLink to="/register" className="account__register">Sign Up</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav