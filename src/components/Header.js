import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-white.png";
import '../assets/css/header.css';
export default function Header() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <Link className="navbar-brand" to="/"><img style={{ height: "40px" }} src={logo} alt="" /></Link>
                        

                        <ul className="navbar-nav mr-auto d-flex align-items-center">
                            <li><form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-5">
                            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form></li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link"><i className="bi bi-cart"></i></Link>

                                {/* <i className="bi bi-person"></i>
<i className="bi bi-heart"></i>
<i className="bi bi-search"></i> */}
                            </li>

                            <li className="nav-item">
                            </li>
                            <div className="dropdown text-end">
                                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                </a>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                                    <li><Link to="/orders" className="dropdown-item">Orders</Link></li>
                                    <li><Link to="/login" className="dropdown-item">Sign Out</Link></li>
                                </ul>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}