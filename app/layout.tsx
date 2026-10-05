import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Dhizar Technology | Occipital Visual-Cortex Interface',
  description:
    'Dhizar Technology is a hands-free Visual-Cortex Brain-Computer Interface (BCI) controller utilizing SSVEP frequency sync (8–20 Hz) at sub-50ms latency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Geist+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#6b8cc8] text-[#0e1b33] font-sans antialiased selection:bg-[#a71616] selection:text-white">
        {children}
      </body>
    </html>
  );
}
