import React from 'react';
import './components.css';
import CartWidget from './CartWidget'

function NavBar() {
    return <>
            <header id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                    <a className="navbar-brand my-2 col-1 offset-1" href="#index.html">
                        <img src="https://bluu.be/wp-content/themes/bluu-theme/src/img/logo-bluu-blue.png" width="100" alt="logo" loading="lazy"/>
                    </a>
                    <div className="col-6 offset-1" id="navbarNav">
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item mr-5 active">
                                <a className="nav-link" href="Cursos.html">Cursos</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="pricing.html">Planes</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="faq.html">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1 offset-1 justify-content-center">
                        <CartWidget />
                    </div>
                </nav>
            </header>
        </>;
}

export default NavBar;