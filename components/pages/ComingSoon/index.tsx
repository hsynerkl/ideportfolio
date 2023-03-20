import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";

const ComingSoon = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full mono w-full bg-[#24292e] flex flex-col justify-center items-center text-6xl py-8 sm:pb-28 px-8 text-white font-medium text-opacity-60 ">
            Coming Soon...
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
