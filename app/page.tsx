"use server"

import { unstable_cache } from 'next/cache';
import { GitHubSearchResponse, GitHubUser } from './types';
import { GitHubRepository } from './types';
import ContainerBlock from './components/ContainerBlock';
import Hero from './components/Hero';
import LatestCode from './components/LatestCode';

const getData = unstable_cache(
  async (): Promise<GitHubUser> => {
    const res = await fetch(`https://api.github.com/users/calvin261`);
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    return res.json();
  },
  ['user-data'],
  { revalidate: 3600 }
);

const getRepositories = unstable_cache(
  async (): Promise<GitHubRepository[]> => {
    const res = await fetch('https://api.github.com/search/repositories?q=user:calvin261+sort:author-date-asc');
    if (!res.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data: GitHubSearchResponse = await res.json();
    return data.items.slice(0, 6);
  },
  ['repositories'],
  { revalidate: 3600 }
);

export default async function Home() {
  const data = await getData();
  const repositories = await getRepositories();

  return (
    <ContainerBlock
    customMeta={{
      title: "Jefferson Jacome - Desarrollador Web",
      description: "Tengo experiencia por alrededor de 3 años",
      data: data
    }}
    >
      <Hero data={data} />
      <LatestCode repositories={repositories.map(repo => ({
        name: repo.name,
        description: repo.description,
        clone_url: repo.html_url
      }))} />
    </ContainerBlock>
  );
} 