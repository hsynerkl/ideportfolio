import Github from "components/pages/Github";
import Head from "next/head";
import { User } from "types/github";

export default function GithubPage({ data }: User) {
  return (
    <>
      <Head>
        <title>Hüseyin Erkal | Github</title>
      </Head>
      <Github data={data} />
    </>
  );
}

export async function getStaticProps(context: any) {
  let data;

  try {
    await fetch(`https://api.github.com/users/hsynerkl`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer${process.env.GITHUB_TOKEN}`,
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
