import styled from "styled-components";
import Head from "next/head";

import { PageContainer } from "@/components/PageContainer";
import { ContentBox } from "@/components/ContentBox";

export default function Imprint() {
  return (
    <>
      <Head>
        <title>Impressum | Melanie Busse</title>
        <meta name="robots" content="noindex" />
      </Head>
      <PageContainer>
        <ContentBox>
          <Title>Impressum</Title>

          <Section>
            <SectionTitle>Angaben gemäß § 5 TMG</SectionTitle>
            <Text>
              Melanie Busse
              <br />
              Schilfweg 19e
              <br />
              25436 Tornesch
            </Text>
          </Section>

          <Section>
            <SectionTitle>Kontakt</SectionTitle>
            <Text>
              E-Mail: mail@melanie-busse.de
              <br />
              Telefon: [Deine Telefonnummer]
            </Text>
          </Section>

          <Section>
            <SectionTitle>Redaktionell verantwortlich</SectionTitle>
            <Text>
              Melanie Busse
              <br />
              Schilfweg 19e
              <br />
              25436 Tornesch
            </Text>
          </Section>

          <Section>
            <SectionTitle>Hosting</SectionTitle>
            <Text>
              Diese Webseite wird gehostet bei:
              <br />
              STRATO AG
              <br />
              Otto-Ostrowski-Straße 7<br />
              10249 Berlin
            </Text>
          </Section>

          <Section>
            <SectionTitle>Streitbeilegung</SectionTitle>
            <Text>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </Text>
          </Section>
        </ContentBox>
      </PageContainer>
    </>
  );
}

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  a {
    color: ${(props) => props.theme.colors.h4};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
