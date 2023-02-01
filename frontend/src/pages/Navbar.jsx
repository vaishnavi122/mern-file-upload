import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link to='/' className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/single' className="nav-link " >Single</Link>
                        <Link to='/mutiple' className="nav-link">Mutiple</Link>
                        <Link to='/mutipledocs' className="nav-link">MutipleDocs</Link>
                    </div>
                </div>
            </div>
        </nav>

    </>
}

export default Navbar