import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grace Beber | CMO & VP Marketing & Strategy',
  description:
    'Executive portfolio of Grace Beber: CMO, VP of Marketing & Strategy, AI Generalist, and organizational leader with 25+ years connecting strategy to the market across the Peace Corps, United Nations, Gartner, and Oceania University of Medicine.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
