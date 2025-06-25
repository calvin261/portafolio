"use client";

interface SocialLink {
  href: string;
  label: string;
  icon: string;
  viewBox: string;
  path: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/calvin261",
    label: "GitHub profile",
    icon: "bi bi-github h-5 w-5",
    viewBox: "0 0 16 16",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p className="inline-block">
              Desarrollado por{" "}
              <span className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-red-500 rounded-md px-2 py-1 hover:text-gray-50"
                  href="#"
                  aria-label="Jefferson Jacome's portfolio"
                >
                  Jefferson Jacome
                </a>
              </span>
            </p>
          </div>

          <div className="space-x-4 flex flex-row items-center">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-normal text-gray-600 dark:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={link.icon}
                  viewBox={link.viewBox}
                  aria-hidden="true"
                >
                  <path d={link.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 