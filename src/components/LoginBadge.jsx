import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginBadge = ({ onLogin, onLogout, user }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!user);

    const handleLogin = () => {
        // Call the login function and set the state
        onLogin();
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Call the logout function and set the state
        onLogout();
        setIsLoggedIn(false);
    };

    return (
        <div className='login-badge'>
            {isLoggedIn ? (
                <div>
                    <span>Welcome, {user.name}!</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

LoginBadge.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
};

export default LoginBadge;