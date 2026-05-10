import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfitDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abdisileshi.dev"),
  title: {
    default: "Abdi Sileshi Worku | Full-Stack Software Engineer",
    template: "%s | Abdi Sileshi Worku"
  },
  description:
    "Portfolio of Abdi Sileshi Worku (Abdi Sileshi) — a Full-Stack Software Engineer specializing in Next.js, React, Node.js, and modern web technologies. Building scalable, beautiful digital experiences.",
  keywords: [
    "Abdi Sileshi",
    "Abdi Sileshi Worku",
    "Abdi Sileshi Portfolio",
    "Abdi Sileshi Software Engineer",
    "Abdi Sileshi Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Abdi Sileshi Worku", url: "https://www.abdisileshi.dev" }],
  creator: "Abdi Sileshi Worku",
  publisher: "Abdi Sileshi Worku",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Abdi Sileshi Worku | Full-Stack Software Engineer",
    description:
      "Portfolio of Abdi Sileshi Worku (Abdi Sileshi) — a Full-Stack Software Engineer building scalable digital experiences.",
    url: "https://www.abdisileshi.dev",
    siteName: "Abdi Sileshi Worku Portfolio",
    images: [
      {
        url: "/hero-profile.png",
        width: 800,
        height: 600,
        alt: "Abdi Sileshi Worku",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdi Sileshi Worku | Full-Stack Software Engineer",
    description:
      "Portfolio of Abdi Sileshi Worku — a Full-Stack Software Engineer building scalable digital experiences.",
    images: ["/hero-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.abdisileshi.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${outfitDisplay.variable} ${jetbrains.variable} antialiased noise-overlay`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
