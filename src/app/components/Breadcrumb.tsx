'use client';

import Link from 'next/link';
import { ChevronLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "خانه",
      "item": "https://famirwebdesign.com"
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.label,
      "item": item.href ? `https://famirwebdesign.com${item.href}` : undefined
    }))
  ];

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbData
          })
        }}
      />
      
      {/* Visual Breadcrumb */}
      <nav className="py-4 px-6 bg-gray-900/50 backdrop-blur-sm border-b border-white/10" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li>
              <Link 
                href="/" 
                className="flex items-center hover:text-blue-400 transition-colors"
                aria-label="خانه"
              >
                <HomeIcon className="h-4 w-4 ml-1" />
                خانه
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronLeftIcon className="h-4 w-4 text-gray-600 mx-2" />
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb; 