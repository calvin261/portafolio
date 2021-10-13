import Contact from "../src/components/Contact";
import ContainerBlock from "../src/components/ContainerBlock";

export default function contact({ data }) {
  return (
    <ContainerBlock
      title="Jefferson Jacome - Desarrollador Web"
      description="Tengo experiencia por alrededor de 3 años"
      data={data}
    >
      <Contact />
    </ContainerBlock>
  );
}
export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/calvin261`);
  const data = await res.json();
  // const data = {
  //   avatar_url: "https://avatars.githubusercontent.com/u/63080590?v=4",
  //   bio: "Backend Developer || PHP || NodeJS || React || Angular",
  //   blog: "",
  //   company: null,
  //   created_at: "2020-04-03T00:19:39Z",
  //   email: null,
  //   events_url: "https://api.github.com/users/calvin261/events{/privacy}",
  //   followers: 0,
  //   followers_url: "https://api.github.com/users/calvin261/followers",
  //   following: 0,
  //   following_url:
  //     "https://api.github.com/users/calvin261/following{/other_user}",
  //   gists_url: "https://api.github.com/users/calvin261/gists{/gist_id}",
  //   gravatar_id: "",
  //   hireable: null,
  //   html_url: "https://github.com/calvin261",
  //   id: 63080590,
  //   location: "Ecuador",
  //   login: "calvin261",
  //   name: "Jefferson Jacome",
  //   node_id: "MDQ6VXNlcjYzMDgwNTkw",
  //   organizations_url: "https://api.github.com/users/calvin261/orgs",
  //   public_gists: 0,
  //   public_repos: 10,
  //   received_events_url:
  //     "https://api.github.com/users/calvin261/received_events",
  //   repos_url: "https://api.github.com/users/calvin261/repos",
  //   site_admin: false,
  //   starred_url:
  //     "https://api.github.com/users/calvin261/starred{/owner}{/repo}",
  //   subscriptions_url: "https://api.github.com/users/calvin261/subscriptions",
  //   twitter_username: null,
  //   type: "User",
  //   updated_at: "2021-09-14T15:49:51Z",
  //   url: "https://api.github.com/users/calvin261",
  // };

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
