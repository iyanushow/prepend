import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="h-10 bg-gray-800 w-full">
      <nav className="w-full max-w-7xl mx-auto px-2.5 h-full text-white flex items-center">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
      </nav>
    </header>
    <main className="bg-slate-200">{children}</main>
  </>
);

export default Layout;
