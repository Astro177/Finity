"use client";
import Head from "next/head";
import Banner from "@/components/Home/Banner/Banner.tsx";
import Ratings from "@/components/Home/Ratings/Ratings.tsx";
import Path from "@/components/Home/Path/Path.tsx";

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
