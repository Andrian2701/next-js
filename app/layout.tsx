import type { Metadata } from "next";
import Header from "@/components/Header";

import "./../styles/boilerplate.scss";

export const metadata: Metadata = {
  title: "Next Project",
  description: "Project for NextJS practise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
