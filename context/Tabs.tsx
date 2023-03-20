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
    {
      name: "about",
      title: "about.html",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path
            d="m12 17.56l4.07-1.13.55-6.1h-7.24l-.18-2.03h7.6l.2-1.99h-10l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66h-2l.29 3.19 4.07 1.13m-7.93-14.56h15.86l-1.43 16.2-6.5 1.8-6.5-1.8-1.43-16.2z"
            fill="#e44d26"
          />
        </svg>
      ),
    },
    {
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
    },
    {
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
    },
    {
      name: "articles",
      title: "articles.json",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path
            d="m5 3h2v2h-2v5a2 2 0 0 1 -2 2 2 2 0 0 1 2 2v5h2v2h-2c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0 -2 -2h-1v-2h1a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0 -2 2v4a2 2 0 0 1 -2 2h-2v-2h2v-5a2 2 0 0 1 2 -2 2 2 0 0 1 -2 -2v-5h-2v-2h2m-7 12a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1m-4 0a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1m8 0a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1z"
            fill="#fbc02d"
          />
        </svg>
      ),
    },
    {
      name: "github",
      title: "github.md",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path
            d="m2.25 15.75v-8h2l3 3 3-3h2v8h-2v-5.17l-3 3-3-3v5.17h-2m14-8h3v4h2.5l-4 4.5-4-4.5h2.5z"
            fill="#42a5f5"
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
