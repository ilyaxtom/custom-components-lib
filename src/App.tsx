import React from 'react';
import classes from './App.module.scss';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

const App: React.FC = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={classes.head}>
            <Checkbox
                label={'checkbox'}
                checked={checked}
                onChange={handleChange}
                required
                color={'pink'}
            />
        </div>
    );
};

export default App;
