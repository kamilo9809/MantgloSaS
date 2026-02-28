import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  preloadImage?: string;
}

const siteUrl = "https://mantglo.com";

export default function SEO({ title, description, path = "/", preloadImage }: SEOProps) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  const canonicalUrl = `${siteUrl}${normalizedPath}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mantglo SAS",
    image: `${siteUrl}/og-image.webp`,
    url: siteUrl,
    telephone: "+57 313 584 3579",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barranquilla",
      addressCountry: "CO",
    },
    areaServed: "Colombia",
    description,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {preloadImage && <link rel="preload" as="image" href={preloadImage} fetchPriority="high" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mantglo SAS" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}/og-image.webp`} />
      <meta property="og:locale" content="es_CO" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.webp`} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mantglo SAS" />
      <meta httpEquiv="content-language" content="es-CO" />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
