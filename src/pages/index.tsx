import type { NextPage } from "next";
import Head from "next/head";
import Api from "../services/api";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const OpenDoor = () => {
    Api.get("/openDoor");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>House Controller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Controle da casa</h1>
        <button className={styles.button} onClick={OpenDoor}>
          Abrir portão
        </button>
      </main>
    </div>
  );
};

export default Home;
