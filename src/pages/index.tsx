import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsGrid />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../../messages/${locale || "de"}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};
