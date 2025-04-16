import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import Switch from '@/components/Switch/index';

type StoryProps = ComponentProps<typeof Switch>;

const meta: Meta<StoryProps> = {
    component: Switch,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Small: Story = {
    args: {
        size: 'small',
    },
    render: ({ ...args }) => {
        return <Switch {...args} />;
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
    },
    render: ({ ...args }) => {
        return <Switch {...args} />;
    },
};

export const Large: Story = {
    args: {
        size: 'large',
    },
    render: ({ ...args }) => {
        return <Switch {...args} />;
    },
};
