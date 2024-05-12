import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
//MOTION
import { motion } from "framer-motion"
import { fadeIn } from "../variants"


const SuperQuality = () => {
  return (
    <section 
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div
      variants={fadeIn("right",0.2)}
      initial={'hidden'}
      whileInView={"show"}
      viewport={{once:false, amount:0.7}} 
      className="flex flex-1 flex-col">
      <h2 className='font-palanquin text-4xl dark:text-slate-400 capitalize font-bold lg:max-w-lg'>
        We Provide you 
        <span className="text-coral-red"> Super</span> 
        <span className="text-coral-red"> Quality</span>  Shoes
      </h2>
      <motion.p 
      variants={fadeIn("left",0.6)}
      initial={'hidden'}
      whileInView={"show"}
      viewport={{once:false, amount:0.7}} 
      className='mt-4 lg:max-w-lg info-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid, asperiores laudantium, accusamus quisquam unde mollitia voluptatum minima et tenetur non dicta facere deserunt sit, quas voluptates inventore pariatur quo.
        </motion.p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi.</p>
        <div className="mt-11">
          <Button label="Shop Now"
          iconURL={arrowRight}/>
        </div>
      </motion.div>
      <motion.div 
      variants={fadeIn("up",.8)}
      initial={'hidden'}
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      className="flex-1 flex justify-center items-center">
        <img 
         src={shoe8}
         width={570}
         height={522}
         className="object-contain"
        />
      </motion.div>

    </section>
  )
}

export default SuperQuality