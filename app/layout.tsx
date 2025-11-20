import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arnav Dangre - Portfolio",
  description: "Computer Science and Engineering Physics student at Cornell University. AI/ML Engineer and Software Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
