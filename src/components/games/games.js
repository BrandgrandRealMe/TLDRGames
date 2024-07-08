import Gamelink from "@/components/games/gameLink";

const GAMES = [
    { text: "Home", desc: "Go to the homepage", href: "/" },
];


const GamesSection = () => {

    return (
        <div className="games-section">
            <div className="games-list">
                {GAMES.map((menu, idx) => (
                    <div className="button">
                        <Gamelink  {...menu} />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default GamesSection;