import Hero from "@/components/features/Hero";
import SkillsGrid from "@/components/features/SkillsGrid";
import { GetStaticProps } from "next";
import Meta from "@/components/seo/Meta";

export default function Home() {
  return (
    <>
      <Meta titleKey="homeTitle" descriptionKey="homeDescription" />
      <main>
        <Hero />
        <SkillsGrid />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "de";

  try {
    return {
      props: {
        messages: {
          common: (await import(`@/messages/${currentLocale}/common.json`)).default,
          skills: (await import(`@/messages/${currentLocale}/skills.json`)).default,
        },
      },
    };
  } catch (error) {
    console.error("Fehler beim Laden der Übersetzungsdateien in getStaticProps:", error);
    return { props: { messages: {} } };
  }
};
