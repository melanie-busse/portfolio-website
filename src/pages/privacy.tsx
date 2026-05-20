import styled from "styled-components";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { PageContainer } from "@/components/PageContainer";
import { ContentBox } from "@/components/ContentBox";

export default function Datenschutz() {
  const t = useTranslations("privacy");

  return (
    <>
      <Head>
        <title>{t("title")} | Melanie Busse</title>
        <meta name="robots" content="noindex" />
      </Head>
      <PageContainer>
        <ContentBox>
          <Title>{t("headline")}</Title>

          <Section>
            <SectionTitle>1. Datenschutz auf einen Blick</SectionTitle>
            <Text>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </Text>
          </Section>

          <Section>
            <SectionTitle>2. Datenerfassung auf dieser Website</SectionTitle>
            <SubTitle>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</SubTitle>
            <Text>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </Text>
            <SubTitle>Wie erfassen wir Ihre Daten?</SubTitle>
            <Text>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per
              E-Mail). Andere Daten werden automatisch beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </Text>
          </Section>

          <Section>
            <SectionTitle>3. Hosting durch Strato</SectionTitle>
            <Text>
              Ich hoste meine Website bei der STRATO AG. Anbieter ist die Strato AG,
              Otto-Ostrowski-Straße 7, 10249 Berlin. Wenn Sie meine Website besuchen, erfasst Strato
              verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der
              Datenschutzerklärung von Strato:{" "}
              <a
                href="https://www.strato.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.strato.de/datenschutz/
              </a>
              .
            </Text>
            <Text>
              Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ich
              habe ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung meiner
              Website.
            </Text>
          </Section>

          <Section>
            <SectionTitle>4. Ihre Rechte</SectionTitle>
            <Text>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </Text>
          </Section>
        </ContentBox>
      </PageContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../../messages/${locale || "de"}.json`)).default;
  return {
    props: {
      messages,
    },
  };
};

// --- Styled Components ---
const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.textMain};
`;

const Section = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.textMain};
  border-left: ${(props) => props.theme.borders.section || `3px solid ${props.theme.colors.h4}`};
  padding-left: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.1rem;
  margin: 1.5rem 0 0.5rem 0;
  color: ${(props) => props.theme.colors.h4};
`;

const Text = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.details};
  line-height: 1.6;

  a {
    color: ${(props) => props.theme.colors.h4};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
