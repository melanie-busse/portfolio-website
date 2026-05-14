import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { petrolTheme, GlobalStyle } from '@/styles/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={petrolTheme}>
            <GlobalStyle />
            <Navbar />

             <main style={{
                paddingTop: '80px',
                minHeight: 'calc(100vh - 150px)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Component {...pageProps} />
            </main>

            <Footer />
        </ThemeProvider>
    );
}