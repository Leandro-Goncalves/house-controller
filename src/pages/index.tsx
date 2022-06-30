import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Api from "../services/api";
import styles from "../styles/Home.module.css";
import { useConfirm } from "material-ui-confirm";

const Home: NextPage = () => {
  const confirm = useConfirm();

  const OpenDoor = () => {
    confirm({
      title: "Abrir/fechar",
      description: "Tem certeza que quer abrir/fechar o portão?",
      confirmationText: "Sim",
      cancellationText: "Não",
    }).then(() => {
      Api.get("/openDoor");
    });
  };

  return (
    <Box className={styles.container}>
      <Head>
        <title>House Controller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main" className={styles.main}>
        <Typography variant="h1" className={styles.title}>
          Controle da casa
        </Typography>
        <Button
          onClick={OpenDoor}
          variant="contained"
          disableElevation
          color="primary"
          className={styles.button}
        >
          Abrir/fechar portão
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
