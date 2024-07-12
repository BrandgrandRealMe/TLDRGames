import Head from "next/head";

import HeadMeta from "@/components/headMeta";
import Navbar from "@/components/navbar/Navbar";
import Logo from "@/components/logo.js";
import Homepage from "@/components/home/homepage";


export default function Home() {
  return (
    <>
      <HeadMeta />
      <Navbar />
      <Homepage />
    </>
  );
}