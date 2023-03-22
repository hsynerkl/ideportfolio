import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";

const About = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] flex flex-col py-4 sm:pb-28 px-4 sm:px-8 font-medium text-lg overflow-y-auto">
            <div className="max-w-xl text-[10px] sm:text-sm text-[#f9826c]">
              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">1</span>{" "}
                <p> {"<!DOCTYPE html>"} </p>
              </div>
              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">2</span>{" "}
                <p>{'<html lang="en">'} </p>
              </div>
              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">3</span>{" "}
                <p className="ml-3">{"<head>"}</p>
              </div>
              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">4</span>{" "}
                <p className="ml-5"> {'<meta charset="UTF-8" />'}</p>
              </div>

              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">5</span>{" "}
                <p className="ml-5"> {'<meta charset="UTF-8" />'}</p>
              </div>

              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">6</span>{" "}
                <p className="ml-5">
                  {' <meta http-equiv="X-UA-Compatible" content="IE=edge" />'}{" "}
                </p>
              </div>

              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">7</span>{" "}
                <p className="ml-5">{" <meta"} </p>
              </div>

              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">8</span>{" "}
                <p className="ml-7"> {'name="viewport"'} </p>
              </div>

              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">9</span>{" "}
                <p className="ml-7">
                  {" "}
                  {'content="width=device-width, initial-scale=1.0"'}
                </p>
              </div>

              <div className="flex">
                <span className="mr-3 text-white text-opacity-30">10</span>{" "}
                <p className="ml-5"> {"/>"} </p>
              </div>

              <div className="flex">
                <span className="mr-1 text-white text-opacity-30">11</span>{" "}
                <p className="ml-5">
                  <span>{"<title>"}</span>{" "}
                  <span className="text-white">About</span>{" "}
                  <span>{"</title>"}</span>
                </p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">12</span>{" "}
                <p className="ml-3"> {"</head>"}</p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">13</span>{" "}
                <p className="ml-3">{"<body>"}</p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">14</span>{" "}
                <p className="ml-5">{"<p>"}</p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">15</span>{" "}
                <p className="ml-7 text-white">
                  {" "}
                  I&apos;m a front-end developer building scalable,
                  cross-browser compatible,
                </p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">16</span>{" "}
                <p className="ml-7 text-white">
                  performant, and responsive websites located in istanbul.{" "}
                </p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">17</span>{" "}
                <p className="ml-5">{"</p>"}</p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">18</span>{" "}
                <p className="ml-3">{"</body>"}</p>
              </div>

              <div className="flex">
                <span className="mr-2 text-white text-opacity-30">19</span>{" "}
                <p> {"</html>"} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
