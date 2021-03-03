import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Stephen Ro</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Welcome! My name is Stephen Ro.</h1>
      </section>
    </Layout>
  );
}
