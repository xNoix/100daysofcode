import React from "react";
import '../scss/Navbar.scss';

function Navbar() {
    return (
        <>
            <header>
                <div>
                    <img class="logo" src="img/logo.png" alt=""></img>
                </div>
                <nav class="main-nav" aria-label="Main">
                    <ul class="main-nav__list">
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link">Home</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link">Pages</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link">SHOP</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link">BLOG</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link">CONTACTOS</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button class="button yellow">
                        <span class="button__body">My Button</span>
                    </button>
                </div>
            </header>
        </>
    );
  }
  
  export default Navbar;