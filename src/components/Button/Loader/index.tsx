import React from 'react';
import classes from './Loader.module.scss';

const Loader: React.FC = () => {
    return <div data-testid={'loader'} className={classes.loader}></div>;
};

export default Loader;
