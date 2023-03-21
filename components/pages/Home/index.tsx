import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";
import { useTabs } from "context/Tabs";
import Link from "next/link";

const Home = () => {
  const { handleAddTab } = useTabs();

  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] sm:flex pt-[calc(45vh-95px)] sm:pt-0 sm:pb-28 items-center px-4 sm:px-8">
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
                <Link
                  href="projects"
                  className="bg-[#f9826c] px-4 hover:opacity-75 transition-all duration-150 font-semibold py-2"
                  onClick={() => {
                    handleAddTab({
                      name: "projects",
                      title: "projects.js",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path
                            d="m3 3h18v18h-18v-18m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7v5.74c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"
                            fill="#ffca28"
                          />
                        </svg>
                      ),
                    });
                  }}
                >
                  View Work
                </Link>
                <Link
                  href="contact"
                  className="border-[#f9826c] border px-4 hover:opacity-75 transition-all duration-150 font-semibold py-2"
                  onClick={() => {
                    handleAddTab({
                      name: "contact",
                      title: "contact.css",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path
                            d="m5 3l-.65 3.34h13.59l-.44 2.16h-13.58l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64h-3.34l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21 1.54-7.76h-16.94z"
                            fill="#42a5f5"
                          />
                        </svg>
                      ),
                    });
                  }}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
