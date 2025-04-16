import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import Select from '@/components/Select';

type StoryProps = ComponentProps<typeof Select>;

const options = [
    { id: 1, title: 'Option 1', isSelected: false },
    { id: 2, title: 'Option 2', isSelected: false },
    { id: 3, title: 'Option 3', isSelected: true },
    { id: 4, title: 'Option 4', isSelected: false },
    { id: 5, title: 'Option 5', isSelected: false },
    { id: 6, title: 'Option 6', isSelected: false },
];

const meta: Meta<StoryProps> = {
    component: Select,
    argTypes: {
        options: {
            table: {
                disable: true,
            },
        },
        selectedId: {
            table: {
                disable: true,
            },
        },
        variant: {
            options: ['standard', 'filled', 'outlined'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['small', 'standard'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        options,
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Outlined: Story = {
    args: {
        variant: 'outlined',
    },
    render: ({ options, ...args }) => {
        return <Select options={options} {...args} />;
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
    },
    render: ({ options, ...args }) => {
        return <Select options={options} {...args} />;
    },
};

export const Standard: Story = {
    args: {
        variant: 'standard',
    },
    render: ({ options, ...args }) => {
        return <Select options={options} {...args} />;
    },
};

export const SmallSize: Story = {
    args: {
        size: 'small',
    },
    render: ({ options, ...args }) => {
        return <Select options={options} {...args} />;
    },
};

export const StandardSize: Story = {
    args: {
        size: 'standard',
    },
    render: ({ options, ...args }) => {
        return <Select options={options} {...args} />;
    },
};
