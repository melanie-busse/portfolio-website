import { createGlobalStyle } from "styled-components";

export const petrolTheme = {
  colors: {
    backgrounds: {
      dark: "#0a1012",
      box: "rgba(31, 41, 55, 0.4)",
      card: "rgba(0, 242, 255, 0.05)",
      button: "rgba(0, 242, 255, 0.1)",
      footer: "rgba(13, 21, 32, 0.9)",
      body: "#0d1520",
      nav: "rgba(13, 21, 32, 0.7)",
      bentoBox: "rgba(0, 242, 255, 0.05)",
      iconWrapper: "rgba(0, 242, 255, 0.4)",
      techBadge: "rgba(0, 212, 255, 0.03)",

      hovers: {
        card: "rgba(0, 242, 255, 0.1)",
        h1: "rgba(0, 242, 255, 0.3)",
        shadow: "rgba(0, 242, 255, 0.15)",
        tech: "rgba(0, 212, 255, 0.15)",
      },
    },
    primaryPetrol: "#0098ad",
    accentAqua: "#00d4eb",
    h4: "#00f2ff",
    textMain: "#f5f5f5",
    textMuted: "#a0a0a0",
    borderTop: "#2a8f86",
  },
  categories: {
    frontend: {
      text: "#00f2ff",
      background: "rgba(0, 242, 255, 0.1)",
      border: "rgba(0, 242, 255, 0.3)",
    },
    backend: {
      text: "#b794f4",
      background: "rgba(183, 148, 244, 0.1)",
      border: "rgba(183, 148, 244, 0.3)",
    },
    tools: {
      text: "#2cb67d",
      background: "rgba(44, 182, 125, 0.1)",
      border: "rgba(44, 182, 125, 0.3)",
    },
  },

  shadows: {
    title: "0 0 20px #0098ad",
    h1: "0 0 20px rgba(0, 242, 255, 0.3)",
    button: "0 0 15px rgba(0, 242, 255, 0.3)",
    box: "0 0 30px #0098ad",
    hover: "0 10px 30px rgba(0, 242, 255, 0.15)",
    nav: "0 0 10px #00f2ff",
    tech: "0 0 8px rgba(0, 212, 255, 0.2);",
  },
  borders: {
    border: "1px solid rgba(0, 242, 255, 0.05)",
    timeline: "2px solid rgba(0, 242, 255, 0.2)",
    techBadge: "1px solid rgba(0, 212, 255, 0.4)",
    button: "1px solid #00f2ff",
    image: "2px solid #00d4eb",
    top: "2px solid #2a8f86",
    borderRadius: "24px",
    section: "3px solid #00f2ff",
    sectionThin: "1px solid #00f2ff",
    borderFooter: "1px solid rgba(0, 242, 255, 0.1)",
  },
  fonts: {
    main: "'Segoe UI', Roboto, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    tech: "'JetBrains Mono', monospace",
  },
  widths: {
    container: "1000px",
    footer: "1200px",
  },
  breakpoints: {
    mobile: "768px",
    laptopSmall: "968px",
    tablet: "1024px",
    desktop: "1280px",
  },
};

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.colors.backgrounds.body};
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
        border-top: ${(props) => props.theme.borders.top};

        color: ${(props) => props.theme.colors.textMain};
        font-family: ${(props) => props.theme.fonts.body};
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
    
    h1 {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.h4};
      margin-bottom: 1.5rem;
      text-shadow: ${(props) => props.theme.shadows.h1};
    }
    
    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.primaryPetrol};
      font-weight: 400;
    }
    
    h3 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.textMain};
      margin: 0;
    }
    
    h4 {
      color: ${(props) => props.theme.colors.h4};
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    p {
      color: ${(props) => props.theme.colors.textMuted};
      line-height: 1.62;
      font-size: 1.1rem;
      margin-bottom: 0;
      font-family:  ${(props) => props.theme.fonts.tech};
    }
`;
