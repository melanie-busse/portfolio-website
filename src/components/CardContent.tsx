import React from "react";
import styled from "styled-components";

interface CardContentProps {
  children: React.ReactNode;
  title: string;
  company: string;
  description: string;
}

export function CardContent({ children, title, company, description }: CardContentProps) {
  return (
    <Content>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p>{description}</p>
      {children}
    </Content>
  );
}

const Content = styled.div`
  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  padding: 2rem;
  border-radius: ${(props) => props.theme.borders.borderRadius};
  margin-top: 1rem;
`;
