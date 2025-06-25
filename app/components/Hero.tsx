"use client";

import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";


interface HeroData {
  avatar_url: string;
}

interface HeroProps {
  data: HeroData;
}

const titles = [
  { text: "Desarrollador", color: "#F59E0B" },
  { text: "Programador", color: "#84CC16" },
  { text: "Autodidacta", color: "#10B981" },
];

export default function Hero({ data }: HeroProps) {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          {titles.map((title, index) => (
            <div key={index}>
              <RainbowHighlight color={title.color}>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                  {title.text}
                </h1>
              </RainbowHighlight>
              {index < titles.length - 1 && <br />}
            </div>
          ))}
        </RoughNotationGroup>
      </div>

      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <img 
            src={data.avatar_url} 
            alt="avatar" 
            className="shadow" 
            width={400}
            height={400}
            loading="eager"
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">Soy yo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 