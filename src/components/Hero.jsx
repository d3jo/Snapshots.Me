import { motion } from 'framer-motion';


const MY_INTRODUCTION = `Hey! I am a student at the University of Waterloo currently studying Statistics and Data Science closely aligning to my passionate field.`;



const container = (delay) => ({
    hidden: { x : -100 , opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay},
    },
});


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={container(0)}
                        initial={{x:-100, opacity:0}}
                        animate={{ x: 0, opacity: 1 }} className="font-thin pb-16 tracking-tight lg:mt-16 lg:text-7xl">
                            Ajun Jo
                        </motion.h1>
                        <motion.span 
                        variants={container(0.3)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-400
                        to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent">Data Science Intern</motion.span>
                        <motion.p 
                        variants={container(0.8)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl text-xl py-6 fontlig tracking-tighter">{MY_INTRODUCTION}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

<motion.div animate={{ x: 100 }} />