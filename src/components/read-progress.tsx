import { motion, useScroll, useSpring } from "framer-motion";
export const ReadProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  return (
    <motion.div style={{ transformOrigin: "0% 50%", scaleX }} className="fixed w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500 z-50" />  
  )
}