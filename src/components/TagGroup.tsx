import styled from 'styled-components';

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
            {tags.frontend?.map(tag => (
                <Tag key={tag} $type="frontend">{tag}</Tag>
            ))}
            {tags.backend?.map(tag => (
                <Tag key={tag} $type="backend">{tag}</Tag>
            ))}
            {tags.tools?.map(tag => (
                <Tag key={tag} $type="tools">{tag}</Tag>
            ))}
        </StyledTagGroup>
    );
}

const CATEGORY_COLORS = {
    frontend: {
        text: '#00f2ff',
        bg: 'rgba(0, 242, 255, 0.1)',
        border: 'rgba(0, 242, 255, 0.3)'
    },
    backend: {
        text: '#b794f4',
        bg: 'rgba(183, 148, 244, 0.1)',
        border: 'rgba(183, 148, 244, 0.3)'
    },
    tools: {
        text: '#2cb67d',
        bg: 'rgba(44, 182, 125, 0.1)',
        border: 'rgba(44, 182, 125, 0.3)'
    }
};

const StyledTagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span<{ $type: 'frontend' | 'backend' | 'tools' }>`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  color: ${props => CATEGORY_COLORS[props.$type].text};
  background: ${props => CATEGORY_COLORS[props.$type].bg};
  border: 1px solid ${props => CATEGORY_COLORS[props.$type].border};

  &:hover {
    transform: translateY(-2px);
    border-color: ${props => CATEGORY_COLORS[props.$type].text};
  }
`;