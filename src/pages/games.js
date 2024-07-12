import Head from "next/head";

import Navbar from "@/components/navbar/Navbar";
import HeadMeta from "@/components/headMeta";
import GamesSection from "@/components/games/games"
import Searchbar from "@/components/games/searchbar"
import GAMES from "@/utils/databases/GAMES.js"; 

const meta = {title: "TL;DR Games | Games"};

export default function Games() {
  return (
    <>
      <HeadMeta {...meta} />
      <Navbar />
      <Searchbar data={GAMES} />
      <GamesSection />
    </>
  );
}