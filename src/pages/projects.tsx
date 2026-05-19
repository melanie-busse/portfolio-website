import styled from 'styled-components';
import { projectsData } from '@/data/projectsData';
import {HeaderSection} from "@/components/HeaderSection";
import {PageContainer} from "@/components/PageContainer";

import {Period} from "@/components/Period";
import {CardContent} from "@/components/CardContent";
import {TagGroup} from "@/components/TagGroup";

export default function Projects() {
    return (
        <PageContainer>
            <HeaderSection
                headline="Featured Projects"
                text="Eine Auswahl meiner Arbeiten aus den Bereichen E-Commerce,
                        öffentliche Verwaltung und industrielle Softwareentwicklung."
            />

                {projectsData.map((project, index) => (
                    <CardContainer key={index}>
                        <Period text={project.period}/>
                        <CardContent
                            title={project.title}
                            company={project.company}
                            description={project.description}
                        >
                            <TagGroup tags={project.tags} />
                        </CardContent>
                    </CardContainer>
                ))}

        </PageContainer>
    );
}

const CardContainer = styled.div`
    position: relative;
    margin-bottom: 4rem;
`;