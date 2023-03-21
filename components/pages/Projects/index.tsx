import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";
import Image from "next/image";
import Lexica from "assets/images/lexica.png";
import Portfolyo from "assets/images/portfolyo.png";

const Projects = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] flex flex-col text-xl p-4 sm:pt-8 sm:px-8 text-white font-medium">
            <p className="mono">Some of what i&apos;ve done so far</p>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-4 gap-10 overflow-auto pb-8">
              <div className="bg-[#1f2428] rounded-lg">
                <div className="aspect-h-1 aspect-w-2">
                  <Image src={Lexica} alt="cardimg" fill />
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-black">Lexica</h3>
                  <p className="text-sm py-2">Clone Project</p>
                  <div className="flex gap-2 py-2 justify-center">
                    <p className="text-xs px-4 py-2 rounded-full border hover:bg-blue-600 hover:bg-opacity-30 text-center border-blue-600">
                      Typescript
                    </p>
                    <p className="text-xs px-4 py-2 rounded-full border hover:bg-red-600 hover:bg-opacity-30 text-center border-red-600">
                      Next.js
                    </p>
                    <p className="text-xs px-4 py-2 rounded-full border hover:bg-cyan-300 hover:bg-opacity-30 text-center border-cyan-300">
                      Tailwind
                    </p>
                  </div>
                  <div className="flex justify-center gap-10 pt-2">
                    <a
                      href="https://github.com/hsynerkl/lexica"
                      target="_blank"
                      className="text-sm hover:underline hover:text-[#f9826c]"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://lexica-seven.vercel.app/"
                      target="_blank"
                      className="text-sm hover:underline hover:text-[#f9826c]"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#1f2428] rounded-lg">
                <div className="aspect-h-1 aspect-w-2">
                  <Image src={Portfolyo} alt="cardimg" fill />
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-black">Portfolio</h3>
                  <p className="text-sm py-2">My Portfolio</p>
                  <div className="flex gap-2 py-2 justify-center">
                    <p className="text-xs px-4 py-2 rounded-full border hover:bg-blue-600 hover:bg-opacity-30 text-center border-blue-600">
                      Typescript
                    </p>
                    <p className="text-xs px-4 py-2 rounded-full border hover:bg-red-600 hover:bg-opacity-30 text-center border-red-600">
                      Next.js
                    </p>
                    <p className="text-xs px-4 py-2 rounded-full border hover:bg-cyan-300 hover:bg-opacity-30 text-center border-cyan-300">
                      Tailwind
                    </p>
                  </div>
                  <div className="flex justify-center gap-10 pt-2">
                    <a
                      href="https://github.com/hsynerkl/myportfolio"
                      target="_blank"
                      className="text-sm hover:underline hover:text-[#f9826c]"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://hsynerkl.vercel.app/"
                      target="_blank"
                      className="text-sm hover:underline hover:text-[#f9826c]"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
