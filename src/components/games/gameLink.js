import Link from "next/link";
import React, { useState } from 'react';

const Gamelink = ({ text, href, desc, active }) => {
    return (
        <Link title={desc} href={href}>
            <div className={`nav__link`}>{text}</div>
        </Link>
    );
};

export default Gamelink;