import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { NextIntlClientProvider } from "next-intl";

import { petrolTheme, GlobalStyle } from "@/styles/theme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale || "de";

  return (
    <NextIntlClientProvider locale={locale} messages={pageProps.messages} timeZone="Europe/Berlin">
      <ThemeProvider theme={petrolTheme}>
        <GlobalStyle />
        <Navbar />
        <main
          style={{
            paddingTop: "80px",
            minHeight: "calc(100vh - 150px)",
          }}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
