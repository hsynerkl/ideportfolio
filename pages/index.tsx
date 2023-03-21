import Desktop from "components/common/desktop";
import { useTabs } from "context/Tabs";
import Head from "next/head";
import Vscode from "./vscode";

export default function VSCodePage() {
  const { vscodeIsOpen } = useTabs();
  return (
    <>
      <Head>
        <title>Hüseyin Erkal | {vscodeIsOpen ? "VSCode" : "Desktop"}</title>
      </Head>
      {vscodeIsOpen ? <Vscode /> : <Desktop />}
    </>
  );
}
