import Head from "next/head";
import { Header } from "../../components/Header";

export default function Blog() {
  return (
    <div className="min-h-full">
      <Head>
        <title>Pier-Luc · (Java|Type)Script Developer</title>
      </Head>
      <Header />
    </div>
  );
}
