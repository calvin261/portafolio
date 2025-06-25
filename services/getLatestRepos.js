import axios from "axios";

const getLatestRepos = async (usern, token) => {

  try {
    const username = usern;


    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = res.items;
      let latestSixRepos = repos.splice(0, 6);
      console.log("LATEST 6 repos", latestSixRepos);
      return latestSixRepos;
    } else {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      );
      let repos = res.items;
      let latestSixRepos = repos.splice(0, 6);

      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
