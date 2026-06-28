import { Link } from "react-router-dom";
import logo from '../assets/images/logo-white.png'
export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light  py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <Link className="mb-3 d-block" to="/"><img height="40" src={logo} alt="" /></Link>
                            <p>Building modern web applications with React and Bootstrap.</p>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/" className="text-light text-decoration-none">Home</Link>
                                </li>
                                <li>
                                    <Link to="/cart" className="text-light text-decoration-none">Cart</Link>
                                </li>
                                <li>
                                    <Link to="/orders" className="text-light text-decoration-none">Orders</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>Contact</h5>
                            <p className="m-0">Email: info@example.com</p>
                            <p>Phone: +91 9876543210</p>
                        </div>

                    </div>
                    <div className="text-center">
                        <p className="mb-0">© 2026 JCart. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}