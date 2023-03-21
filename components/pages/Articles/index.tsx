import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";

const Articles = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] flex flex-col sm:p-8 p-4 text-white "></div>
        </div>
      </section>
    </>
  );
};

export default Articles;
