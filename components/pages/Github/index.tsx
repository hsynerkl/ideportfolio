import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";
import Image from "next/image";
import { FC } from "react";
import GitHubCalendar from "react-github-calendar";
import { User } from "types/github";

const Github: FC<User> = ({ data }) => {
  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full bg-[#24292e] sm:py-8 sm:px-8 p-4">
            <div className="flex flex-col max-w-xl w-fit ">
              <div className="h-fit w-fit rounded-full bg-white overflow-hidden">
                <Image
                  src={data?.avatar_url}
                  width={180}
                  height={180}
                  alt="avatar"
                  priority
                />
              </div>
              <p className="font-semibold text-white text-xl mt-4">
                {data?.name}
              </p>
              <p className="text-white text-opacity-90 font-medium text-sm">
                {data?.login}
              </p>
              <p className="my-4 text-white text-lg font-semibold">
                {data?.bio}
              </p>
              <div className="flex gap-3 text-white text-sm font-semibold">
                <p>
                  {" "}
                  <span className="text-[#f9826c] mr-[2px]">
                    {data?.followers}
                  </span>{" "}
                  Followers
                </p>
                <p>
                  <span className="text-[#f9826c] mr-[2px]">
                    {data?.following}
                  </span>{" "}
                  Following
                </p>
              </div>
              <p className="text-sm text-white font-semibold">
                {data?.company}
              </p>
              <p className="text-sm text-white font-semibold mb-3">
                {data?.location}
              </p>
              <GitHubCalendar
                username="hsynerkl"
                hideColorLegend
                hideMonthLabels
                hideTotalCount
              />
              <a
                href="https://github.com/hsynerkl"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#f9826c] w-fit my-4 text-white rounded-sm hover:opacity-75 transition-opacity duration-150 shadow-sm"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Github;
