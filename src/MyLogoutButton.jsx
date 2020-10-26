import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';

const MyLogoutButton = forwardRef((props, ref) => {
    const logout = useLogout();
    const handleClick = () => logout('/custom-login');
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
        >
            <CloseIcon /> Logout
        </MenuItem>
    );
});

export default MyLogoutButton;