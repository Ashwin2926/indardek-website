// src/components/app/page-header.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Adjust path as needed
import Link from 'next/link'; // Import Link for breadcrumbs

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
  backgroundImage?: string;
}

const PageHeader = ({ title, description, breadcrumbs, backgroundImage }: PageHeaderProps) => {
  const hasImage = Boolean(backgroundImage);

  return (
    <div
      className={cn(
        "relative border-b",
        hasImage ? "bg-cover bg-center text-white" : "bg-gradient-to-br from-black to-gray-800 text-white"
      )}
      style={hasImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay */}
      {hasImage && (
        <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />
      )}

      {/* Content */}
      <div className={cn(
        "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8",
        // Adjusted padding to ensure content starts below a typical fixed navbar
        "pt-32 pb-12" // Increased top padding, kept bottom padding
      )}>
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.name}>
                <div className="flex items-center">
                  {index !== 0 && (
                    <ChevronRight
                      className={cn("h-5 w-5 flex-shrink-0", "text-gray-200")}
                      aria-hidden="true"
                    />
                  )}
                  {/* Using Next.js Link component for proper routing */}
                  <Link
                    href={crumb.href}
                    className={cn(
                      "ml-2 text-sm font-medium hover:text-white",
                      index === breadcrumbs.length - 1 // Apply primary color to the last breadcrumb
                        ? "text-white cursor-default" // Last crumb is typically not a link, or styled differently
                        : index === 0
                          ? "text-blue-300 hover:text-blue-100" // First crumb, potentially the 'Home' link
                          : "text-gray-300 hover:text-white" // Other crumbs
                    )}
                    aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                  >
                    {crumb.name}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white">{title}</h1>
        <p className="mt-2 text-lg max-w-3xl text-blue-100">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;