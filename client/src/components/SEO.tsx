import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({
  title = "Chris Design - Web Designer & Developer",
  description = "Transform your digital presence with stunning, user-centric web design by Chris. Specializing in modern, responsive websites, UI/UX design, and custom development that drive real results.",
  keywords = "chris design, web designer, website designer, UI/UX design, responsive web design, custom web development, portfolio, web design services",
  ogImage = "/og-image.png",
  ogType = "website",
}: SEOProps) {
  const fullTitle = title.includes("Chris Design") ? title : `${title} | Chris Design`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
