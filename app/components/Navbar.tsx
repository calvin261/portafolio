"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface NavbarData {
  name: string;
  bio: string;
}

interface NavbarProps {
  data: NavbarData;
}

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
}

const NavLink = ({ href, label, currentPath }: NavLinkProps) => {
  const isActive = currentPath === href;
  
  return (
    <Link
      href={href}
      className={`text-base ${
        isActive
          ? "text-gray-800 font-bold dark:text-gray-400"
          : "text-gray-600 dark:text-gray-300 font-normal"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {isActive && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down inline-block h-3 w-3"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      )}
    </Link>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10 p-3 rounded focus:outline-none"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
        aria-hidden="true"
      >
        {theme === "dark" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    </button>
  );
};

export default function Navbar({ data }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="max-w-6xl mx-auto px-4 py-10 md:py-20" aria-label="Main navigation">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="font-semibold text-xl dark:text-gray-100">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {data.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {data.bio}
            </p>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          <NavLink href="/about" label="Sobre mi" currentPath={pathname} />
          <NavLink href="/experience" label="Experiencia" currentPath={pathname} />
          <NavLink href="/contact" label="Contacto" currentPath={pathname} />
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href="https://www.instagram.com/soyelcalvin/"
            className="text-base font-normal text-gray-600 dark:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram h-5 w-5"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="space-x-8 block md:hidden mt-4" role="navigation" aria-label="Mobile navigation">
        <NavLink href="/about" label="About" currentPath={pathname} />
        <NavLink href="/projects" label="Projects" currentPath={pathname} />
        <NavLink href="/experience" label="Experience" currentPath={pathname} />
        <NavLink href="/contact" label="Contact" currentPath={pathname} />
      </div>
    </nav>
  );
} 