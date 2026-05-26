import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";
import Prism from "prismjs";
import "prismjs/components/prism-java";

import ProjectSection from "@/components/layout/ProjectPage/ProjectSection";
import SectionTitle from "@/components/layout/ProjectPage/SectionTitle";

interface ProjectDeepDiveProps {
  projectId: string;
}

export default function ProjectDeepDive({ projectId }: ProjectDeepDiveProps) {
  const t = useTranslations();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      Prism.highlightAll();
    }
  }, [isMounted, projectId]); // Triggert auch, wenn das Projekt gewechselt wird

  // Wenn noch auf dem Server oder Daten fehlen, rendern wir nichts oder einen Platzhalter
  if (!isMounted) return null;

  const codeText = t.raw(`projects.items.${projectId}.deepDive.code`) || "";
  const filePath = t(`projects.items.${projectId}.deepDive.filePath`);
  const contextText = t(`projects.items.${projectId}.deepDive.context`);

  return (
    <ProjectSection>
      <SectionTitle title="04 / DEEP DIVE" headline="Technisches Highlight" />

      <EditorContainer>
        <EditorHeader>
          <DotContainer>
            <WindowDot $color="#ff5f56" />
            <WindowDot $color="#ffbd2e" />
            <WindowDot $color="#27c93f" />
          </DotContainer>
          <FilePath>{filePath}</FilePath>
        </EditorHeader>

        <CodeArea>
          <LineNumbers>
            {codeText.split("\n").map((_: string, i: number) => (
              <span key={i}>{i + 1}</span>
            ))}
          </LineNumbers>
          <PreCode>
            {/* language-java sagt Prism, was zu tun ist */}
            <code className="language-java">{codeText}</code>
          </PreCode>
        </CodeArea>

        <ContextBox>
          <ContextLabel>// Kontext</ContextLabel>
          <p>{contextText}</p>
        </ContextBox>
      </EditorContainer>
    </ProjectSection>
  );
}

export const PreCode = styled.pre`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.tech};
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textMain};
  line-height: 1.5;
  white-space: pre;

  code {
    font-family: inherit;
    background: none !important; /* Verhindert, dass Prism eigene Hintergründe setzt */
    padding: 0 !important;
  }

  /* --- PRISM SYNTAX HIGHLIGHTING --- */

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${(props) => props.theme.colors.comments};
    font-style: italic;
  }

  .token.annotation {
    color: ${(props) => props.theme.colors.code.yellow};
  }

  .token.keyword {
    color: ${(props) => props.theme.colors.code.pink};
    font-weight: 600;
  }

  .token.string {
    color: ${(props) => props.theme.colors.code.green};
  }

  .token.class-name,
  .token.generics {
    color: ${(props) => props.theme.colors.accentAqua};
  }

  .token.function {
    color: ${(props) => props.theme.colors.code.lightBlue};
  }

  .token.operator {
    color: ${(props) => props.theme.colors.code.pink};
    background: none;
  }
`;

export const EditorContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.backgrounds.editor};
  border: ${(props) => props.theme.borders.border};
  border-radius: 12px;
  overflow: hidden;
  margin-top: 1.5rem;
  box-shadow: ${(props) => props.theme.shadows.editor};
`;

export const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: ${(props) => props.theme.colors.backgrounds.editorHeader};
  border-bottom: ${(props) => props.theme.borders.editorHeader};
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const WindowDot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

export const FilePath = styled.span`
  font-family: ${(props) => props.theme.fonts.tech};
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.comments};
`;

/* ==========================================================================
   CODE AREA & LINE NUMBERS
   ========================================================================== */

export const CodeArea = styled.div`
  display: flex;
  padding: 1.5rem 1.25rem;
  gap: 1.25rem;
  overflow-x: auto;
  background: ${(props) => props.theme.colors.backgrounds.codeArea};
`;

export const LineNumbers = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  color: ${(props) => props.theme.colors.lineNumbers};
  font-family: ${(props) => props.theme.fonts.tech};
  font-size: 0.85rem;
  user-select: none;
  line-height: 1.5;

  span {
    display: block;
    min-width: 1.5rem;
  }
`;

/* ==========================================================================
   CONTEXT BOX (ERKLÄRUNG UNTEN)
   ========================================================================== */

export const ContextBox = styled.div`
  padding: 1.25rem 1.5rem;
  background: ${(props) => props.theme.colors.backgrounds.contextBox};
  border-top: ${(props) => props.theme.borders.editorHeader};
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ContextLabel = styled.span`
  font-family: ${(props) => props.theme.fonts.tech};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentAqua};
  white-space: nowrap;
`;
