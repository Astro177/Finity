import { AiFillHeart, AiFillStar } from "react-icons/ai";
import logo2 from "../../assets/logo-4.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-2.png";
import Image from "next/image";

const Ratings = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-28 mb-28">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-[70px] text-bold">10K</p>
          <div className="text-red-400 flex gap-1 -mt-3">
            <AiFillHeart />
            <AiFillHeart />
            <AiFillHeart />
            <AiFillHeart />
            <AiFillHeart />
          </div>
          <p className="text-sm">Active Downloads</p>
          <p className="text-[#258AFF] hover:underline text-sm">On Websites</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[70px] text-bold">4.7</p>
          <div className="text-yellow-700 flex gap-1 -mt-3">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="text-sm">1,938 Rating</p>
          <p className="text-[#258AFF] hover:underline text-sm">
            On WordPress Community
          </p>
        </div>
        <div>
          <p className="text-[34px] text-bold max-w-[450px]">
            Trusted by 25,000+ happy Marketers and WordPress users since 2018.
          </p>
          <p className="text-[#7C8087] mt-10"> Also Featured in</p>
          <div className="flex gap-8 mt-10">
            <Image src={logo2} alt="" width={130} height={34} />
            <Image src={logo3} alt="" width={130} height={34} />
            <Image src={logo4} alt="" width={130} height={34} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
