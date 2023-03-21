import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";
import Head from "next/head";

export default function LazyDeveloperPage() {
  return (
    <>
      <Head>
        <title>Hüseyin Erkal | Sorry</title>
      </Head>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] flex justify-center items-center px-4 sm:px-8">
            <p>Sorry the developer is too lazy to add images here</p>
          </div>
        </div>
      </section>
    </>
  );
}
