import { FC } from 'react';

const AboutMe: FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/calvin82020909',
      className: '-translate-x-24'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/calvin261',
      className: '-translate-x-24'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jefferson-jacome-5a58651aa/',
      className: '-translate-x-24'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/soyelcalvin/',
      className: '-translate-x-28'
    }
  ];

  const technologies = [
    { name: 'JavaScript', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' },
    { name: 'Java', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png' },
    { name: 'TypeScript', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png' },
    { name: 'HTML', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png' },
    { name: 'CSS', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png' },
    { name: 'Angular', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png' },
    { name: 'Vue', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png' },
    { name: 'Git', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png' },
    { name: 'React', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' },
    { name: 'Firebase', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png' },
    { name: 'MySQL', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png' },
    { name: 'MongoDB', src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png' }
  ];

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Sobre mi
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p className="leading-loose text-2xl md:text-4xl font-semibold mx-4" style={{ lineHeight: "3rem" }}>
            Soy un desarrollador de software que le encanta construir productos
            y aplicaciones web que implican la vida de millones de personas.
            Actualmente me encuentro trabajando para
            <a className="bg-red-500 rounded-md px-2 py-1 text-white">
              Pase Usted empresa mexicana.✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contacto
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Para cualquier consulta o duda contactame via{" "}
                <a
                  href="mailto:jeffesjacome@gmail.com"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail.
                </a>
              </p>
            </div>
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Redes Sociales
            </h1>
            <div className="mt-4 ml-4">
              {socialLinks.map((link) => (
                <div key={link.name} className="flex flex-row justify-start items-center">
                  <a href={link.url} className="flex flex-row items-center space-x-4 group">
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className={`absolute h-0.5 w-full bg-gray-400 bottom-0 transform ${link.className} group-hover:translate-x-0 transition duration-300`}></div>
                      {link.name}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              He estado desarrollando aplicaciones full-stack desde que tenía 16
              años. No sabía qué significaba full-stack en ese momento porque el
              término no se acuñó en ese entonces.
              <br />
              Después de aprender HTML y luchar con CSS, se me ocurrió una idea
              brillante de usar bootstrap para no tener que diseñar todo yo solo
              y, si conocías bootstrap, estabas genial. <br />
              He estado codificando en React, React Native, Angular, Node.js,
              Express, MongoDB, MySQL, Bootstrap, Tailwind, Java, PHP y otros
              lenguajes de programación. Por nombrar algunos.
              <br /> <br /> Aunque apenas conozco la sintaxis (Psst, Stack
              overflow!), Me considero un desarrollador con mucha experiencia.
            </p>

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tecnologías que manejo
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              {technologies.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.src}
                  alt={tech.name}
                  className="h-20 w-20 mx-4 my-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
