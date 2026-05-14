import styled from 'styled-components';
import Head from 'next/head';

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
                            Melanie Busse<br />
                            Schilfweg 19e<br />
                            25436 Tornesch
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>Kontakt</SectionTitle>
                        <Text>
                            E-Mail: mail@melanie-busse.de<br />
                            Telefon: [Deine Telefonnummer]
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>Redaktionell verantwortlich</SectionTitle>
                        <Text>
                            Melanie Busse<br />
                            Schilfweg 19e<br />
                            25436 Tornesch
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>Hosting</SectionTitle>
                        <Text>
                            Diese Webseite wird gehostet bei:<br />
                            STRATO AG<br />
                            Otto-Ostrowski-Straße 7<br />
                            10249 Berlin
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>Streitbeilegung</SectionTitle>
                        <Text>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                                https://ec.europa.eu/consumers/odr/
                            </a>.<br />
                            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </Text>
                    </Section>
                </ContentBox>
            </PageContainer>
        </>
    );
}

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: #f5f5f5;
`;

const ContentBox = styled.div`
  background: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #00f2ff;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #f5f5f5;
`;

const Text = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  font-size: 1rem;

  a {
    color: #00f2ff;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;