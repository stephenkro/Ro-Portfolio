import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "./home.module.css";
import Image from "next/image";
import Typical from 'react-typical'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Stephen Ro</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={homeStyles.welcome}><Typical steps={[`Welcome! I'm Stephen Ro`, 1000, ]}
        loop={Infinity}
        wrapper="p"/></h1>
      </section>
      <section className={homeStyles.about}>
        {/* <h1>About Me</h1> */}
        <Image
          className={homeStyles.surfImg}
          priority
          src="/images/StephenSurf.jpg"
          height={2000}
          width={2600}
        />
        <p>
          I am a fullstack software developer based in New York. Previously, I
          have worked in financial services but felt there was a creative void
          in my career. Always on the lookout for new skills to add in order to
          further my personal growth, I found the vast world of coding through a
          rigorious bootcamp program, Fullstack Academy. When not learning new
          skills, you can find me playing basketball, volleyball or video games{" "}
        </p>
      </section>

      <section className={homeStyles.skills}>
        <h1>Skills</h1>
        <div className={homeStyles.proficient}>
          <h3>Proficient</h3>
          <ul>
            <li>Javascript</li>
            <li>CSS</li>
            <li>React</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Redux</li>
            <li>Git</li>
          </ul>
        </div>

        <div className={homeStyles.knowledgeable}>
          <h3>Knowledgeable</h3>
          <ul>
            <li>React Native</li>
            <li>Victory.js</li>
            <li>Sequelize</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div className={homeStyles.familiar}>
          <h3>Familiar</h3>
          <ul>
            <li>Mocha</li>
            <li>Firebase</li>
            <li>Phaser</li>
            <li>Next.js</li>
          </ul>
        </div>
      </section>
    
    </Layout>
  );
}
