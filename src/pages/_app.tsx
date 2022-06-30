import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfirmProvider } from "material-ui-confirm";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1aa272",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <Component {...pageProps} />
      </ConfirmProvider>
    </ThemeProvider>
  );
}

export default MyApp;
