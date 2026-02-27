import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const siteUrl = "https://mantglo.com";

export default function SEO({ title, description, path = "/" }: SEOProps) {
  const canonicalUrl = `${siteUrl}${path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mantglo SAS",
    image: `${siteUrl}/og-image.svg`,
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

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}/og-image.svg`} />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.svg`} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mantglo SAS" />
      <meta httpEquiv="content-language" content="es-CO" />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
