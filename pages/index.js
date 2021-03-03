import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "./home.module.css"
import Image from "next/image"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Stephen Ro</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={homeStyles.welcome}>Welcome! I'm Stephen Ro.</h1>
      </section>
      <section className={homeStyles.about}>
        {/* <h1>About Me</h1> */}
        <Image className={homeStyles.surfImg}
              priority
              src="/images/StephenSurf.jpg"
              height={2000}
              width={2600}
            />
        <p>I am a fullstack software developer based in New York. Previously, I have worked in financial services but felt there was a creative void in my career. Always on the lookout for new skills to add in order to further my personal growth, I found the vast world of coding through a rigorious bootcamp program, Fullstack Academy. When not learning new skills, you can find me playing basketball, volleyball or video games </p>
      </section>
    </Layout>
  );
}
