import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Impact Scorer — Smarter Changelog Prioritization",
  description: "Analyze pull requests and assign impact scores to prioritize what goes in your changelogs. Built for product managers and engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="829831d9-f5cb-42ef-a96a-df38bca2da3b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
