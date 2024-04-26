import React from 'react';
import { Logo } from './Logo';
import { Hex } from './Hex';
import { Star } from './Star';
import { Fork } from './Fork';
import { Github } from './Github';
import { Instagram } from './Instagram';
import { Facebook } from './Facebook';
import { Phone } from './Phone';
import { Folder } from './Folder';
import { External } from './External';

const Icon = ({ name }) => {
    switch (name) {
        case 'Logo':
            return <Logo />
        case 'Hex':
            return <Hex />
        case 'Star':
            return <Star />
        case 'Fork':
            return <Fork />
        case 'Github':
            return <Github />
        case 'Instagram':
            return <Instagram />
        case 'Facebook':
            return <Facebook />
        case 'Phone':
            return <Phone />
        case 'Folder':
            return <Folder />
        case 'External':
            return <External />
        default:
            return <External />
    }
};

export default Icon;