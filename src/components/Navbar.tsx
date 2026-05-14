import styled from 'styled-components';
import Link from 'next/link';
import {useRouter} from "next/router";

// Falls du Props übergeben möchtest, kannst du hier ein Interface definieren
interface NavbarProps {
    // z.B. customLinks?: string[];
}

export default function Navbar({}: NavbarProps) {
    const router = useRouter();

    // Prüft, ob der Pfad exakt übereinstimmt oder (bei Unterseiten) damit beginnt
    const isActive = (path: string) => router.pathname === path;

    return (
        <Nav>
            <NavContainer>
                <Logo href="/">
                    Melanie<span>Busse</span>
                </Logo>
                <NavLinks>
                    <NavLink href="/" $active={isActive('/')}>
                        Skills
                    </NavLink>
                    <NavLink href="#projects" $active={isActive('/projekte')}>
                        Projekte
                    </NavLink>
                    <NavLink href="/werdegang" $active={isActive('/werdegang')}>
                        Werdegang
                    </NavLink>
                    <NavLink href="/bildung" $active={isActive('/bildung')}>
                        Bildung
                    </NavLink>
                    <ContactButton href="mailto:mail@melanie-busse.de">
                        Kontakt
                    </ContactButton>
                </NavLinks>
            </NavContainer>
        </Nav>
    );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(13, 21, 32, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 242, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f5f5f5;
  text-decoration: none;
  
  span {
    color: #00f2ff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; /* Hier könnten wir später ein Mobile-Menü einbauen */
  }
`;

// 1. Definiere das Interface für deine Styled Component Props
interface NavLinkStylesProps {
    $active?: boolean;
}

// 2. Weise dem styled(Link) das Interface zu
const NavLink = styled(Link)<NavLinkStylesProps>`
    color: ${props => props.$active ? '#00f2ff' : '#a0a0a0'};
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: ${props => props.$active ? '100%' : '0'};
        height: 2px;
        background: #00f2ff;
        box-shadow: 0 0 10px #00f2ff;
        transition: width 0.3s ease;
    }

    &:hover {
        color: #00f2ff;
    }
`;

const ContactButton = styled.a`
  background: transparent;
  border: 1px solid #00f2ff;
  color: #00f2ff;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(0, 242, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 242, 255, 0.3);
    transform: scale(1.05);
  }
`;