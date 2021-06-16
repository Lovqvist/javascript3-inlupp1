import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isAuth, setIsAuth] = useState(false)



    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom border-dark ">
        <div className="container">
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>
            
            <NavLink exact to="/" className="navbar-brand"><span>MySHOP</span></NavLink>
            
            
                {/* <!-- Dropdown --> */}
                <div className=" navbar dropdown icon ">
                    <a
                    className="nav-link"
                    href="!#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                        <i className="text-dark fas fa-shopping-cart"></i>
                            <span className="badge rounded-pill badge-notification bg-light text-dark">1</span>

                    </a>
                    <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                    
                    </ul>
                    
                    {
                        isAuth ? 
                        <>
                            <a
                            className="text-dark nav-link dropdown-toggle"
                            href="/#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            >   
                                <i className="text-dark fas fa-user"></i>
                                
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end border border-4 rounded" aria-labelledby="navbarDropdownMenuLink">
                                
                                <li><NavLink className="dropdown-item" to="/orderhistory">Order historik</NavLink></li>
                                <li><button className="dropdown-item">Logga ut</button></li>
                            </ul>
                        </>
                        : <i><NavLink exact to="/login" className="nav-link text-dark login-link" >Logga in</NavLink></i>
                    }
                    
                    
                    
                </div>
                
            
               

            <div className="mx-3 collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/products" activeClassName="active-link" className="nav-link text-dark" >Produkter</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about"  activeClassName="active-link" className="nav-link text-dark">Om oss</NavLink>
                    </li>
                </ul>
            </div>    
        </div>
    </nav>
    )
}

export default Navbar
