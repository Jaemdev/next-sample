import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>검이색렇을게위작해성</title>
        <meta
          name="description"
          content="검이색렇을게위작해성검이색렇을게위작해성"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="검이색렇을게위작해성" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://next-sample-psi-two.vercel.app/"
        />
        <meta property="og:image" content="/dog.jpg" />
        <meta property="og:site_name" content="검이색렇을게위작해성" />
        <meta property="og:description" content="검이색렇을게위작해성" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="harborx-jaemin, harborx-blockchain, 하버블록체인"
        />
        <meta
          name="description"
          content="harborx-jaemin, harborx-blockchain, 하버블록체인"
        />

        <meta
          name="google-site-verification"
          content="E9kmvarRHlIMtPs8fPk4X6_KMpy8s59uYveiGZjGmc4"
        />

        <meta name="reply-to" content="lemon__96@naver.com" />
        <meta name="author" content="jaemdev" />
        <meta name="content-language" content="kr" />
        <meta name="content-language" content="en" />
      </Head>

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
