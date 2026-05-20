import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const router = useRouter();
  const { locale } = router;
  const t = useTranslations("nav");

  // Prüft, ob der Pfad aktiv ist
  const isActive = (path: string) => router.pathname === path;

  return (
    <Nav>
      <NavContainer>
        {/* locale sorgt dafür, dass wir auf der richtigen Sprachebene bleiben */}
        <Logo href="/" locale={locale}>
          Melanie<span>Busse</span>
        </Logo>
        <NavLinks>
          <NavLink href="/" locale={locale} $active={isActive("/")}>
            {t("skills")}
          </NavLink>
          <NavLink href="/projects" locale={locale} $active={isActive("/projects")}>
            {t("projects")}
          </NavLink>
          <NavLink href="/about" locale={locale} $active={isActive("/about")}>
            {t("about")}
          </NavLink>
          <NavLink href="/education" locale={locale} $active={isActive("/education")}>
            {t("education")}
          </NavLink>
          <ContactButton href="mailto:mail@melanie-busse.de">{t("contact")}</ContactButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

// --- Styled Components ---

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${(props) => props.theme.colors.backgrounds.nav};
  backdrop-filter: blur(12px);
  border-bottom: ${(props) => props.theme.borders.border};
`;

const NavContainer = styled.div`
  max-width: ${(props) => props.theme.widths.footer};
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textMain};
  text-decoration: none;

  span {
    color: ${(props) => props.theme.colors.h4};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

interface NavLinkStylesProps {
  $active?: boolean;
}

// Fehlerkorrektur in der Farbabfrage (Verschachtelung entfernt)
const NavLink = styled(Link)<NavLinkStylesProps>`
  color: ${(props) => (props.$active ? props.theme.colors.h4 : props.theme.colors.textMuted)};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background: ${(props) => props.theme.colors.h4};
    box-shadow: ${(props) => props.theme.shadows.nav};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.h4};
  }
`;

const ContactButton = styled.a`
  background: transparent;
  border: ${(props) => props.theme.borders.button};
  color: ${(props) => props.theme.colors.h4};
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${(props) => props.theme.colors.backgrounds.button};
    box-shadow: ${(props) => props.theme.colors.backgrounds.button};
    transform: scale(1.05);
  }
`;
