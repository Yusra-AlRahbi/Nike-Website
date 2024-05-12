import { offer } from "../assets/images";
import Button from "../components/Button";
//MOTION
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt="Shoe Promotion"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl dark:text-slate-400 capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus aliquid, asperiores laudantium, accusamus quisquam unde
          mollitia voluptatum minima et tenetur non dicta facere deserunt sit,
          quas voluptates inventore pariatur quo.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi.
        </p>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-11 flex flex-wrap gap-4 ">
          <Button label="View details" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
