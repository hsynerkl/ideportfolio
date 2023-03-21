import { useTabs } from "context/Tabs";
import Link from "next/link";
import { useState } from "react";

const Explorer = () => {
  const [showExplorer, setShowExplorer] = useState(true);

  const {
    handleAddTab,
    folderIsOpen,
    imagesIsOpen,
    handleToggleFolder,
    handleToggleImages,
  } = useTabs();

  const handleShowExplorer = () => {
    setShowExplorer((prev) => !prev);
  };

  return (
    <div className="w-2/12 hidden lg:flex flex-col bg-[#1f2428] h-full text-white font-semibold">
      <p className="p-3 text-sm font-light text-white text-opacity-80">
        EXPLORER
      </p>
      <div className="px-3">
        <div
          className="flex items-center text-xs gap-2 cursor-pointer"
          onClick={handleShowExplorer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className={`h-3 w-3 transition duration-150 -rotate-90 ${
              showExplorer && "!-rotate-0"
            } `}
          >
            <path d="M505.183 123.179c-9.087-9.087-23.824-9.089-32.912.002l-216.266 216.27L39.729 123.179c-9.087-9.087-23.824-9.089-32.912.002-9.089 9.089-9.089 23.824 0 32.912L239.55 388.82a23.271 23.271 0 0 0 32.91-.001l232.721-232.727c9.091-9.088 9.091-23.824.002-32.913z" />
          </svg>
          <p> PORTFOLIO </p>
        </div>
        {showExplorer ? (
          <ul className="flex flex-col mt-2 text-xs font-medium">
            <li>
              <Link
                href="/home"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1"
                onClick={() => {
                  handleAddTab({
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
                  });
                }}
              >
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
                <p>Home.tsx</p>
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1"
                onClick={() => {
                  handleAddTab({
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
                  });
                }}
              >
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
                <p>about.html</p>
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1"
                onClick={() => {
                  handleAddTab({
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
                  });
                }}
              >
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
                <p>contact.css</p>
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1"
                onClick={() => {
                  handleAddTab({
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
                  });
                }}
              >
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
                <p>projects.js</p>
              </Link>
            </li>
            <li
              className={`flex gap-2 items-center hover:bg-[#24292e] py-1 cursor-pointer ${
                folderIsOpen && "ml-2"
              }`}
              onClick={handleToggleFolder}
            >
              {!folderIsOpen ? (
                <svg
                  className="h-5 w-5 fill-gray-400"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30 9H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2ZM6 11V7h6.49l2.72 4Z" />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 fill-gray-400"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M35.32 13.74a1.71 1.71 0 0 0-1.45-.74h-22.7a2.59 2.59 0 0 0-2.25 1.52 1 1 0 0 0 0 .14L6 25V7h6.49l2.61 3.59a1 1 0 0 0 .81.41H32a2 2 0 0 0-2-2H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22.69A1.37 1.37 0 0 0 5.41 31h24.93a1 1 0 0 0 1-.72l4.19-15.1a1.64 1.64 0 0 0-.21-1.44Z" />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              )}

              <p>assets</p>
            </li>

            {folderIsOpen && (
              <li
                className="flex gap-2 items-center hover:bg-[#24292e] py-1 cursor-pointer ml-4"
                onClick={handleToggleImages}
              >
                {imagesIsOpen ? (
                  <svg
                    className="h-5 w-5 fill-gray-400"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M35.32 13.74a1.71 1.71 0 0 0-1.45-.74h-22.7a2.59 2.59 0 0 0-2.25 1.52 1 1 0 0 0 0 .14L6 25V7h6.49l2.61 3.59a1 1 0 0 0 .81.41H32a2 2 0 0 0-2-2H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22.69A1.37 1.37 0 0 0 5.41 31h24.93a1 1 0 0 0 1-.72l4.19-15.1a1.64 1.64 0 0 0-.21-1.44Z" />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 fill-gray-400"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M30 9H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2ZM6 11V7h6.49l2.72 4Z" />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                )}

                <p>images</p>
              </li>
            )}

            {imagesIsOpen && (
              <Link
                href="/lazydeveloper/1"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1 cursor-pointer ml-6"
                onClick={() => {
                  handleAddTab({
                    name: "lazydeveloper/1",
                    title: "img1.png",
                    icon: (
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-green-600"
                      >
                        <path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z" />
                        <path fill="none" d="M0 0h36v36H0z" />
                      </svg>
                    ),
                  });
                }}
              >
                <svg
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-green-600"
                >
                  <path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z" />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>

                <p>img-1.png</p>
              </Link>
            )}
            {imagesIsOpen && (
              <Link
                href="/lazydeveloper/2"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1 cursor-pointer ml-6"
                onClick={() => {
                  handleAddTab({
                    name: "lazydeveloper/2",
                    title: "img2.png",
                    icon: (
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-green-600"
                      >
                        <path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z" />
                        <path fill="none" d="M0 0h36v36H0z" />
                      </svg>
                    ),
                  });
                }}
              >
                <svg
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-green-600"
                >
                  <path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z" />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>

                <p>img-2.png</p>
              </Link>
            )}
            {imagesIsOpen && (
              <Link
                href="/lazydeveloper/3"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1 cursor-pointer ml-6"
                onClick={() => {
                  handleAddTab({
                    name: "lazydeveloper/3",
                    title: "img3.png",
                    icon: (
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-green-600"
                      >
                        <path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z" />
                        <path fill="none" d="M0 0h36v36H0z" />
                      </svg>
                    ),
                  });
                }}
              >
                <svg
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-green-600"
                >
                  <path d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8.92 8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35 8.32 27Zm24 0H11.15l6.23-6.23 5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z" />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>

                <p>img-3.png</p>
              </Link>
            )}

            <li>
              <Link
                href="/github"
                className="flex gap-2 items-center hover:bg-[#24292e] py-1"
                onClick={() => {
                  handleAddTab({
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
                  });
                }}
              >
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
                <p>github.md</p>
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Explorer;
