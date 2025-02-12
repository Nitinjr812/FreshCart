    import React from 'react';
    import './Nav.css';
    import { Link } from 'react-router-dom';  

    const Nav = () => {        
        return (
            <>
                <nav className="navbar navbar-light bg-light  align-items-center">
                    <Link className="navbar-brand" to="/">  
                        <img src="freshcart.svg" width={30} height={30} alt="logo" />
                    </Link>
                    <p className="para ms-auto my-auto me-sm-0">Delivers In Minutes</p>
                </nav>
            </>
        );
    };

    export default Nav;
