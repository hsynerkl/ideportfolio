import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layouts";
import { TabsContextProvider } from "context/Tabs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TabsContextProvider>
  );
}
