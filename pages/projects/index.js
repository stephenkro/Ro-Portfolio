import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "./projects.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <section className={styles.container}>
        <h1>Projects</h1>
        <div className={styles.projectContainer}>
          <div className={styles.navihealth}>
            <a href="https://github.com/FSA-CS-Taurus/NaviHealth">
              <h2>NaviHealth</h2>
            </a>
            <a href="https://github.com/FSA-CS-Taurus/NaviHealth">
              <Image src="/images/applogo2.jpg" height={300} width={300} />
            </a>
          </div>
          <div className={styles.jellybean}>
            <a href="https://github.com/2011-FSA-GS-OMEGA/GraceShopper">
              {" "}
              <h2>Jellybeans and Shoes</h2>{" "}
            </a>
            <a href="http://jellybeansandshoes.herokuapp.com/">
              <Image
                className={styles.jellyshoe}
                src="/images/jellybeansPic.jpg"
                height={300}
                width={300}
              />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
