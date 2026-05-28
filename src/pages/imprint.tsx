import styled from "styled-components";
import Head from "next/head";

import { PageContainer } from "@/components/common/PageContainer";
import { ContentBox } from "@/components/common/ContentBox";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next";

export default function Imprint() {
  const t = useTranslations("imprint");

  return (
    <>
      <Head>
        <title>{t("title")} | Melanie Busse</title>
        <meta name="robots" content="noindex" />
      </Head>
      <PageContainer>
        <ContentBox>
          <Title>{t("title")}</Title>

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
            <Text>E-Mail: mail@melanie-busse.de</Text>
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
              {t("hostingText")}
              <br />
              <strong>STRATO AG</strong>
              <br />
              Otto-Ostrowski-Straße 7
              <br />
              10249 Berlin
            </Text>
          </Section>

          <Section>
            <SectionTitle>Streitbeilegung</SectionTitle>
            <Text>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`@/messages/${locale || "de"}.json`)).default;
  return {
    props: {
      messages: {
        common: (await import(`../messages/${locale}/common.json`)).default,
      },
    },
  };
};

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
