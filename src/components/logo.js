import Image from "next/image";
import LogoSVG from "../utils/images/logo/Logo.svg";

const Logo = () => {
    return (
        <Image
            src={LogoSVG}
            alt="A Sheild with TLDR on it."
            className="Logo"
        />
    );
};

export default Logo;