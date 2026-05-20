import styled from "styled-components";
import Head from "next/head";

import { educationData } from "@/data/educationData";

export default function Education() {
  return (
    <>
      <Head>
        <title>Education | Melanie Busse</title>
      </Head>
      <PageContainer>
        <Title>Educational Path</Title>
        <Grid>
          {educationData.map((item, index) => (
            <EduCard key={index}>
              <Period>{item.period}</Period>
              <Institution>{item.institution}</Institution>
              <Degree>{item.degree}</Degree>
              <Details>{item.details}</Details>
            </EduCard>
          ))}
        </Grid>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  max-width: ${(props) => props.theme.widths.container};
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.h4};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EduCard = styled.div`
  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.techBadge};
  padding: 2rem;
  border-radius: 16px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.h4};
  }
`;

const Period = styled.span`
  color: ${(props) => props.theme.colors.h4};
  font-weight: 600;
  font-size: 0.9rem;
`;

const Institution = styled.h2`
  color: ${(props) => props.theme.colors.textMain};
  margin: 0.5rem 0;
`;

const Degree = styled.h3`
  color: ${(props) => props.theme.colors.textMuted};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Details = styled.p`
  color: ${(props) => props.theme.colors.details};
`;
