import { createContext, FC, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";

type TabsContextProviderProps = {
  children: ReactNode;
};

type TabsContextType = {
  tabs: { name: string; title: string; icon: JSX.Element }[];
  folderIsOpen: boolean;
  imagesIsOpen: boolean;
  vscodeIsOpen: boolean;
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
  handleToggleVscode: () => void;
};

const TabsContext = createContext({} as TabsContextType);

export const TabsContextProvider: FC<TabsContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [tabs, setTabs] = useState([]);
  const [folderIsOpen, setFolderIsOpen] = useState(false);
  const [imagesIsOpen, setImagesIsOpen] = useState(false);
  const [vscodeIsOpen, setVscodeIsOpen] = useState(false);

  const handleToggleVscode = () => {
    setVscodeIsOpen((prev) => !prev);
    if (vscodeIsOpen) router.push("/");
  };

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
    vscodeIsOpen,
    handleRemoveTab,
    handleAddTab,
    folderIsOpen,
    imagesIsOpen,
    handleToggleFolder,
    handleToggleImages,
    handleToggleVscode,
  };
  return <TabsContext.Provider value={data}>{children}</TabsContext.Provider>;
};

export const useTabs = () => useContext(TabsContext);
