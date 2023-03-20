import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hüseyin Erkal | Home</title>
      </Head>
      <section className="flex h-[calc(100vh-56.5px)]">
        <Explorer />
        <Topbar />
      </section>
    </>
  );
}
