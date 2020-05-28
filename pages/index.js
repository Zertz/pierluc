import Head from "next/head";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pier-Luc · Full-Stack Developer</title>
        <link
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
          rel="icon"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Layout />
    </div>
  );
}
