import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Modal from '@/components/Modal/index';

type StoryProps = ComponentProps<typeof Modal>;

const meta: Meta<StoryProps> = {
    component: Modal,
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        children: (
            <>
                <h1>Hello World</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium animi asperiores, aspernatur at blanditiis
                    dolore, dolorum eligendi, provident recusandae repellendus
                    sint voluptatum! Magni nulla officia officiis! Dolores
                    recusandae sit tempore?
                </p>
            </>
        ),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const ModalBox: Story = {
    args: {},
    render: ({ children }) => {
        return <Modal>{children}</Modal>;
    },
};
