import { motion } from "framer-motion";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`flex justify-center
    items-center gap-2 px-7 py-4 border font-montserrat 
    text-lg leading-none
    ${
      //  إذا كان عندنا مواصفات مختلفة للبوتون
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}"}`}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow right icon "
          className="m1-2 rounded-full
       w-5 h-5"
        />
      )}
    </motion.button>
  );
};

export default Button;
