import styled from "styled-components";

interface TagGroupProps {
  tags: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
}

export function TagGroup({ tags }: TagGroupProps) {
  return (
    <StyledTagGroup>
      {tags.frontend?.map((tag) => (
        <Tag key={tag} $type="frontend">
          {tag}
        </Tag>
      ))}
      {tags.backend?.map((tag) => (
        <Tag key={tag} $type="backend">
          {tag}
        </Tag>
      ))}
      {tags.tools?.map((tag) => (
        <Tag key={tag} $type="tools">
          {tag}
        </Tag>
      ))}
    </StyledTagGroup>
  );
}

const StyledTagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span<{ $type: "frontend" | "backend" | "tools" }>`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  /* Dynamische Farben basierend auf $type und deinem Theme */
  color: ${({ theme, $type }) => theme.categories[$type].text};
  background: ${({ theme, $type }) => theme.categories[$type].background};
  border: 1px solid ${({ theme, $type }) => theme.categories[$type].border};

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme, $type }) => theme.categories[$type].text};
  }
`;
