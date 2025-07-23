import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Youssef Ismail - Professional Video Editor ",
  description:
    "Award-winning video editor crafting cinematic stories that captivate audiences. Specializing in commercial editing, color grading, and motion graphics.",
  keywords: "video editor, cinematic editing, color grading, motion graphics, commercial video, documentary editing",
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    title: "Youssef Ismail - Professional Video Editor",
    description: "Award-winning video editor crafting cinematic stories that captivate audiences.",
    url: "https://your-domain.vercel.app",
    siteName: "Youssef Ismail  Video Editor",
    images: [
      {
        url: "/owner-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Youssef Ismail  - Professional Video Editor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Ismail - Professional Video Editor",
    description: "Award-winning video editor crafting cinematic stories that captivate audiences.",
    images: ["/owner-portrait.jpg"],
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
