import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import "cal-sans";
import { Analytics } from "@/components/ui/analytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lujain Alajmi",
  description: "Your friendly neighborhood nerd.",
  keywords: [
    "lujain",
    "alajmi",
    "lujain alajmi",
    "lujainalajmi",
    "react",
    "riyadh",
    "KSA",
  ],
  authors: {
    name: "Lujain Alajmi",
    url: "https://www.lujain.dev/",
  },
  creator: "Lujain Alajmi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lujain.dev/",
    title: "Lujain Alajmi",
    description: "Your friendly neighborhood nerd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lujain Alajmi",
    description: "Your friendly neighborhood nerd.",
    images: [`https://www.lujain.dev/og.jpg`],
    creator: "lujainalajmi",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `https://www.lujain.dev/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "antialiased",
          "min-h-screen",
          "text-[0.9rem]",
          "bg-background"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
