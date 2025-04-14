import React, { ChangeEvent } from 'react';
import classes from './App.module.scss';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Switch from '@/components/Switch';
import Select from './components/Select';
import TextField from '@/components/TextField';
import Modal from '@/components/Modal';

const options = [
    { id: 1, title: 'Option 1', isSelected: false },
    { id: 2, title: 'Option 2', isSelected: false },
    { id: 3, title: 'Option 3', isSelected: true },
    { id: 4, title: 'Option 4', isSelected: false },
    { id: 5, title: 'Option 5', isSelected: false },
    { id: 6, title: 'Option 6', isSelected: false },
];

const mockOptions = [
    { id: 1, title: 'Option 1', isSelected: false },
    { id: 2, title: 'Option 2', isSelected: true },
    { id: 3, title: 'Option 3', isSelected: false },
];

const App: React.FC = () => {
    const [selectedId, setSelectedId] = React.useState('');
    const setId = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedId(e.target.value);
    };

    const onClick = () => {
        console.log('Clicked');
    };

    const [open, setOpen] = React.useState(true);

    const onOpen = () => {
        setOpen(true);
        console.log('Opened from App.tsx');
    };

    const onClose = () => {
        // setOpen(false);
        console.log('Closed from App.tsx');
    };

    return (
        <div>
            {/*<Modal open={true} onClose={onClose}>*/}
            {/*    <h1>Hello world</h1>*/}
            {/*    <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*        At, deserunt dolor dolorem illum iusto omnis perspiciatis*/}
            {/*        saepe ullam? Ab ad aliquid cum cupiditate distinctio facilis*/}
            {/*        optio reprehenderit repudiandae similique suscipit.*/}
            {/*    </p>*/}
            {/*</Modal>*/}
            <TextField onChange={onClose} disabled />
        </div>
    );
};

export default App;
