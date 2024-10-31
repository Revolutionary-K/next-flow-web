import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-flow",
  description: "A modern Business Process Model and approval flow engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
