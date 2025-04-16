import React from 'react';
import classes from './Dropdown.module.scss';

interface DropdownProps {
    children?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
    return <div className={classes.dropdown}>{children}</div>;
};

export default Dropdown;
