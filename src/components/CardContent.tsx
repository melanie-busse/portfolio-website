import React from "react";
import styled from "styled-components";

interface CardContentProps {
    children: React.ReactNode;
    title: string;
    company: string;
    description: string;
}

export function CardContent({children, title, company, description}: CardContentProps) {
    return (
        <Content>
            <Title>{title}</Title>
            <Company>{company}</Company>
            <Description>{description}</Description>
            {children}
        </Content>);
}

const Content = styled.div`
  background: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  margin-top: 1rem;
`;

const Title = styled.h3`
    color: #f5f5f5; 
    margin-bottom: 0.3rem;
`;

const Company = styled.h4`
    color: #00f2ff;
    font-weight: 500; 
    margin-bottom: 1rem;
`;

const Description = styled.p`
    color: #a0a0a0; 
    line-height: 1.6;
`;
