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
      technologies: ["Matplotlib"],
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
        technologies: ["PyTorch"],
      },
  ];
  

const Projects = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w">
              <hr className="my-5"></hr>
                <hr className="my-5 border-neutral-700" />
                <h1 className="my-20 text-center text-4xl">Project Gallery</h1>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 text-center max-w-2xl mx-auto">
                        <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <div className="flex justify-center flex-wrap">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
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

