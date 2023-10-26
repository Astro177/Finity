import Image from "next/image";
import img1 from "../../../assets/Group7.png";
import img2 from "../../../assets/Group72.png";
import img3 from "../../../assets/5da9ab5f05222.png";
import img4 from "../../../assets/DotPattern11.png";
import img5 from "../../../assets/Oval.png";

const Growing = () => {
  return (
    <section className="bg-[#F7F7F7] mt-[350px] md:mt-[500px] mb-20">
      <div className="max-w-[1200px] mx-auto pt-[200px] pb-6 md:flex justify-around items-center">
        <div className="">
          <p className="text-[60px] text-bold w-[450px] text-[#1D293F]">
            Grow Your Business Fast.
          </p>
          <div className="max-w-[400px] mt-20">
            <div className="flex gap-8">
              <Image src={img2} alt="" />
              <div>
                <p className="text-bold text-xl mb-3 text-[#1D293F]">
                  Find Better Leads
                </p>
                <p className="text-[#1D293F] text-sm">
                  We receive over 50 new job submission at our website.
                </p>
              </div>
            </div>
            <div className="flex gap-8 mt-12">
              <Image src={img1} alt="" />
              <div>
                <p className="text-bold text-xl mb-3 text-[#1D293F]">
                  Set instant meeting
                </p>
                <p className="text-[#1D293F] text-sm">
                  We receive over 50 new job submission at our website.
                </p>
              </div>
            </div>
            <div className="flex gap-8 mt-12">
              <Image src={img2} alt="" />
              <div>
                <p className="text-bold text-xl mb-3 text-[#1D293F]">
                  Get paid seamlessly
                </p>
                <p className="text-[#1D293F] text-sm">
                  We receive over 50 new job submission at our website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={img3} alt="" />
          <Image src={img4} alt="" className="absolute -top-12 -left-20" />
          <Image
            src={img5}
            alt=""
            className="absolute top-0 right-0 opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export default Growing;
