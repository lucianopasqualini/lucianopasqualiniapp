import React from 'react';
import './NavBar.css';

function NavBar() {
    return <>
            <header id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                    <a className="navbar-brand my-2 col-1 offset-1" href="#index.html">
                        <img src="https://bluu.be/wp-content/themes/bluu-theme/src/img/logo-bluu-blue.png" width="150" alt="logo" loading="lazy"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav col-6 offset-1 justify-content-center">
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
                </nav>
            </header>
        </>;
}

export default NavBar;