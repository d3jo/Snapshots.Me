const PROJECTS = [
    {
        title: "Snapshots.Me",
        description:
          "A personal portfolio website showcasing projects, skills, and introducing myself.",
        technologies: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      title: "CNN Dog Breed Classifier",
      description:
        "A Convolutional Neural Network model that has been trained by hours of deep learning on the dog images of different breeds and classifies them with more than 95 percent accuracy",
      technologies: ["Tensorflow", "Matplotlib", "OpenCV"],
    },
    {
      title: "Personal Finance Analysis",
      description:
        "An analysis program that helps users to manage and gain an overview of their spending trends.",
      technologies: ["Matplotlib", "Python"],
    },
    {
      title: "OOP Chess Game in C++",
      description:
        "An interactive chess game for humans and computer players of different levels of computer algorithms.",
      technologies: ["C++", "Linux"],
    },
    {
        title: "TTS Model Denoiser",
        company: "Vosyn",
        description:
          "A script that runs through .wav files and separates voices and background music and sounds into the output folder. My code was contributed in my company on a production level for our TTS model finetuning. It takes the translated output .wav files and outputs a better quality of voices by removing distracting noises.",
        technologies: ["PyTorch", "Python"],
      },
  ];
  
import { motion } from 'framer-motion';


const Projects = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w">
              <hr className="my-5"></hr>
                <h1 className="my-20 text-center text-5xl">Project Gallery</h1>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 text-center max-w-2xl mx-auto">
                      <div className="text-2xl font-bold text-center max-w-2xl mx-auto mb-4 text-transparent bg-gradient-to-r from-red-500 via-slate-400 to-purple-500 bg-clip-text ">
                            {project.title}
                      </div>
                        
                        <p className="mb-4 text-slate-300">{project.description}</p>
                        <div className="flex justify-center flex-wrap">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-2 rounded-2xl bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
