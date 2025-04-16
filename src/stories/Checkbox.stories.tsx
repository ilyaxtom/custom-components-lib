import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Checkbox from '../components/Checkbox/index';

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
    component: Checkbox,
    argTypes: {
        color: {
            options: ['blue', 'purple', 'green', 'grey', 'pink'],
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
        onChange: fn(),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Small: Story = {
    args: {
        size: 'small',
    },
    render: ({ ...args }) => {
        return <Checkbox {...args} />;
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
    },
    render: ({ ...args }) => {
        return <Checkbox {...args} />;
    },
};

export const Large: Story = {
    args: {
        size: 'large',
    },
    render: ({ ...args }) => {
        return <Checkbox {...args} />;
    },
};
