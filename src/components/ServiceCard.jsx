//MOTION
import { motion } from "framer-motion";
import { cards } from "../variants";

const ServiceCard = ({ imgURL, label, subtext, i }) => {
  return (
    <motion.div
      variants={cards("right", i)}
      initial={"hidden"}
      whileInView={"show"}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl dark:shadow-slate-600 px-10 py-16 ">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl dark:text-slate-400 leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
