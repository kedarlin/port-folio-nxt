import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../themes/theme.jsx";
import "../themes/global.css";
import Layout from "../Components/Layout/Layout.jsx";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
