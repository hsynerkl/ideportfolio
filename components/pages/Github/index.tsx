import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";
import Image from "next/image";
import { FC } from "react";
import { User } from "types/github";

const Github: FC<User> = ({ data }) => {
  return (
    <>
      <section className="flex h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] flex flex-col justify-center sm:py-8 sm:px-8 p-4">
            <div className="flex flex-col max-w-xl h-full w-full ">
              <div className="h-fit w-fit rounded-full bg-white overflow-hidden">
                <Image
                  src={data?.avatar_url}
                  width={180}
                  height={180}
                  alt="avatar"
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
              <p className="text-sm text-white font-semibold">
                {data?.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Github;
