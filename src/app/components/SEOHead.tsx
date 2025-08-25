'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = 'https://famirwebdesign.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'FamirWebDesign Team',
  section,
  tags = []
}) => {
  const fullTitle = `${title} | FamirWebDesign`;
  const fullDescription = `${description} - آژانس طراحی وب حرفه‌ای در تهران با بیش از 50 پروژه موفق.`;
  
  const defaultKeywords = [
    'طراحی وب',
    'طراحی سایت',
    'توسعه وب',
    'دیجیتال مارکتینگ',
    'UI/UX',
    'تهران',
    'ایران'
  ];
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="FamirWebDesign" />
      <meta property="og:locale" content="fa_IR" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@famirwebdesign" />
      <meta name="twitter:creator" content="@famirwebdesign" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        <meta property="article:tag" content={tags.join(', ')} />
      )}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? 'Article' : 'WebPage',
            "headline": fullTitle,
            "description": fullDescription,
            "image": image,
            "url": url,
            "inLanguage": "fa-IR",
            "isPartOf": {
              "@type": "WebSite",
              "name": "FamirWebDesign",
              "url": "https://famirwebdesign.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FamirWebDesign",
              "logo": {
                "@type": "ImageObject",
                "url": "https://famirwebdesign.com/logo.png"
              }
            },
            "mainEntity": type === 'article' ? {
              "@type": "Article",
              "headline": fullTitle,
              "description": fullDescription,
              "image": image,
              "author": {
                "@type": "Person",
                "name": author
              },
              "publisher": {
                "@type": "Organization",
                "name": "FamirWebDesign"
              },
              "datePublished": publishedTime,
              "dateModified": modifiedTime,
              "articleSection": section,
              "keywords": allKeywords.join(', ')
            } : undefined
          })
        }}
      />
    </Head>
  );
};

export default SEOHead; 