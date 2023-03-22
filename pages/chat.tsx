import { DefaultEventsMap } from "@socket.io/component-emitter";
import Chat from "components/pages/Chat";
import Head from "next/head";
import { useEffect } from "react";
import io, { Socket } from "socket.io-client";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export default function ChatPage() {
  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {});
  };

  useEffect(() => {
    socketInitializer();

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Hüseyin Erkal | Chat</title>
      </Head>
      <Chat />
    </>
  );
}
