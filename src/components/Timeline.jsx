const EXPERIENCES = [
    {
      year: "2024.5 - 2024.8",
      role: "ML Engineering Intern",
      company: "Vosyn",
      description: `Testing, training and resolving program bugs on TTS models, realigning output translations with video, wrote a code script that runs UVR denoiser model through TTS output audio files that separates voice and background noise using api. 
      Data QA, preprocessing and pipelining for TTS model training such as setting up input output streams, assuring metadata files, preparing sample datasets and revising necessary files for model input suitability. 
      Fine-tuned XTTS-v2 model for Spanish and French, allowing it to transform texts into synthetic human voices by feeding datasets, modifying epochs, optimizer and split size corresponding to the size of datasets.
`,
      technologies: ["Python", "Audacity","Bash", "Tensorflow", "PyTorch"],
    },
    {
        year: "2023.5 - 2022.8",
        role: "Waterpark Lifeguard",
        company: "Fallsview Waterpark",
        description: `Worked in summer after finishing 2nd year during off term.
                        Did manual water slide testing before the opening inspecting possible dangers.
  `,
        technologies: ["CPR"],
    },
    {
      year: "2022.4 - 2022.7",
      role: "Highschool Private Math Tutor",
      company: "Freelancing",
      description: `Professionalized communication and tutoring skills assisting student’s high school math concepts based on firm calculus knowledge. 
      Provided clear and constructive feedback to the student during each tutorial session highlighting their strengths and the areas of improvement, 
      resulting in over twenty percent rise in the student’s mark in class.
`,
      technologies: ["Advanced Functions"],
    },
    {
        year: "2022.4 - 2022.6",
        role: "Waterpark Lifeguard",
        company: "Fallsview Waterpark",
        description: `Worked in summer after finishing first year university.
                        Saved a couple children and weak swimmers from the deep end of wave pool. Filled out incident reports for possible future legal disputions.
  `,
        technologies: ["CPR"],
      },
    {
        year: "2021.9",
        role: "Started University of Waterloo",
        company: "",
        description: `Bachelors of Honours Mathematics
  `,
        technologies: [],
      },
    {
        year: "2021.6",
        role: "Graduated AN Myer Secondary School",
        company: "",
        description: `
  `,
        technologies: [],
      },
];


import { motion } from 'framer-motion';



const container = (delay) => ({
    hidden: { x : -100 , opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay},
    },
});



const Timeline = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 relative">
            <hr></hr>
            <h1 className="my-20 text-center text-4xl">Experience Timeline</h1>
            <div className="relative p-9">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-r-2 border-neutral-300"></div>
                
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className={`mb-8 flex flex-wrap lg:justify-center items-center relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 relative">
                            <motion.div
                            variants={container(1)}
                            whileInView={{opacity:1, x:0}}
                            initial={{x:-50, opacity:0}}
                            animate={{ x: -100, opacity: 1 }} 
                            className={`absolute ${index % 2 === 0 ? 'right-4' : 'left-4'} transform -translate-y-2`}>
                                <p className="mb-2 text-sm text-neutral-100">{experience.year}</p>
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:px-8 relative">
                            <motion.div 
                            variants={container(3)}
                            whileInView={{ opacity:1, x:0 }}
                            initial={{x:-100, opacity:0}}
                            animate={{ x: -30, opacity: 1 }} 
                            className="bg-neutral-800 p-6 rounded-lg shadow-lg">
                                <h2 className="text-lg font-bold">{experience.role}</h2>
                                <p className="text-md">{experience.company}</p>
                                <p className="text-sm">{experience.description}</p>
                                <div className="flex flex-wrap mt-4">
                                    {experience.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                            {/* Circle indicator */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-neutral-900 rounded-full border-2 border-neutral-100"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;

