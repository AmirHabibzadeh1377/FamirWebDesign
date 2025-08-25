import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({ 
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazir"
});

export const metadata: Metadata = {
  title: "FamirWebDesign | آژانس طراحی وب حرفه‌ای در تهران",
  description: "آژانس طراحی وب FamirWebDesign - ارائه خدمات طراحی سایت، توسعه وب، UI/UX و دیجیتال مارکتینگ در تهران. بیش از 50 پروژه موفق و 30 مشتری راضی.",
  keywords: [
    "طراحی وب",
    "طراحی سایت", 
    "توسعه وب",
    "دیجیتال مارکتینگ",
    "UI/UX",
    "سایت فروشگاهی",
    "سایت شرکتی",
    "تهران",
    "ایران",
    "Next.js",
    "React",
    "TypeScript"
  ].join(", "),
  authors: [{ name: "FamirWebDesign Team" }],
  creator: "FamirWebDesign",
  publisher: "FamirWebDesign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://famirwebdesign.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fa': '/fa',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://famirwebdesign.com',
    siteName: 'FamirWebDesign',
    title: 'FamirWebDesign | آژانس طراحی وب حرفه‌ای در تهران',
    description: 'آژانس طراحی وب FamirWebDesign - ارائه خدمات طراحی سایت، توسعه وب، UI/UX و دیجیتال مارکتینگ در تهران. بیش از 50 پروژه موفق و 30 مشتری راضی.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FamirWebDesign - آژانس طراحی وب حرفه‌ای',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FamirWebDesign | آژانس طراحی وب حرفه‌ای در تهران',
    description: 'آژانس طراحی وب FamirWebDesign - ارائه خدمات طراحی سایت، توسعه وب، UI/UX و دیجیتال مارکتینگ در تهران.',
    images: ['/twitter-image.jpg'],
    creator: '@famirwebdesign',
    site: '@famirwebdesign',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Web Design Agency',
  other: {
    'geo.region': 'IR',
    'geo.placename': 'Tehran',
    'geo.position': '35.6892;51.3890',
    'ICBM': '35.6892, 51.3890',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FamirWebDesign",
              "alternateName": "فامیر وب دیزاین",
              "url": "https://famirwebdesign.com",
              "description": "آژانس طراحی وب حرفه‌ای در تهران",
              "inLanguage": "fa-IR",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://famirwebdesign.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FamirWebDesign",
              "alternateName": "فامیر وب دیزاین",
              "url": "https://famirwebdesign.com",
              "logo": "https://famirwebdesign.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+98-912-123-4567",
                "contactType": "customer service",
                "areaServed": "IR",
                "availableLanguage": ["Persian", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tehran",
                "addressCountry": "IR"
              },
              "sameAs": [
                "https://instagram.com/famirwebdesign",
                "https://linkedin.com/company/famirwebdesign",
                "https://twitter.com/famirwebdesign"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "طراحی وب و توسعه سایت",
              "provider": {
                "@type": "Organization",
                "name": "FamirWebDesign"
              },
              "description": "طراحی سایت‌های مدرن و ریسپانسیو با استفاده از جدیدترین تکنولوژی‌ها",
              "areaServed": "IR",
              "serviceType": "Web Design",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "IRR",
                "description": "مشاوره رایگان طراحی وب"
              }
            })
          }}
        />
      </head>
      <body className={`${vazir.variable} font-vazir bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
