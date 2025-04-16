import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Checkbox from '@/components/Checkbox/index';

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
        return <Checkbox {...args} />;
    },
};

export const Medium: Story = {
    args: {
        sz: 'medium',
    },
    render: ({ ...args }) => {
        return <Checkbox {...args} />;
    },
};

export const Large: Story = {
    args: {
        sz: 'large',
    },
    render: ({ ...args }) => {
        return <Checkbox {...args} />;
    },
};
