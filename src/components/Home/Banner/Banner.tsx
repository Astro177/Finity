/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import banner1 from "../../../assets/Rectangle.png";
import banner2 from "../../../assets/RectangleCopy.png";
import banner5 from "../../../assets/Group12.png";
import banner6 from "../../../assets/Ovall.png";
import banner3 from "../../../assets/DotPattern1.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-10 md:mt-32 px-10 md:px-0 h-[600px]">
      <div className="md:flex gap-4 items-center">
        <div className="flex flex-col gap-6 max-w-[580px]">
          <p className="text-[#1D293F] text-[50px] md:text-[70px] leading-[70px] md:max-w-[500px] font-bold">
            Get valuable leads inside WordPress.
          </p>
          <p className="max-w-[450px]">
            We’ve helped over 2,500 job seekers to get into the most popular
            tech teams.
          </p>
          <Link href={"/login"}>
            <Button
              variant="filled"
              size="lg"
              className="bg-[#258AFF] max-w-[300px] rounded-md py-5"
            >
              Get Started For Free
            </Button>
          </Link>
          <p className="text-sm">
            Still Confused?{" "}
            <span className="text-[#258AFF] hover:underline">
              Check our 1 min video
            </span>
          </p>
        </div>
        <div className="hidden md:block">
          <div className="md:flex relative">
            <Image
              src={banner1}
              alt=""
              className="md:-mt-20 md:ml-[10px] z-10"
              width={300}
              height={300}
            />
            <Image
              src={banner6}
              alt=""
              className="absolute -right-28 -top-6 hidden md:block"
            />
            <Image
              src={banner2}
              alt=""
              className="absolute top-10 md:ml-[350px]"
              width={300}
              height={300}
            />
          </div>
          <div className="absolute top-[400px] md:ml-[170px] z-20">
            <Image src={banner5} alt="" />
          </div>
          <div className="absolute bottom-[     20] right-[650px] hidden md:block">
            <Image src={banner3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
