import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";

const About = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] flex flex-col py-4 sm:pb-28 px-4 sm:px-8 text-white font-medium text-lg">
            <div className="max-w-xl text-[10px] sm:text-sm">
              <span className="text-white text-opacity-20 pr-4">1</span>{" "}
              <span className="text-[#f9826c]">
                const <span className="text-yellow-300">mockAbout </span> =
                &apos;
              </span>
              <br></br>
              <span className="text-white text-opacity-20 pr-4">2</span>{" "}
              <span className="sm:pl-4 pl-1">
                I&apos;m a front-end developer building scalable,{" "}
              </span>
              <br></br>
              <span className="text-white text-opacity-20 pr-4">3</span>{" "}
              <span className="sm:pl-4 pl-1">
                cross-browser compatible, performant,
              </span>
              <br></br>
              <span className="text-white text-opacity-20 pr-4">4</span>{" "}
              <span className="sm:pl-4 pl-1">
                {" "}
                and responsive websites located in İstanbul.
              </span>
              <br></br>
              <span className="text-white text-opacity-20 pr-4">5</span>{" "}
              <span className="text-[#f9826c]"> &apos;</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
