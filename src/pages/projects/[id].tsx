import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { projectsData } from "@/data/projectsData";
import { useTranslations } from "next-intl";

import { PageContainer } from "@/components/common/PageContainer";
import ProjectHeader from "@/components/layout/ProjectHeader";
import ProjectLead from "@/components/layout/ProjectLead";
import ProjectChallengeSection from "@/components/layout/ProjectChallengeSection";

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

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <ProjectLead projectId={project.id} />
      <ProjectChallengeSection projectId={project.id} />
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "de";

  try {
    const messages = (await import(`@/messages/${currentLocale}.json`)).default;

    return {
      props: {
        messages,
      },
    };
  } catch (error) {
    console.error("Übersetzungsdatei konnte nicht geladen werden:", error);
    return {
      props: {
        messages: {},
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Generiert die Seiten on-the-fly beim ersten Aufruf
  return {
    paths: [],
    fallback: "blocking",
  };
};
