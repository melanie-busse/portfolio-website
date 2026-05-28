import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { useTranslations } from "next-intl";

import { projectsData } from "@/data/projectsData";
import { PageContainer } from "@/components/common/PageContainer";
import ProjectHeader from "@/components/layout/ProjectPage/ProjectHeader";
import ProjectLead from "@/components/layout/ProjectPage/ProjectLead";
import ProjectChallenge from "@/components/layout/ProjectPage/ProjectChallenge";
import ProjectTechnology from "@/components/layout/ProjectPage/ProjectTechnology";
import ProjectImpact from "@/components/layout/ProjectPage/ProjectImpact";
import ProjectDeepDive from "@/components/layout/ProjectPage/ProjectDeepDive";
import ProjectStack from "@/components/layout/ProjectPage/ProjectStack";
import ProjectFooter from "@/components/layout/ProjectPage/ProjectFooter";

export default function ProjectDetails() {
  const t = useTranslations();
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return (
      <PageContainer>
        <div>Loading...</div>
      </PageContainer>
    );
  }

  const project = projectsData.find((p) => p.id === (id as string));

  if (!project) {
    return (
      <PageContainer>
        <div>{t("projects.notFound") || "Project not found"}</div>
      </PageContainer>
    );
  }

  const projectOrder = projectsData.map((project) => project.id);
  const projectId = Array.isArray(id) ? id[0] : id || "";
  const currentIndex = projectOrder.indexOf(projectId);

  const finalIndex = currentIndex === -1 ? 0 : currentIndex;
  const prevIndex = (finalIndex - 1 + projectOrder.length) % projectOrder.length;
  const nextIndex = (finalIndex + 1) % projectOrder.length;

  const prevProjectId = projectOrder[prevIndex];
  const nextProjectId = projectOrder[nextIndex];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <ProjectLead projectId={project.id} />
      <ProjectChallenge projectId={project.id} />
      <ProjectTechnology projectId={project.id} />
      <ProjectImpact projectId={project.id} />
      <ProjectDeepDive projectId={project.id} />
      <ProjectStack projectId={project.id} />
      <ProjectFooter prevProjectId={prevProjectId} nextProjectId={nextProjectId} />
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "de";

  try {
    return {
      props: {
        messages: {
          common: (await import(`@/messages/${currentLocale}/common.json`)).default,
          projects: (await import(`@/messages/${currentLocale}/projects.json`)).default,
        },
      },
    };
  } catch (error) {
    console.error("Fehler beim Laden der Übersetzungsdateien in getStaticProps:", error);
    return { props: { messages: {} } };
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const currentLocales = locales || ["de"];
  const paths: any[] = [];

  projectsData.forEach((project) => {
    currentLocales.forEach((locale) => {
      paths.push({
        params: { id: project.id },
        locale: locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};
