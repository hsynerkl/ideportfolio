import { createContext, FC, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";

type TabsContextProviderProps = {
  children: ReactNode;
};

type TabsContextType = {
  tabs: { name: string; title: string; icon: JSX.Element }[];
  folderIsOpen: boolean;
  imagesIsOpen: boolean;
  handleToggleFolder: () => void;
  handleToggleImages: () => void;
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
  const [tabs, setTabs] = useState([]);
  const [folderIsOpen, setFolderIsOpen] = useState(false);
  const [imagesIsOpen, setImagesIsOpen] = useState(false);

  const handleToggleFolder = () => {
    setFolderIsOpen((prev) => !prev);
    if (imagesIsOpen) setImagesIsOpen(false);
  };

  const handleToggleImages = () => {
    setImagesIsOpen((prev) => !prev);
  };

  const handleRemoveTab = (selectedTad: {
    name: string;
    title: string;
    icon: JSX.Element;
  }) => {
    //@ts-ignore
    const filter = tabs.filter((tab) => tab.name !== selectedTad.name);
    setTabs(filter);

    if (filter.length - 1 >= 0) {
      const pageIsTrue = filter.filter((tab) =>
        //@ts-ignore
        tab.name.includes(
          router.asPath === "/" ? "home" : router.asPath.replace("/", "")
        )
      );

      if (pageIsTrue.length >= 1) return;
      //@ts-ignore
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
    //@ts-ignore
    const filter = tabs.filter((tab) => tab.name === selectedTad.name);
    if (filter.length >= 1) return;
    //@ts-ignore
    else setTabs((prev) => [...prev, selectedTad]);
  };

  const data = {
    tabs,
    handleRemoveTab,
    handleAddTab,
    folderIsOpen,
    imagesIsOpen,
    handleToggleFolder,
    handleToggleImages,
  };
  return <TabsContext.Provider value={data}>{children}</TabsContext.Provider>;
};

export const useTabs = () => useContext(TabsContext);
