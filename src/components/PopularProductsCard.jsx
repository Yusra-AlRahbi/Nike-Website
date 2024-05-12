import { star } from "../assets/icons"
//MOTION
import { motion } from "framer-motion"
import { cards} from "../variants"

const PopularProductsCard = ({imgURL, name,price,i}) => {
  return (
    
    <motion.div 
    className="flex flex-1 flex-col w-full max-sm:w-full"
    variants={cards("left", i)}
    initial={'hidden'}
    whileInView={"show"}
    >
      
        <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5 ">
            <img
            src={star} 
            alt="rating"
            width={24}
            height={24}
            />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-slate-400">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </motion.div>
  )
}

export default PopularProductsCard