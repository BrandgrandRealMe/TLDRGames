import Gamelink from "@/components/games/gameLink";
import GAMES from "@/utils/databases/GAMES.js"; 

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