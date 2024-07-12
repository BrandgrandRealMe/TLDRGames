import Link from "next/link";
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDonate, faGamepad, faPlusSquare, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


const NavItem = ({ text, href, target, icon, hint, active }) => {
    const availableIcons = {
        home: faHouse,
        donate: faDonate,
        gamepad: faGamepad,
        add: faPlusSquare,
        discord: faDiscord,
        changelog: faClockRotateLeft
    };

    const selectedIcon = availableIcons[icon];

    return (
        <Link title={hint} href={href} target={target}>
            <div className={`nav__link`}><FontAwesomeIcon className="icon" icon={selectedIcon} />{text}</div>
        </Link>
    );
};

export default NavItem;