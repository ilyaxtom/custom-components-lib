import React from 'react';
import classes from './App.module.scss';
import Button from './components/Button';

const App: React.FC = () => {
    return (
        <div className={classes.head}>
            <Button>Small</Button>
            <Button size={'medium'}>Medium</Button>
            <Button size={'large'}>Large</Button>
        </div>
    );
};

export default App;
