import Explorer from "components/common/explorer";
import Topbar from "components/common/topbar";

const Chat = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-54.5px)] sm:h-[calc(100vh-56.5px)]">
        <Explorer />
        <div className="flex w-full flex-col">
          <Topbar />
          <div className="h-full w-full bg-[#24292e] mono text-2xl flex justify-center items-center px-4 sm:px-8 text-white text-opacity-70">
            <p> the under construction</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
