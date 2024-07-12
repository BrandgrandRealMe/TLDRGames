import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/logo.js";

const Homepage = () => {
    return (
        <div className="Homepage">
            <div className="Header">
                <div className="Logo"><Logo /></div>
                <div className="Title">Games</div>
            </div>
            <div className="Buttons">
                <Link href="/games" className="button">Games</Link>
                <Link href="https://ko-fi.com/brandonthedev" target="_blank" className="button">Donate</Link>
            </div>
        </div>
    );
};

export default Homepage;