import { createContext, FC, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";

type TabsContextProviderProps = {
  children: ReactNode;
};

type TabsContextType = {
  tabs: { name: string; title: string; icon: JSX.Element }[];
  handleRemoveTab: (selectedTab: {
    name: string;
    title: string;
    icon: JSX.Element;
  }) => void;
  handleAddTab: (selectedTab: {
    name: string;
    title: string;
    icon: JSX.Element;
  }) => void;
};

const TabsContext = createContext({} as TabsContextType);

export const TabsContextProvider: FC<TabsContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [tabs, setTabs] = useState([
    {
      name: "home",
      title: "Home.tsx",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path
            d="m12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85s-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89m-4.63 9.89c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47-.54-.03-1.11-.03-1.71-.03s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47l-.81 1.5.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47m-2.62-6.72c-.19.22-.39.45-.59.72h.59.59c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-.59-.59c.2.27.4.5.59.72m4.62-13.22c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95m-.29 9.31c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26m-10.16 0c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9m-4.95-8.56l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04c-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"
            fill="#00bcd4"
          />
        </svg>
      ),
    },
  ]);

  const handleRemoveTab = (selectedTad: {
    name: string;
    title: string;
    icon: JSX.Element;
  }) => {
    const filter = tabs.filter((tab) => tab.name !== selectedTad.name);
    setTabs(filter);

    if (filter.length - 1 >= 0) {
      const pageIsTrue = filter.filter((tab) =>
        tab.name.includes(
          router.pathname === "/" ? "home" : router.pathname.split("/")[1]
        )
      );

      if (pageIsTrue.length >= 1) return;
      router.push("/" + filter[filter.length - 1].name);
    } else {
      router.push("/vscode");
    }
  };

  const handleAddTab = (selectedTad: {
    name: string;
    title: string;
    icon: JSX.Element;
  }) => {
    const filter = tabs.filter((tab) => tab.name === selectedTad.name);
    if (filter.length >= 1) return;
    else setTabs((prev) => [...prev, selectedTad]);
  };

  const data = { tabs, handleRemoveTab, handleAddTab };
  return <TabsContext.Provider value={data}>{children}</TabsContext.Provider>;
};

export const useTabs = () => useContext(TabsContext);
