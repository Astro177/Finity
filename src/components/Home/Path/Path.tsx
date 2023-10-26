import Image from "next/image";
import img1 from "../../../assets/How.png";
const Path = () => {
  return (
    <section className="md:mt-60 mb-32 flex justify-center">
      <Image src={img1} alt="" />
    </section>
  );
};

export default Path;
