import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Stephen Ro";
export const siteTitle = "Stephen Ro Portfolio";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.navi}>
        <div className={styles.name}>
          <div className={styles.image}>
            <Image
              priority
              src="/images/Stephen Headshot.jpg"
              className={utilStyles.borderCircle}
              height={80}
              width={80}
              alt={name}
            />
          </div>
          <div>
            <h3 className={utilStyles.heading2Xl}>{name}</h3>
          </div>
        </div>
        <ul className={styles.link}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <h1>Contact Me!</h1>
        <div className={styles.iconContainer}>
        <a href="https://github.com/stephenkro">
          <img src="/images/githubicon.svg" width="80px" height="80px" />
        </a>
        
        
        <a href="https://www.linkedin.com/in/stephen-ro/">
          <img src="/images/linkedin.svg" width="80px" height="80px" />
        </a>
        <a href="mailto:stephenkro@gmail.com">
          <img src="/images/emailicon.svg" width="80px" height="80px" />
        </a>
        </div>
        <h3>© 2021 Stephen Ro</h3>
      </footer>
    </div>
  );
}
