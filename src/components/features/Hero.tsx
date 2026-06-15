import styled from "styled-components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"; // Icons importiert

export default function Hero() {
  const t = useTranslations("common");

  return (
    <HeroContainer>
      <HeroContent>
        <ImageWrapper>
          <Image
            src="/images/Foto_sw.png"
            alt="Melanie Busse"
            fill
            priority
            sizes="(max-width: 768px) 250px, 250px"
            style={{ objectFit: "contain", objectPosition: "center top" }}
          />
        </ImageWrapper>

        <TextWrapper>
          <NameTitle>{t("hero.title")}</NameTitle>
          <SubTitle>{t("hero.subTitle")}</SubTitle>
          <Description>{t("hero.description")}</Description>

          {/* Social Media Links auf der Startseite */}
          <SocialRow>
            <SocialButton
              href="https://github.com/melanie-busse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profil"
            >
              <FaGithub size={16} /> GitHub
            </SocialButton>
            <SocialButton
              href="https://linkedin.com/in/melanie-busse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profil"
            >
              <FaLinkedinIn size={16} /> LinkedIn
            </SocialButton>
          </SocialRow>

          <HighlightBadge>{t("hero.badge")}</HighlightBadge>
        </TextWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

// --- STYLED COMPONENTS ---

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem 1rem 2rem;
  text-align: center;
`;

const NameTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.textMain};
  text-shadow: ${(props) => props.theme.shadows.title};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h2`
  margin-bottom: 2rem;
`;

const Description = styled.p`
  max-width: 600px;
  margin-bottom: 30px;
`;

{
  /* NEU: Container für die Buttons */
}
const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "768px"}) {
    justify-content: center;
    width: 100%;
  }
`;

{
  /* NEU: Styling für die Bento/Hero-Social-Buttons */
}
const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors.backgrounds.nav || "rgba(255, 255, 255, 0.03)"};
  border: 1px solid ${(props) => props.theme.colors.textMuted}33;
  color: ${(props) => props.theme.colors.textMain};
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.accentAqua || props.theme.colors.h4};
    color: ${(props) => props.theme.colors.accentAqua || props.theme.colors.h4};
    box-shadow: 0 0 12px ${(props) => props.theme.colors.accentAqua || props.theme.colors.h4}44;
    transform: translateY(-2px);
  }
`;

const HighlightBadge = styled.span`
  background: ${(props) => props.theme.colors.primaryPetrol}22;
  border: 1px solid ${(props) => props.theme.colors.primaryPetrol};
  color: ${(props) => props.theme.colors.accentAqua};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-family: ${(props) => props.theme.fonts.tech};
  font-size: 0.9rem;

  /* KORREKTUREN: */
  display: inline-block;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 1.5rem;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row; /* Desktop: Nebeneinander */
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: ${(props) => props.theme.widths.footer};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "768px"}) {
    flex-direction: column; /* Mobil: Untereinander stapeln! */
    gap: 1.5rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Desktop: Linksbündig */
  text-align: left;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "768px"}) {
    align-items: center; /* Mobil: Zentriert (Text + Badge) */
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: ${(props) => props.theme.borders.image};
  box-shadow: ${(props) => props.theme.shadows.box};
  margin-top: 40px;
  flex-shrink: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    width: 150px;
    height: 150px;
    margin-top: 15px;
  }

  img {
    object-fit: contain;
    transform: scale(1.1) translateX(-5px) translateY(25px);
    filter: grayscale(100%) brightness(0.8) contrast(1.1);

    @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
      transform: scale(1.1) translateX(0px) translateY(15px);
    }
  }
`;
