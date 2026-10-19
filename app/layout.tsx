import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "İrem Özbilgin — Software Engineer & AI Builder",
  description:
    "Software engineering, applied AI, privacy-first products and human-centered digital experiences.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
