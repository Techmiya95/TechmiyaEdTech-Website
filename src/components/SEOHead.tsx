import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  structuredData?: object;
}

export const SEOHead = ({
  title,
  description,
  keywords = 'IT training, Bangalore, Jayanagar, Generative AI, Machine Learning, Data Science, Python, AWS, DevOps',
  canonicalUrl,
  ogImage = 'https://techmiyaedtech.com/techmiyaedtech_new_logo.png',
  ogType = 'website',
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = `${title} | Techmiya EdTech - Best IT Training Institute Bangalore`;
  const siteUrl = 'https://techmiyaedtech.com';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
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
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
