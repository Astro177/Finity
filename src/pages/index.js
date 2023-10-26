"use client";
import Head from "next/head";
import Banner from "@/components/Banner/Banner.tsx";
import Ratings from "@/components/Ratings/Ratings.tsx";
import Path from "@/components/Path/Path.tsx";

const Home = () => {
  return (
    <div>
      <Head>Finite</Head>
      <Banner />
      <Ratings />
      <Path />
    </div>
  );
};

export default Home;
