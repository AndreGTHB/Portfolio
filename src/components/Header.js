import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio Web</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Strona Główna</NavLink>
    <NavLink to="/about" activeClassName="is-active">O mnie</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Kontakt</NavLink>
    </header>
);

export default Header;
