import styled from 'styled-components';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterContent>
                <Copyright>
                    © {currentYear} Melanie Busse – Senior Fullstack-Entwicklerin
                </Copyright>
                <FooterLinks>
                    <FooterLink href="/imprint">Impressum</FooterLink>
                    <FooterLink href="/privacy">Datenschutz</FooterLink>
                </FooterLinks>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  background: rgba(13, 21, 32, 0.9);
  border-top: 1px solid rgba(0, 242, 255, 0.1);
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;

const FooterLink = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00f2ff;
  }
`;