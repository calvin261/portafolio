import { ExperienceCardProps } from "../types/experience";
import { Experience as ExperienceType } from "../types/experience";

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { title, desc, year, company, companyLink } = experience;

  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a
        href={companyLink}
        className="text-gray-500"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${company} website`}
      >
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};

const Divider = () => (
  <div className="divider-container flex flex-col items-center -mt-2">
    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
      <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
    </div>
    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
  </div>
);

export default function Experience() {
  const experiences: ExperienceType[] = [
    {
      title: "Desarrollador Web",
      desc: "Desarrollo de aplicaciones web con React, Next.js y TypeScript",
      year: "2021 - Presente",
      company: "Freelance",
      companyLink: "https://github.com/calvin261",
    },
    // Add more experiences as needed
  ];

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {experiences.map((exp: ExperienceType, idx: number) => (
            <div key={exp.title}>
              <ExperienceCard experience={exp} />
              {idx !== experiences.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 