import React from 'react';
import { Logo } from './Logo';
import { Hex } from './Hex';

const Icon = ({ name }) => {
    switch (name) {
        case 'Logo':
            return <Logo />
        case 'Hex':
            return <Hex />
        default:
            break;
    }
};

export default Icon;