interface Project {
  title: string;
  link: string;
  imgUrl: string;
  number: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, link, imgUrl, number } = project;
  const formattedNumber = number.length === 1 ? `0${number}` : number;

  return (
    <a 
      href={link} 
      className="w-full block shadow-2xl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} project`}
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt={`${title} project screenshot`}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            loading="lazy"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {formattedNumber}
        </h1>
      </div>
    </a>
  );
};

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* {userData.projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={{
                ...project,
                number: `${idx + 1}`,
              }}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
} 