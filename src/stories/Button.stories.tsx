import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Button from '../components/Button/index';

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        variant: {
            options: ['text', 'contained', 'outlined'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Outlined: Story = {
    args: {
        buttonText: 'Hello',
        variant: 'outlined',
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};

export const Text: Story = {
    args: {
        buttonText: 'Hello',
        variant: 'text',
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};

export const Contained: Story = {
    args: {
        buttonText: 'Hello',
        variant: 'contained',
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};

export const Small: Story = {
    args: {
        buttonText: 'Hello',
        size: 'small',
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};

export const Medium: Story = {
    args: {
        buttonText: 'Hello',
        size: 'medium',
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};

export const Large: Story = {
    args: {
        buttonText: 'Hello',
        size: 'large',
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};
