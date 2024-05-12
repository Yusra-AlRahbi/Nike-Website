import Button from "../components/Button";
//MOTION
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Subscribe = () => {
  return (
    <section
      className=" max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us">
      <motion.h3
        variants={fadeIn("left", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-4xl dark:text-slate-400 leading-[68px] lg:max-w-md font-palanquin font-bold] ">
        Sing Up from
        <span className="text-coral-red"> Updates</span> & Newsletter
      </motion.h3>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input dark:bg-slate-900"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sing up" fullWidth />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
