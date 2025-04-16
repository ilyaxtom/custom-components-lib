import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Switch from '@/components/Switch/index';

type StoryProps = ComponentProps<typeof Switch>;

const meta: Meta<StoryProps> = {
    component: Switch,
    argTypes: {
        sz: {
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
        sz: 'small',
    },
    render: ({ ...args }) => {
        return <Switch {...args} />;
    },
};

export const Medium: Story = {
    args: {
        sz: 'medium',
    },
    render: ({ ...args }) => {
        return <Switch {...args} />;
    },
};

export const Large: Story = {
    args: {
        sz: 'large',
    },
    render: ({ ...args }) => {
        return <Switch {...args} />;
    },
};
