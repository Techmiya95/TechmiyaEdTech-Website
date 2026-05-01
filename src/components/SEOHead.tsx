export interface SEOHeadProps {
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
  
  const schemas = structuredData
    ? Array.isArray(structuredData) ? structuredData : [structuredData]
    : [];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Techmiya EdTech" />
      
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${siteUrl}${canonicalUrl || ''}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Techmiya EdTech" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${canonicalUrl || ''}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {canonicalUrl && (
        <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />
      )}

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};
