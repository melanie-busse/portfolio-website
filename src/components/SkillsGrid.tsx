import styled from 'styled-components';
import {FaJava, FaAngular, FaDatabase, FaDocker, FaCode, FaServer, FaCodeBranch} from 'react-icons/fa';

export default function SkillsGrid() {
    return (
        <GridSection>
            <BentoContainer>
                {/* Haupt-Kachel: Backend */}
                <BentoCard $gridArea="1 / 1 / 2 / 3">
                    <CardHeader>
                        <IconWrapper><FaJava /></IconWrapper>
                        <CardTitle>Backend Core</CardTitle>
                    </CardHeader>
                    <CardText>
                        Über 19 Jahre Erfahrung in Java. Spezialist für <strong>Spring Boot</strong> und <strong>Quarkus</strong>.
                        Architektur von skalierbaren Enterprise-Systemen und Microservices. Entwicklung von modularen, testbaren Backend-Systemen mit NestJS.
                    </CardText>
                    <BadgeContainer>
                        <TechBadge>Spring Boot</TechBadge>
                        <TechBadge>Quarkus</TechBadge>
                        <TechBadge>Java EE</TechBadge>
                        <TechBadge>Python</TechBadge>
                        <TechBadge>PHP</TechBadge>
                        <TechBadge>Groovy</TechBadge>
                        <TechBadge>JSP</TechBadge>
                        <TechBadge>Hibernate</TechBadge>
                        <TechBadge>REST APIs</TechBadge>
                        <TechBadge>Express</TechBadge>
                        <TechBadge>NestJS</TechBadge>
                        <TechBadge>OpenAPI / Swagger</TechBadge>
                        <TechBadge>Microservices</TechBadge>
                        <TechBadge>Maven</TechBadge>
                        <TechBadge>JUnit/TDD</TechBadge>
                        <TechBadge>Clean Code</TechBadge>
                        <TechBadge>DDD / Architecture</TechBadge>
                    </BadgeContainer>
                </BentoCard>

                {/* Frontend */}
                <BentoCard $gridArea="1 / 3 / 2 / 5">
                    <CardHeader>
                        <IconWrapper><FaAngular /></IconWrapper>
                        <CardTitle>Frontend Engineering</CardTitle>
                    </CardHeader>
                    <CardText>
                        Moderne SPAs mit <strong>Angular</strong> und <strong>TypeScript</strong>.
                        Fokus auf Performance, State-Management und intuitive UX.
                    </CardText>

                    <BadgeContainer>
                        <TechBadge>Angular</TechBadge>
                        <TechBadge>TypeScript</TechBadge>
                        <TechBadge>JavaScript</TechBadge>
                        <TechBadge>RxJS</TechBadge>
                        <TechBadge>Redux / NgRx</TechBadge>
                        <TechBadge>React</TechBadge>
                        <TechBadge>Next.js</TechBadge>
                        <TechBadge>Styled Components</TechBadge>
                        <TechBadge>i18next</TechBadge>
                        <TechBadge>Bootstrap, Tailwind</TechBadge>
                        <TechBadge>Django</TechBadge>
                        <TechBadge>Global State Management</TechBadge>
                    </BadgeContainer>
                </BentoCard>

                <BentoCard $gridArea="2 / 1 / 3 / 3">
                    <CardHeader>
                        <IconWrapper><FaServer /></IconWrapper>
                        <CardTitle>Infrastructure & Hosting</CardTitle>
                    </CardHeader>
                    <CardText>
                        Setup und Verwaltung von <strong>VServer-Umgebungen</strong> (Strato).
                        Deployment von Web-Projekten via Docker und Nginx.
                    </CardText>
                    <BadgeContainer>
                        <TechBadge>Linux</TechBadge>
                        <TechBadge>SSH</TechBadge>
                        <TechBadge>Nginx</TechBadge>
                        <TechBadge>SSL/TLS</TechBadge>
                        <TechBadge>Apache / Payara</TechBadge>
                        <TechBadge>XAMPP</TechBadge>
                        <TechBadge>WSL2</TechBadge>
                    </BadgeContainer>
                </BentoCard>

                {/* Datenbanken */}
                <BentoCard $gridArea="3 / 1 / 4 / 3">
                    <CardHeader>
                        <IconWrapper><FaDatabase /></IconWrapper>
                        <CardTitle>Data</CardTitle>
                    </CardHeader>
                    <CardText>
                        Design und Optimierung relationaler und NoSQL-Datenbanken.
                        Fokus auf Datenintegrität und Performance-Tuning.
                    </CardText>
                    <BadgeContainer>
                        <TechBadge>Oracle</TechBadge>
                        <TechBadge>PostgreSQL</TechBadge>
                        <TechBadge>MariaDB</TechBadge>
                        <TechBadge>MongoDB</TechBadge>
                        <TechBadge>SQL Tuning</TechBadge>
                        <TechBadge>SQLDeveloper</TechBadge>
                        <TechBadge>MySQL</TechBadge>
                        <TechBadge>PhpMyAdmin</TechBadge>
                    </BadgeContainer>
                </BentoCard>

                {/* DevOps */}
                <BentoCard $gridArea="3 / 3 / 4 / 5">
                    <CardHeader>
                        <IconWrapper><FaDocker /></IconWrapper>
                        <CardTitle>DevOps</CardTitle>
                    </CardHeader>
                    <CardText>
                        Automatisierung von Deployment-Prozessen und Container-Orchestrierung für
                        skalierbare Cloud-Infrastrukturen.
                    </CardText>
                    <BadgeContainer>
                        <TechBadge>Docker</TechBadge>
                        <TechBadge>Kubernetes</TechBadge>
                        <TechBadge>CI/CD Pipelines</TechBadge>
                        <TechBadge>Jenkins</TechBadge>
                        <TechBadge>Vercel</TechBadge>
                        <TechBadge>Ansible</TechBadge>
                        <TechBadge>Gradle</TechBadge>
                    </BadgeContainer>
                </BentoCard>

                <BentoCard $gridArea="2 / 3 / 3 / 5">
                    <CardHeader>
                        <IconWrapper><FaCode /></IconWrapper> {/* Oder ein KI-spezifisches Icon */}
                        <CardTitle>AI & Automation</CardTitle>
                    </CardHeader>
                    <CardText>
                        Integration von <strong>LLMs</strong> in Software-Workflows. Entwicklung von KI-gestützten
                        Tools und Automatisierung von Prozessen. Echtzeit-Kommunikation und Event-gesteuerte Architekturen.
                    </CardText>
                    <BadgeContainer>
                        <TechBadge>Prompt Engineering</TechBadge>
                        <TechBadge>AI Integration</TechBadge>
                        <TechBadge>OpenAI API</TechBadge>
                        <TechBadge>Automation</TechBadge>
                        <TechBadge>WebSockets</TechBadge>
                        <TechBadge>Socket.io</TechBadge>
                        <TechBadge>Claude Code</TechBadge>
                    </BadgeContainer>
                </BentoCard>

                <BentoCard $gridArea="4 / 1 / 5 / 3">
                    <CardHeader>
                        <IconWrapper><FaCodeBranch /></IconWrapper>
                        <CardTitle>Workflow & Tools</CardTitle>
                    </CardHeader>
                    <CardText>
                        Sicherer Umgang mit modernen Entwicklungsumgebungen und agilen Methoden.
                        Expertenwissen in der Modellierung und Transformation komplexer Datenformate.
                    </CardText>
                    <BadgeContainer>
                        <TechBadge>IntelliJ IDEA, VS Code</TechBadge>
                        <TechBadge>Postman</TechBadge>
                        <TechBadge>JSON / XML /YAML</TechBadge>
                        <TechBadge>Git / GitLab / GitHub</TechBadge>
                        <TechBadge>Scrum / Agile</TechBadge>
                        <TechBadge>Jira / Confluence</TechBadge>
                        <TechBadge>Bitbucket</TechBadge>
                        <TechBadge>Code Review</TechBadge>
                    </BadgeContainer>
                </BentoCard>

                <BentoCard $gridArea="4 / 3 / 5 / 5">
                    <CardHeader>
                        <IconWrapper><FaCode /></IconWrapper>
                        <CardTitle>Architecture</CardTitle>
                    </CardHeader>
                    <CardText>
                        Konzeption wartbarer Systeme durch <strong>Domain-Driven Design (DDD)</strong> und hexagonale Architekturen.
                    </CardText>
                    <BadgeContainer>
                        <TechBadge>DDD</TechBadge>
                        <TechBadge>Clean Architecture</TechBadge>
                        <TechBadge>Design Patterns</TechBadge>
                        <TechBadge>Microservices</TechBadge>
                        <TechBadge>Hexagonal Architecture</TechBadge>
                        <TechBadge>Event-Driven</TechBadge>
                        <TechBadge>Global State</TechBadge>
                    </BadgeContainer>
                </BentoCard>
            </BentoContainer>
        </GridSection>
    );
}

const GridSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, auto);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

const BentoCard = styled.div<{ $gridArea?: string }>`
    grid-area: ${props => props.$gridArea};
    background: rgba(31, 41, 55, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 242, 255, 0.1);
    border-radius: 24px;
    padding: 2rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100%;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        border-color: #00f2ff;
        box-shadow: 0 10px 30px rgba(0, 242, 255, 0.15);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at top right, rgba(0, 242, 255, 0.05), transparent);
        pointer-events: none;
    }
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;      /* Abstand zwischen Icon und Text */
    margin-bottom: 1.5rem;
`;

/* Das Icon-Styling leicht anpassen (margin-bottom entfernen) */
const IconWrapper = styled.div`
    font-size: 2rem; /* Etwas kleiner wirkt oft eleganter neben dem Text */
    color: #00f2ff;
    filter: drop-shadow(0 0 8px rgba(0, 242, 255, 0.4));
    display: flex;
    align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;      /* Margin entfernen, da der Header den Abstand regelt */
  color: #f5f5f5;
`;

const CardText = styled.p`
    color: #a0a0a0;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 10px;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto; /* Schiebt die Badges nach ganz unten in der Card */
  padding-top: 2rem;
`;

const TechBadge = styled.span`
  background: rgba(0, 242, 255, 0.05);
  border: 1px solid rgba(0, 242, 255, 0.15);
  color: #00f2ff;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 242, 255, 0.1);
    border-color: #00f2ff;
    box-shadow: 0 0 10px rgba(0, 242, 255, 0.2);
    transform: translateY(-2px);
  }
`;