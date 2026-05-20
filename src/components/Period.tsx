import styled from "styled-components";

export function Period({text}: {text: string}) {
    return <StyledPeriod>{text}</StyledPeriod>
}

const StyledPeriod = styled.span`
  background: rgba(0, 242, 255, 0.1);
  color: #00f2ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
`;