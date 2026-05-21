import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locales, locale: currentLocale, pathname, query } = router;

  const languageConfig: Record<string, { label: string; flag: React.ReactNode }> = {
    de: {
      label: "DE",
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="16" height="12">
          <rect width="5" height="3" fill="#000" />
          <rect width="5" height="2" fill="#D00" />
          <rect width="5" height="1" fill="#FFCE00" />
        </svg>
      ),
    },
    en: {
      label: "EN",
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="12">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      ),
    },
    da: {
      label: "DK",
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28" width="16" height="12">
          <rect width="37" height="28" fill="#C8102E" />
          <path d="M12,0 h4 v28 h-4 z M0,12 h37 v4 h-37 z" fill="#fff" />
        </svg>
      ),
    },
  };

  return (
    <SwitcherContainer>
      {locales?.map((loc) => {
        const config = languageConfig[loc] || { label: loc.toUpperCase(), flag: null };
        const isActive = loc === currentLocale;

        return (
          <LanguageLink
            key={loc}
            href={{ pathname, query }}
            locale={loc}
            $active={isActive}
            aria-label={`Switch to ${config.label}`}
          >
            <FlagWrapper>{config.flag}</FlagWrapper>
            <span>{config.label}</span>
          </LanguageLink>
        );
      })}
    </SwitcherContainer>
  );
}

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.3rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-left: 0.5rem;
`;

interface LanguageLinkProps {
  $active: boolean;
}

const LanguageLink = styled(Link)<LanguageLinkProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${(props) => (props.$active ? props.theme.colors.h4 : props.theme.colors.textMuted)};
  background: ${(props) => (props.$active ? "rgba(255, 255, 255, 0.06)" : "transparent")};
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  transition: all 0.2s ease;

  span {
    line-height: 1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.h4};
    background: rgba(255, 255, 255, 0.08);
  }
`;

const FlagWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
