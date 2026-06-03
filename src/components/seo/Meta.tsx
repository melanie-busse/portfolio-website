import Head from "next/head";
import { useTranslations } from "next-intl";

interface MetaProps {
  titleKey?: string;
  descriptionKey?: string;
  overrideTitle?: string;
  overrideDescription?: string;
  noIndex?: boolean;
}

export default function Meta({
  titleKey,
  descriptionKey,
  overrideTitle,
  overrideDescription,
  noIndex = false,
}: MetaProps) {
  const t = useTranslations("common");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deine-domain.de";

  const finalTitle = overrideTitle || (titleKey ? t(`metadata.${titleKey}`) : "Melanie Busse");
  const finalDescription =
    overrideDescription || (descriptionKey ? t(`metadata.${descriptionKey}`) : "");

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <link rel="alternate" href={`${siteUrl}/`} hrefLang="x-default" />
          <link rel="alternate" href={`${siteUrl}/de`} hrefLang="de" />
          <link rel="alternate" href={`${siteUrl}/da`} hrefLang="da" />
          <link rel="alternate" href={`${siteUrl}/en`} hrefLang="en" />
        </>
      )}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
