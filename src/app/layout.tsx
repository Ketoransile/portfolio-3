import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
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
  title: "Abdi Sileshi Worku | Full-Stack Software Engineer",
  description:
    "Portfolio of Abdi Sileshi Worku — a Full-Stack Software Engineer specializing in Next.js, React, Node.js, and modern web technologies. Building scalable, beautiful digital experiences.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
    "Abdi Sileshi Worku",
  ],
  authors: [{ name: "Abdi Sileshi Worku" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Abdi Sileshi Worku | Full-Stack Software Engineer",
    description:
      "Building scalable, beautiful digital experiences with Next.js, React, and Node.js.",
    type: "website",
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
          <SmoothScroll>{children}</SmoothScroll>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
