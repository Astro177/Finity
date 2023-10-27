import Image from "next/image";
import img1 from "../../../assets/DotPattern2.png";
import img2 from "../../../assets/meeting-2.png";
import img3 from "../../../assets/Oval1.png";
import { Button } from "@material-tailwind/react";

const Meetings = () => {
  return (
    <section className="max-w-[1200px] mx-auto md:mt-[200px] mb-20 px-10 md:px-0">
      <div>
        <p className="text-[60px] text-bold max-w-[600px] text-[#1D293F] md:ml-24">
          Meet with clients anytime, anywhere.
        </p>
        <div className="md:flex justify-evenly items-center">
          <div className="relative mt-20">
            <Image src={img2} alt="" className="relative z-10 rounded-md" />
            <Image
              src={img1}
              alt=""
              className="absolute -bottom-10 -left-10 z-0 hidden md:block"
            />
            <Image
              src={img3}
              alt=""
              className="top-0 absolute opacity-70 z-10 rounded-md"
            />
          </div>
          <div className="max-w-[400px] leading-relaxed mt-10 md:mt-0">
            <p className="flex flex-col gap-1 text-bold text-[#1D293F]">
              <span>
                Computer users and programmers have become so accustomed to
                using Windows, even for the changing capabilities and the
                appearances of the graphical interface of the versions,
                therefore it has remained Microsoft’s product.
              </span>{" "}
              <br />
              <span className="">
                These companies release their own versions of the operating
                systems with minor changes, and yet always with the same bottom
                line.
              </span>{" "}
            </p>
            <Button
              variant="filled"
              size="lg"
              className="bg-[#258AFF] max-w-[300px] rounded-md py-5 mt-10"
            >
              Get Started For Free
            </Button>
            <p className="mt-10 text-sm text-[#7C8087] max-w-[350px]">
              “The following article covers a topic that has recently moved to
              center stage–at least it seems that way. If you’ve been thinking
              you need to know more about unconditional love, here’s your
              opportunity.”
            </p>
            <p className="mt-4 text-bold text-[#1D293F]">
              John Doe, Founder of Matrix
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetings;
