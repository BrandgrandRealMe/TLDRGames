import Gamelink from "@/components/games/gameLink";

const GAMES = [
    { text: "Home", desc: "Go to the homepage", href: "/", size: "5" },
];


const GamesSection = () => {

    return (
        <div className="games-section">
            <div className="games-list">
                {GAMES.map((menu, idx) => (
                    <Gamelink  {...menu} />
                ))}
            </div>
        </div>
    );

};

export default GamesSection;