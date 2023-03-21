import Github from "components/pages/Github";
import Head from "next/head";
import { FC } from "react";
import { User } from "types/github";

const GithubPage: FC<User> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Hüseyin Erkal | Github</title>
      </Head>
      <Github data={data} />
    </>
  );
};

export async function getStaticProps(context: any) {
  let data;

  try {
    await fetch(`https://api.github.com/users/hsynerkl`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        data = res;
      });
  } catch (e) {
    console.log(e);
  }

  return {
    props: { data },
  };
}

export default Github;
