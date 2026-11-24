import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f5f3ed",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Eng. Maaz Ullah | Software Engineer | AI, Machine Learning & Python Developer",
  description:
    "Official portfolio of Eng. Maaz Ullah. PEC-recognized Software Engineering graduate from MUST specializing in Python, Computer Vision, Deep Learning, and AI-Agent Workflows.",
  keywords: [
    "Eng. Maaz Ullah",
    "Maaz Ullah",
    "Software Engineer",
    "AI Developer",
    "Machine Learning Engineer",
    "Python Developer",
    "Computer Vision",
    "MUST",
    "PEC Accredited",
    "VisionLens",
  ],
  authors: [{ name: "Eng. Maaz Ullah" }],
  creator: "Eng. Maaz Ullah",
  metadataBase: new URL("https://github.com/Maaskhan"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Maaskhan",
    title: "Eng. Maaz Ullah | Software Engineer & AI Developer",
    description:
      "PEC-recognized Software Engineer specializing in Python, Deep Learning, Computer Vision, and AI-Agent pipelines.",
    siteName: "Eng. Maaz Ullah Portfolio",
    images: [
      {
        url: "/images/profile-1.png",
        width: 1024,
        height: 960,
        alt: "Eng. Maaz Ullah - Software Engineer & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eng. Maaz Ullah | Software Engineer & AI Developer",
    description:
      "PEC-recognized Software Engineer specializing in Python, Deep Learning, Computer Vision, and AI-Agent pipelines.",
    images: ["/images/profile-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#53684d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
