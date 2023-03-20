import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";

const HomeComponent = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] sm:flex pt-[calc(45vh-95px)] sm:pt-0 sm:pb-28 items-center px-8">
            <div className="gap-10 relative flex flex-col text-white text-opacity-10 font-black text-4xl sm:text-9xl select-none">
              <div className="whitespace-nowrap relative">
                <h2>I BUILD</h2>
                <div className="absolute -bottom-6 sm:-bottom-8 text-white text-opacity-90 text-xl sm:text-5xl font-black">
                  <p>
                    Hüseyin <span className="ml-1">ERKAL</span>
                  </p>
                </div>
              </div>
              <div className="relative whitespace-nowrap">
                <h2>WEB SITES</h2>
                <div className="absolute -top-4 sm:-top-2 text-white text-opacity-90 text-sm sm:text-xl font-normal">
                  <div className="flex gap-2">
                    <p className="typewriter">Front End Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 flex gap-5 text-sm sm:text-lg text-white">
                <button className="bg-[#f9826c] px-4 hover:shadow-2xl hover:opacity-90 transition-all duration-150 font-semibold py-2">
                  View Work
                </button>
                <button className="border-[#f9826c] border px-4 hover:shadow-2xl hover:opacity-90 transition-all duration-150 font-semibold py-2">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
