import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="my-20 p-10 bg-gray-100 text-center rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
