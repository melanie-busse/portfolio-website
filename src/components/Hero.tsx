import styled from 'styled-components';
import Image from 'next/image';

export default function Hero() {
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
                        style={{ objectFit: 'contain', objectPosition: 'center top' }}
                    />
                </ImageWrapper>

                <TextWrapper>
                    <NameTitle>Melanie Busse</NameTitle>
                    <SubTitle>Senior Fullstack-Entwicklerin</SubTitle>
                    <Description>
                        Über 19 Jahre Erfahrung in der Konzeption und Entwicklung komplexer
                        Softwaresysteme. Expertin für Java-Backends und moderne
                        Web-Frontends mit Angular und TypeScript.
                    </Description>
                    <HighlightBadge>Softwareentwicklung seit 2005</HighlightBadge>
                </TextWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

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
  color: ${props => props.theme.colors.textMain};
  /* Hier nutzen wir dein Petrol für einen Glow-Effekt */
  text-shadow: 0 0 20px ${props => props.theme.colors.primaryPetrol};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primaryPetrol};
  font-weight: 400;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  max-width: 600px;
  line-height: 1.6;
  color: ${props => props.theme.colors.textMuted};
  font-size: 1.1rem;
`;

const HighlightBadge = styled.span`
  background: ${props => props.theme.colors.primaryPetrol}22; // 22 ist Hex für Transparenz
  border: 1px solid ${props => props.theme.colors.primaryPetrol};
  color: ${props => props.theme.colors.accentAqua};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-top: 2rem;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid ${props => props.theme.colors.accentAqua};
    box-shadow: 0 0 30px ${props => props.theme.colors.primaryPetrol}44;

    img {
        object-fit: contain;
        /* translateX(-15px) schiebt es nach links */
        /* translateY(25px) schiebt es nach unten */
        /* scale(1.1) sorgt dafür, dass keine leeren Ränder entstehen */
        transform: scale(1.1) translateX(-5px) translateY(25px);

        /* Dein aktueller Filter für den stimmigen Look */
        filter: grayscale(100%) brightness(0.8) contrast(1.1);
    }
`;