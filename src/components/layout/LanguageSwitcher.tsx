import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
// Der korrekte Import der runden Flaggen-Komponente
import { CircleFlag } from "react-circle-flags";

const languages = [
  { code: "de", label: "DE", countryCode: "de" },
  { code: "en", label: "EN", countryCode: "gb" }, // 'gb' für die britische Flagge
  { code: "da", label: "DK", countryCode: "dk" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <IconWrapper>
          <CircleFlag countryCode={currentLanguage.countryCode} />
        </IconWrapper>
        <span className="label">{currentLanguage.label}</span>
        <Arrow $isOpen={isOpen}>▾</Arrow>
      </DropdownButton>

      {isOpen && (
        <DropdownMenu role="listbox">
          {languages.map((lang) => (
            <DropdownItem
              key={lang.code}
              role="option"
              aria-selected={lang.code === locale}
              $isActive={lang.code === locale}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <IconWrapper>
                <CircleFlag countryCode={lang.countryCode} />
              </IconWrapper>
              <span>{lang.label}</span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

// --- STYLED COMPONENTS ---

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: ${(props) => props.theme.colors.backgrounds.nav};
  color: ${(props) => props.theme.colors.textMain};
  border: ${(props) => props.theme.borders.border};
  padding: 0.5rem 0.9rem;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.h4};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;

  /* Zwingt die Flagge, exakt in den runden Container zu passen */
  img,
  svg {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  font-size: 0.75rem;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};
  color: ${(props) => props.theme.colors.textMuted};
  margin-left: 0.1rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: ${(props) => props.theme.colors.backgrounds.nav};
  border: ${(props) => props.theme.borders.border};
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 110px;
  z-index: 1100;
  backdrop-filter: blur(12px);
`;

const DropdownItem = styled.button<{ $isActive: boolean }>`
  background: ${(props) => (props.$isActive ? props.theme.colors.backgrounds.body : "transparent")};
  color: ${(props) => (props.$isActive ? props.theme.colors.h4 : props.theme.colors.textMain)};
  border: none;
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  font-weight: 500;
  width: 100%;
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.backgrounds.body};
    color: ${(props) => props.theme.colors.h4};
  }
`;
