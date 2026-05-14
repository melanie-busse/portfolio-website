import { createGlobalStyle } from 'styled-components';

export const petrolTheme = {
    colors: {
        bgDark: '#0a1012',      // Sehr dunkles Anthrazit/Blau
        primaryPetrol: '#0098ad', // Dein Petrol aus dem Bild
        accentAqua: '#00d4eb',    // Hellere Variante für Glow-Effekte
        textMain: '#f5f5f5',      // Off-White für gute Lesbarkeit
        textMuted: '#a0a0a0',     // Grau für weniger wichtige Infos
    }
};

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #0d1520;
        background-image: repeating-linear-gradient(
                12deg,
                transparent,
                transparent 3px,
                rgba(255, 255, 255, 0.015) 3px,
                rgba(255, 255, 255, 0.015) 4px
        ),
        linear-gradient(
                180deg,
                #1f2937 0%,
                #111827 20%,
                #0d1520 50%,
                #111827 80%,
                #1a2535 100%
        );
        background-attachment: fixed;
        border-top: 2px solid #2a8f86;

        color: ${props => props.theme.colors.textMain};
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;