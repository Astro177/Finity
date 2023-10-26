import Image from "next/image";
import img1 from "../../../assets/DotPattern2.png";
import img2 from "../../../assets/Bitmap.png";
import img3 from "../../../assets/Group11.png";
import img4 from "../../../assets/Group12.png";
const Featuring = () => {
  return (
    <section className="mb-28">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-4xl md:text-[60px] text-bold max-w-[600px] text-center mx-auto">
          Control everything in a single place.
        </p>
        <div className="mt-32 relative">
          <Image src={img1} alt="" />
          <Image
            src={img2}
            alt=""
            className="absolute left-7 top-10 w-[500px] md:w-[850px]"
          />
          <Image
            src={img3}
            alt=""
            className="absolute md:-right-16 top-[150px]"
          />
          <Image
            src={img4}
            alt=""
            className="absolute md:-left-2 top-[230px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Featuring;
