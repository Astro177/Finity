/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import banner1 from "../../assets/Rectangle.png";
import banner2 from "../../assets/RectangleCopy.png";
import banner3 from "../../assets/Group9.png";
import banner4 from "../../assets/Group9Copy.png";

const Banner = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-10 md:mt-32 px-10 md:px-0 h-[600px]">
      <div className="md:flex gap-4 items-center">
        <div className="flex flex-col gap-6 max-w-[580px]">
          <p className="text-[#1D293F] text-[70px] leading-[70px] max-w-[500px] font-bold">
            Get valuable leads inside WordPress.
          </p>
          <p className="max-w-[450px]">
            We’ve helped over 2,500 job seekers to get into the most popular
            tech teams.
          </p>
          <Button
            variant="filled"
            size="lg"
            className="bg-[#258AFF] max-w-[300px] rounded-md py-5"
          >
            Get Started For Free
          </Button>
          <p className="text-sm">
            Still Confused?{" "}
            <span className="text-[#258AFF] hover:underline">
              Check our 1 min video
            </span>
          </p>
        </div>
        <div className="">
          <div className="md:flex relative">
            <Image
              src={banner1}
              alt=""
              className="md:-mt-20 md:ml-[10px]"
              width={300}
              height={300}
            />
            <Image
              src={banner2}
              alt=""
              className="absolute top-10 md:ml-[350px]"
              width={300}
              height={300}
            />
          </div>
          <div className="absolute top-[400px] md:ml-[160px] bg-white pt-6 rounded-md">
            <div className="px-6">
              {" "}
              <p className="text-bold text-[18px]">Meeting With John</p>
              <p className="text-sm text-[#7C8087]">11:15am, Sep 10, Sunday</p>
              <p className="text-sm mt-6 text-[#7C8087]">Agenda:</p>
              <p className="text-sm max-w-[150px] mt-2 text-bold">
                How to get more customers for your ecommerce business
              </p>
            </div>
            <div className="flex mt-6 mx-auto w-[180px]">
              <Image src={banner3} alt="" />
              <Image src={banner4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
