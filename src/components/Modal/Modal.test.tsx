import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '@/components/Modal';

describe('Modal', () => {
    beforeEach(() => {
        render(
            <Modal />
        );
    })

    test('Toggle modal', () => {

    });
});
