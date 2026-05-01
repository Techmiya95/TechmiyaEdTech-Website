import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  structuredData?: object | object[];
}

export const SEOHead = ({
  title,
  description,
  keywords = 'IT training, Bangalore, Jayanagar, Generative AI, Machine Learning, Data Science, Python, AWS, DevOps',
  canonicalUrl,
  ogImage = 'https://www.techmiyaedtech.com/techmiyaedtech_new_logo.png',
  ogType = 'website',
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = `${title} | Techmiya EdTech`;
  const siteUrl = 'https://www.techmiyaedtech.com';
  
  // Support both single schema object and array of schemas
  const schemas = structuredData
    ? Array.isArray(structuredData) ? structuredData : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Techmiya EdTech" />
      
      {/* Geo Location Meta Tags - Local SEO */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Jayanagar, Bangalore" />
      <meta name="geo.position" content="12.9279;77.5817" />
      
      {/* Canonical URL & Hreflang */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Techmiya EdTech" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@TechmiyaEdtech" />
      <meta name="twitter:creator" content="@TechmiyaEdtech" />
      
      {/* Structured Data - supports multiple schemas */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
