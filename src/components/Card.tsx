import styled from "styled-components";
import React from "react";

export function Card({children}: { children: React.ReactNode}) {
    return <StyledCard>{children}</StyledCard>
}

const StyledCard = styled.div`
    background: rgba(0, 242, 255, 0.05);
    border: 1px solid rgba(0, 242, 255, 0.1);
    padding: 1.5rem;
    border-radius: 16px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: rgba(0, 242, 255, 0.1);
    }
`;