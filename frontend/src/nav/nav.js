import React from "react";


export default function Nav() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Forum</a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between mt-3 mt-sm-0" id="navbarNav">
                    <form className="d-flex flex-fill justify-content-center" role={'search'}>
                        <input className="form-control me-2 w-75" type={'search'} placeholder='Search' aria-label="Search"/>
                        <input className="btn btn-outline-success" type={'submit'}/>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a className="nav-link" href="/sign-in">Sign In</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="/sign-up">Sign Up</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}