import { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import Select from '@/components/Select';
import SelectItem from '@/components/Select/SelectItem';

const options = [
    { id: 1, title: 'Option 1' },
    { id: 2, title: 'Option 2' },
    { id: 3, title: 'Option 3' },
    { id: 4, title: 'Option 4' },
    { id: 5, title: 'Option 5' },
    { id: 6, title: 'Option 6' },
];

const meta: Meta = {
    component: Select,
    argTypes: {
        variant: {
            options: ['standard', 'filled', 'outlined'],
            control: { type: 'select' },
        },
        sz: {
            options: ['small', 'standard'],
            control: { type: 'select' },
        },
    },
};

export default meta;

type Story = StoryObj;

const Template = (args: any) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const optionsList = options.map(({ id, title }) => (
        <SelectItem<number>
            key={id}
            id={id}
            selected={selectedId === id}
            onChange={setSelectedId}
        >
            {title}
        </SelectItem>
    ));

    const selectedTitle = useMemo(() => {
        const option = options.find((o) => o.id === selectedId);
        return option ? option.title : '';
    }, [selectedId]);

    return (
        <Select selectedTitle={selectedTitle} {...args}>
            {optionsList}
        </Select>
    );
};

export const Outlined: Story = {
    render: Template,
    args: {
        variant: 'outlined',
    },
};

export const Filled: Story = {
    render: Template,
    args: {
        variant: 'filled',
    },
};

export const Standard: Story = {
    render: Template,
    args: {
        variant: 'standard',
    },
};

export const SmallSize: Story = {
    render: Template,
    args: {
        sz: 'small',
    },
};

export const StandardSize: Story = {
    render: Template,
    args: {
        sz: 'standard',
    },
};
