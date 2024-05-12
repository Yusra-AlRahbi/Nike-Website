import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
//MOTION
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <motion.h3
        variants={fadeIn("up", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" font-palanquin text-center text-4xl dark:text-slate-400 font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </motion.h3>
      <motion.p
        variants={fadeIn("down", 0.4)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        necessitatibus
      </motion.p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, i) => (
          <ReviewCard
            key={review.customerName}
            i={i * 0.5}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
