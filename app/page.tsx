import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <div className={styles.grid}>
          <Link className={styles.card} href="/static">
            Static
          </Link>
          <Link className={styles.card} href="/revalidation">
            Revalidation
          </Link>
          <Link className={styles.card} href="/server-rendered">
            Server Rendered
          </Link>
          <Link className={styles.card} href="/client-side">
            Client side
          </Link>
          <Link className={styles.card} href="/realtime">
            Realtime
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
