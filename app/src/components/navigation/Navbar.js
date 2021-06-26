import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingCart from '../shoppingCart/ShoppingCart'
import { logout } from '../../store/actions/authActions'



const Navbar = () => {

    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.auth.userEmail);
    const admin = useSelector(state => state.auth.admin);
    const getTotalQuantity = useSelector(state => state.cart.totalCartQuantity)

    
    const logoutUser= () => {
        dispatch(logout())
    }

    

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
            
            <Link to="/" className="navbar-brand"><span>MySHOP</span></Link>
            
            
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
                            <span className="badge rounded-pill badge-notification bg-light text-dark">{getTotalQuantity}</span>

                    </a>
                    <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                        <ShoppingCart />
                    </ul>
                    
                    {
                        loggedIn ? 
                        <>  { !admin ?
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
                                
                                
                                <li><NavLink exact className="dropdown-item" to={`/order/${loggedIn}`}>Orderhistorik</NavLink></li>
                                <li><button className="dropdown-item" onClick={logoutUser}>Logga ut</button></li>
                            </ul>
                            </>
                            : <>
                            <a
                            className="text-dark nav-link dropdown-toggle"
                            href="/#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            >   
                                <i className="text-dark ">Admin</i>
                                
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end border border-4 rounded" aria-labelledby="navbarDropdownMenuLink">
                                
                                <li><NavLink exact className="dropdown-item" to="/orders">Order</NavLink></li>
                                <li><NavLink exact className="dropdown-item" to="/users">Kunder</NavLink></li>
                                <li><Link className="dropdown-item" to="/products" onClick={logoutUser}>Logga ut</Link></li>
                            </ul>
                            </>
                            }
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
