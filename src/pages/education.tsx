import styled from 'styled-components';
import Head from 'next/head';
import {educationData} from "@/data/educationData";

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
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  color: #00f2ff;
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EduCard = styled.div`
  background: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #00f2ff;
  }
`;

const Period = styled.span`
  color: #00f2ff;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Institution = styled.h2`
  color: #f5f5f5;
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;

const Degree = styled.h3`
  color: #a0a0a0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Details = styled.p`
  color: rgba(160, 160, 160, 0.8);
  line-height: 1.6;
`;