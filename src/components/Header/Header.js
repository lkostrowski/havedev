import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const routes = [
    {
        to: '/',
        label: 'Homepage'
    }, {
        to: '/blog',
        label: 'Blog'
    }, {
        to: '/contact',
        label: 'Contact'
    }, {
        to: '/resume',
        label: 'Resume'
    },
];

const Header = ({location}) => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <ul className="header__links">
                    {routes.map((route, i) => (
                        <li key={i}
                            className={`header__link ${route.to === location.pathname ? 'header__link--active' : ''}`}>
                            <Link to={route.to}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
};

function mapStateToProps(state) {
    return {
        location: state.router.location
    }
}

export default connect(mapStateToProps)(Header);