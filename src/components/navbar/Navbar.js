import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import Logo from "@/components/logo.js";
import NavItem from "@/components/navbar/NavItem";

const MENU_LIST = [
    { text: "Home", icon: "home", hint: "Go to the homepage", href: "/", target: "_self" },
    { text: "Games", icon: "gamepad", hint: "View the games", href: "/games", target: "_self" },
    { text: "Submit game", icon: "add", hint: "Submit a game to be added", href: "https://opnform.com/forms/suggest-a-game-thaife", target: "_blank" },
    { text: "Donate", icon: "donate", hint: "Donate to the sites developer", href: "https://ko-fi.com/brandonthedev", target: "_blank" }
];


const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <Link className={"Header"} href={"/"}>
                    <Logo />
                    <h1 className="headerText">Games</h1>
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );

};

export default Navbar;