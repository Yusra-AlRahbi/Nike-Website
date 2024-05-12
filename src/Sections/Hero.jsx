import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState,useEffect} from "react";
//MOTION
import { motion } from "framer-motion";
import {textVariant,titleVariant,fadeIn} from "../variants"






const Hero = () => {

  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shoes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shoes.length]);

  useEffect(() => {
    setBigShoeImg(shoes[currentIndex].bigShoe);
  }, [currentIndex, shoes]);

  return (
   <motion.section 
   variants={fadeIn("up",0.2)}
   initial={'hidden'}
   whileInView={"show"}
   viewport={{once:false, amount:0.7}}
   id="home"
   className="flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
   >

    <div className="relative xl:w-2/5 flex 
     flex-col justify-center items-start w-full
     max-xl:padding-x pt-28">
      <motion.p
      variants={textVariant}
      initial="hidden" 
      animate="show"
      className="text-lx font-montserrat
      text-coral-red">Our Summer Collection</motion.p>
      <motion.h1
      variants={titleVariant}
         initial="hidden"
         animate="show"
       className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold  dark:text-slate-400 z-10'>
        <span className="xl:bg-white dark:xl:bg-slate-900 dark:text-slate-400 xl:whitespace-nowrap relative  pr-10">The New Arraival</span>
        <br/>
        <span className="text-coral-red inline-block mt-3">Nike</span>  Shoes
      </motion.h1>
      <motion.p 
      variants={textVariant}
       initial="hidden"
       animate="show"
       className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>
        <Button label="Shop Now"
        iconURL={arrowRight}/>
        <motion.div 
          variants={fadeIn("up",.3)}
          initial={'hidden'}
          whileInView={"show"}
          viewport={{once:false, amount:0.5}}
        className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=>(
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold dark:text-slate-400">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </motion.div>
    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
    max-xl:py-40  bg-primary bg-hero dark:bg-dark dark:bg-slate-800 bg-cover bg-center">
      <img
      src={bigShoeImg}
      alt="Shoe collection"
      width={610}
      height={500}
      className="object-contain relative z-1"
      />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe)=>
        (
          <motion.div 
          variants={fadeIn("left",.2)}
          initial={'hidden'}
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          key={shoe}
          >
            <ShoeCard 
             imgURL={shoe}
             cahangBigShoeImage={setBigShoeImg}
             bigShoeImg= {bigShoeImg}
             />
          </motion.div>
        ))}
      </div>
    </div>
   </motion.section>
    
  )
}

export default Hero