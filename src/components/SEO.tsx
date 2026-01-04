import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Open Graph (WhatsApp, Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mantglo.com" />
      <meta
        property="og:image"
        content="https://mantglo.com/og-image.jpg"
      />

      {/* SEO extra */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mantglo SAS" />
    </Helmet>
  );
}
