"use client";
import Head from "next/head";
import Banner from "@/components/Home/Banner/Banner.tsx";
import Ratings from "@/components/Home/Ratings/Ratings.tsx";
import Path from "@/components/Home/Path/Path.tsx";
import Featuring from "@/components/Home/Featuring/Featuring.tsx";
import Growing from "@/components/Home/Growing/Growing.tsx";
import Meetings from "@/components/Home/Meetings/Meetings.tsx";

const Home = () => {
  return (
    <div>
      <Head>Finite</Head>
      <Banner />
      <Ratings />
      <Path />
      <Featuring />
      <Growing />
      <Meetings />
    </div>
  );
};

export default Home;
