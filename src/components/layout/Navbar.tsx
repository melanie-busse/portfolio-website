import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/features/LanguageSwitcher";

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Nav>
      <NavContainer>
        <Logo href="/" locale={locale} onClick={closeMenu}>
          Melanie<span>Busse</span>
        </Logo>

        {/* Hamburger Button für Mobile */}
        <Hamburger aria-label={t("nav.openMenu")} onClick={toggleMenu} $isOpen={isOpen}>
          <span />
          <span />
          <span />
        </Hamburger>

        {/* Die Navigation (Desktop flach, Mobil als Overlay) */}
        <NavLinks $isOpen={isOpen}>
          <NavLink href="/" locale={locale} $active={isActive("/")} onClick={closeMenu}>
            {t("nav.skills")}
          </NavLink>
          <NavLink
            href="/projects"
            locale={locale}
            $active={isActive("/projects")}
            onClick={closeMenu}
          >
            {t("nav.projects")}
          </NavLink>
          <NavLink href="/about" locale={locale} $active={isActive("/about")} onClick={closeMenu}>
            {t("nav.about")}
          </NavLink>
          <NavLink
            href="/education"
            locale={locale}
            $active={isActive("/education")}
            onClick={closeMenu}
          >
            {t("nav.education")}
          </NavLink>
          <ContactButton href="mailto:mail@melanie-busse.de" onClick={closeMenu}>
            {t("nav.contact")}
          </ContactButton>

          <SwitcherWrapper>
            <LanguageSwitcher />
          </SwitcherWrapper>
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
  position: relative;
  height: 80px;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textMain};
  text-decoration: none;
  z-index: 1001;

  span {
    color: ${(props) => props.theme.colors.h4};
  }
`;

const Hamburger = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.theme.colors.textMain};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isOpen ? "0" : "1")};
      transform: ${(props) => (props.$isOpen ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;

    background: ${(props) => props.theme.colors.backgrounds.body};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;

    gap: 2.5rem;
    padding: 2rem;
    box-sizing: border-box;
    z-index: 1000;

    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(100%)")};
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  }
`;

interface NavLinkStylesProps {
  $active?: boolean;
}

const NavLink = styled(Link)<NavLinkStylesProps>`
  color: ${(props) => (props.$active ? props.theme.colors.h4 : props.theme.colors.textMuted)};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }

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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.3rem;
    padding: 0.8rem 2rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.backgrounds.button};
    box-shadow: ${(props) => props.theme.colors.backgrounds.button};
    transform: scale(1.05);
  }
`;

const SwitcherWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 1rem;
    transform: scale(1.2);
  }
`;
