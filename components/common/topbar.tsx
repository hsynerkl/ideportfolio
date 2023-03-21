import { useTabs } from "context/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";

const Topbar = () => {
  const { tabs, handleRemoveTab } = useTabs();
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="w-full overflow-x-scroll overflow-y-hidden h-fit bg-[#1f2428] text-white text-[13px] flex">
      <ul className="flex text-xs font-medium">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={`flex gap-2 border-t-2 border-transparent items-center hover:bg-[#24292e] ${
              (pathname === "/" + tab.name ||
                (pathname === "/" && tab.name === "home")) &&
              "bg-[#24292e] border-t-[#f9826c]"
            }`}
          >
            <Link
              href={"/" + tab.name}
              className="flex gap-2 items-center px-4 py-2 "
            >
              {tab.icon}
              <p>{tab.title}</p>
            </Link>
            <p
              className="p-1 pr-2 cursor-pointer text-lg mb-[2px]"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveTab(tab);
              }}
            >
              x
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topbar;
