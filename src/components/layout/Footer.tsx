import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale } = useRouter();
  const t = useTranslations("common");

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} Melanie Busse – {t("footer.role")}
        </Copyright>
        <FooterLinks>
          <FooterLink href="/imprint" locale={locale}>
            {t("footer.imprint")}
          </FooterLink>
          <FooterLink href="/privacy" locale={locale}>
            {t("footer.privacy")}
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  background: ${(props) => props.theme.colors.backgrounds.footer};
  border-top: ${(props) => props.theme.borders.borderFooter};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: ${(props) => props.theme.widths.footer};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.textMuted}; /* Farbanbindung für besseren Kontrast */
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.textMuted};
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.h4};
  }
`;
