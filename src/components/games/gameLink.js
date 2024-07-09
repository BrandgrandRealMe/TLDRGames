import Link from "next/link";
import React, { useState } from 'react';

const Gamelink = ({ text, href, desc, size }) => {
    return (
        <Link className="button" title={desc} href={href}>
            <div style={{ fontSize: `${size * 10}px` }}>{text}</div>
        </Link>
    );
};

export default Gamelink;