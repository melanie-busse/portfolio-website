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

  // Angenommen, das ist deine Liste der Projekt-IDs (Reihenfolge wie auf der Startseite)
  const projectOrder = projectsData.map((project) => project.id);

  // 1. Sichere Extraktion: Wenn id ein Array ist, nimm das erste Element. Wenn undefined, nimm einen leeren String.
  const projectId = Array.isArray(id) ? id[0] : id || "";

  // 2. Nur wenn wir eine gültige ID aus der Liste haben, berechnen wir die Navigation
  const currentIndex = projectOrder.indexOf(projectId);

  // Falls die ID (z.B. beim ersten unvollständigen Render) nicht im Array ist, fangen wir das ab
  if (currentIndex === -1) {
    return null; // Oder ein Lade-Spinner, bis Next.js die Route vollständig aufgelöst hat
  }

  // 3. Jetzt ist currentIndex garantiert eine gültige Zahl und wir können sicher wrappen
  const prevIndex = (currentIndex - 1 + projectOrder.length) % projectOrder.length;
  const nextIndex = (currentIndex + 1) % projectOrder.length;

  const prevProjectId = projectOrder[prevIndex];
  const nextProjectId = projectOrder[nextIndex];

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
    // Lädt die passenden Übersetzungsdateien für die Seite (wichtig für next-intl!)
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  // Wenn keine Locales definiert sind, nutzen wir Standard-Deutsch
  const currentLocales = locales || ["de"];
  const paths: any[] = [];

  // Wir erstellen für jedes echte Projekt einen Pfad für jede Sprache
  projectsData.forEach((project) => {
    currentLocales.forEach((locale) => {
      paths.push({
        params: { id: project.id },
        locale: locale, // Das sorgt dafür, dass next-intl die Sprachumgebung kapiert!
      });
    });
  });

  return {
    paths,
    fallback: false, // Jedes Projekt außerhalb der projectsData wird direkt ein sauberer 404, kein Absturz mehr
  };
};
