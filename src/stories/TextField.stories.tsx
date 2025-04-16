import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import TextField from '@/components/TextField/index';

type StoryProps = ComponentProps<typeof TextField> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: TextField,
    argTypes: {
        type: {
            table: {
                disable: true,
            },
        },
        multiline: {
            table: {
                disable: true,
            },
        },
        inputProps: {
            table: {
                disable: true,
            },
        },
        textareaProps: {
            table: {
                disable: true,
            },
        },
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Outlined: Story = {
    args: {
        variant: 'outlined',
    },
    render: ({ ...args }) => {
        return <TextField {...args} />;
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
    },
    render: ({ ...args }) => {
        return <TextField {...args} />;
    },
};

export const Standard: Story = {
    args: {
        variant: 'standard',
    },
    render: ({ ...args }) => {
        return <TextField {...args} />;
    },
};

export const Number: Story = {
    args: {
        type: 'number',
    },
    render: ({ ...args }) => {
        return <TextField {...args} />;
    },
};

export const Password: Story = {
    args: {
        type: 'password',
    },
    render: ({ ...args }) => {
        return <TextField {...args} />;
    },
};

export const Multiline: Story = {
    args: {
        multiline: true,
    },
    render: ({ ...args }) => {
        return <TextField {...args} />;
    },
};
