import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";

const Contact = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] flex flex-col sm:py-8 sm:pb-28 p-4 sm:px-8 text-white font-medium text-lg">
            <div className="max-w-xl text-[10px] sm:text-sm">
              <span className="text-white text-opacity-20 pr-4">1</span>{" "}
              <span className="text-[#f9826c]">
                const <span className="text-yellow-300">socials </span> = {"{"}
              </span>
              <br></br>
              <span className="text-white text-opacity-20 pr-4">2</span>{" "}
              <span className="sm:pl-4 pl-1">github: </span>{" "}
              <a
                href="https://github.com/hsynerkl"
                target="_blank"
                className="text-yellow-300 hover:underline"
              >
                value
              </a>
              ,<br></br>
              <span className="text-white text-opacity-20 pr-4">3</span>{" "}
              <span className="sm:pl-4 pl-1">linkedin: </span>{" "}
              <a
                href="https://www.linkedin.com/in/huseyinerkal/"
                target="_blank"
                className="text-yellow-300 hover:underline"
              >
                value
              </a>
              ,<br></br>
              <span className="text-white text-opacity-20 pr-4">4</span>{" "}
              <span className="sm:pl-4 pl-1">email: </span>{" "}
              <a
                href="mailto:hsynerkl34@gmail.com"
                target="_blank"
                className="text-yellow-300 hover:underline"
              >
                value
              </a>
              ,<br></br>
              <span className="text-white text-opacity-20 pr-4">4</span>{" "}
              <span className="sm:pl-4 pl-1">codewars: </span>{" "}
              <a
                href="https://www.codewars.com/users/hsynerkl"
                target="_blank"
                className="text-yellow-300 hover:underline"
              >
                value
              </a>
              ,<br></br>
              <span className="text-white text-opacity-20 pr-4">5</span>{" "}
              <span className="text-[#f9826c]"> {"}"}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
