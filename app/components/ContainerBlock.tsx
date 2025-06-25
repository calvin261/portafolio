"use client";

import { usePathname } from "next/navigation";

import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface NavbarData {
  name: string;
  bio: string;
}

interface MetaData {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  data: NavbarData;
}

interface ContainerBlockProps {
  children: ReactNode;
  customMeta?: Partial<MetaData>;
}

const defaultMeta: MetaData = {
  title: "Jefferson Jacome - Desarrollador Web",
  description: "Tengo experiencia por alrededor de 3 años",
  image: "/avatar.png",
  type: "website",
  data: {
    name: "Jefferson Jacome",
    bio: "Desarrollador Web",
  },
};

export default function ContainerBlock({ children, customMeta = {} }: ContainerBlockProps) {
  const pathname = usePathname();
  const meta: MetaData = {
    ...defaultMeta,
    ...customMeta,
    data: customMeta.data || defaultMeta.data,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${pathname}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${pathname}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jefferson Jacome | Portafolio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@calvin82020909" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar data={meta.data} />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
} 