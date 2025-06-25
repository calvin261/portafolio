import { unstable_cache } from 'next/cache';
import { GitHubUser } from '@/app/types';

import ContainerBlock from '@/components/ContainerBlock';
import AboutMe from '@/app/components/AboutMe';

const getGitHubData = unstable_cache(
  async (): Promise<GitHubUser> => {
    const res = await fetch(`https://api.github.com/users/calvin261`);
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    return res.json();
  },
  ['github-user-data'],
  { revalidate: 3600 }
);

export default async function About() {
  const data = await getGitHubData();

  return (
    <ContainerBlock
      customMeta={{
        title: "Jefferson Jacome - Desarrollador Web",
        description: "Tengo experiencia por alrededor de 3 años",
        data: data
      }}
    >
      <AboutMe />
    </ContainerBlock>
  );
} 