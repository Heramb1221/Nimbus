import Head from "next/head";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nimbus</title>
        <meta name="description" content="Main Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header/>
      <div className="main-container">
        <Dashboard/>
        
      </div>
    </>
  );
}
